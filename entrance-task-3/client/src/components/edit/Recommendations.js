import React, { Component, Fragment } from 'react';
import moment from 'moment';

import Recommendation from './Recommendation';
import { 
	toTimeFormat, toMoment, toRoomId, byClosestFloor, 
	filterByEventId, filterByRoomId, filterByRoomCapacity, 
	filterByUnavaliableRooms, filterDisturbingEvents,
	getOptimalFloor, getNextTimePeriod 
} from './utils/';

class Recommendations extends Component {
	
	render() {
		const { isLoading, rooms, users, events, date, start, end, handleChange, selectedRoomId, eventId } = this.props;

		if(isLoading) return null;
		return (
			<div className="recommendations">
				{getBody(rooms, users, events, date, start, end, handleChange, selectedRoomId, eventId)}
			</div>
		);
	};
};
const getBody = (rooms, users, events, date, start, end, handleChange, selectedRoomId, eventId) => {
	if(selectedRoomId) {
		const selectedRoom = rooms.filter(room => room.id == selectedRoomId)[0];
		return getSelectedRoom(start, end, selectedRoom, handleChange);
	}
	return (
		<Fragment>
		{getRecommendation( rooms, users, events, date, start, end, eventId, handleChange )}
		</Fragment>
	);
};
const getRecommendation = ( rooms, users, events, date, start, end, eventId, handleChange, isStop = false ) => {

	const startDate = toMoment(date, start);
	const endDate = toMoment(date, end);
	const optimalFloor = getOptimalFloor(users);
//
 	// Ищем все свободные и вместительные комнаты.
	// Функция getRoomsByCapacityAndAvaliability() делает то же, что и 4 строчки ниже,
	// Но её не вызываем, т.к. нам далее понадобятся disturbingEvents, которые не достать из контекста функции
	// И которые необходимо дополнительно отфильтровать, если мы редактируем существующую встречу 
	const roomsByCapacity = rooms.filter(filterByRoomCapacity(users.length));
	if(roomsByCapacity.length === 0) return <p>Хватит! Вас уже некуда девать 😭 </p>

	// Если редактируем существующую встречу, то её нужно включить в общий список рекомендаций,
	// Дабы дать Пользователю возможность выбрать её повторно. Поэтому - исключаем её из списка параллельно проходящих встреч
	let disturbingEvents = events.filter(filterDisturbingEvents(startDate, endDate));
	
	if(eventId) disturbingEvents = disturbingEvents.filter(event => event.id !== eventId);
	const unavaliableRooms = disturbingEvents.map(toRoomId);
	const roomsByCapacityAndAvaliability = roomsByCapacity.filter(filterByUnavaliableRooms(unavaliableRooms)); 

	// Если нет подходящих комнат...
	if(roomsByCapacityAndAvaliability.length === 0) {//
		
		// ...и при этом есть параллельно проходящие встречи
		if(disturbingEvents.length > 0) {

			// Ищем перестановки среди параллельних встреч
			const roomsSwap = disturbingEvents.map((event) => {

				// Ищем доступные комнаты для параллельных встреч так же, как делали это для новой встречи
				const avaliableRoomsOfDisturbing =  getRoomsByCapacityAndAvaliability(rooms, event.users, disturbingEvents, moment(+event.dateStart), moment(+event.dateEnd));
				// Отмена, если встречу некуда перенести
				if(avaliableRoomsOfDisturbing.length === 0) return false;

				// Берём все события, кроме итерируемого в данный момент...
				const otherEvents = events.filter(ev => ev.id !== event.id);
				// ...и ищем свободное место для новой встречи (не итерируемой сейчас, а той, которую создаем).
				// Таким образом мы убеждаемся, откроет ли перестановка окно для новой встречи или это - шило на мало
				const isRoomsSwapUseful = getRoomsByCapacityAndAvaliability(rooms, users, otherEvents, startDate, endDate).length > 0;
				// Отмена, если это бесполезная перестановка
				if(!isRoomsSwapUseful) return false;

				// Находим ближайший этаж для участников
				const subOptimalFloor = getOptimalFloor(event.users);
				// Выбираем оптимальную ближайшую комнату для перестановки
				const newRoomId = avaliableRoomsOfDisturbing.sort(byClosestFloor(subOptimalFloor))[0].id;
				return {
					event: event.id,
					room: newRoomId
				} 
			}).filter(val => val);

			// Если в массиве перестановок roomsSwap после фильтрации "отменённых" ещё что-то есть,
			// То возвращаем рекомендации Пользователю
			if(roomsSwap.length > 0) return getRoomsSwap(events, rooms, roomsSwap, handleChange);
		}
		// Отменяем рендеринг, если `getRecommendation()`` вызвана с флажком `isStop`
		// Он указывает на то, что минуты в поле "Конец" заполнены только наполовину - разрядом десятков,
		// Который пока нельзя использовать, т.к. он трактуется в качестве разряда единиц
		if(isStop) return null;

		// Проверяем который час и все ли разряды заполнены в поле "Конец"
		const startHour = +start.substr(0,2);
		const endMinute = +end.substr(-2);

		// Получаем следующий потенциальный промежуток и флажок "текущности" дня
		const { nextStart, nextEnd } = getNextTimePeriod(start, end);
		const isCurrentDayOver = startHour < 8 || startHour >= 23;

		// Если день закончился или минуты в поле "Конец" ещё не заполнены до конца - рекурсивно вызываем функцию с флажком-сигналом к остановке
		if(isCurrentDayOver || endMinute < 10) return getRecommendation(rooms, users, events, date, nextStart, nextEnd, handleChange, true);
		// Вызываем функцию для следующего такого же периода по длительности, т.к. на это время ничего не подошло
		return getRecommendation(rooms, users, events, date, nextStart, nextEnd, handleChange);
	}

	const sortedRooms = roomsByCapacityAndAvaliability.sort(byClosestFloor(optimalFloor));
	if(sortedRooms.length > 5) sortedRooms.length = 5; // Ограничиваем список рекомендаций до пяти

	const sortedRecommendations = sortedRooms.map((room, i) => (
		<Recommendation 
			key={i}
			time={`${start}—${end}`}
			room={room}
			handleChange={handleChange}
		/>
	));

	return	(
		<Fragment>
		<p>Рекомендованные переговорки</p>
		{sortedRecommendations}
		</Fragment>
	);	
}

const getSelectedRoom = (start, end, room, handleChange) => {
	const time = `${start}—${end}`;
	return (
		<Fragment>
			<p>Ваша переговорка</p>
			<Recommendation 
				time={time}
				room={room}
				current={true}
				handleChange={handleChange}
			/>
		</Fragment>
	);
};

const getRoomsByCapacityAndAvaliability = (rooms, users, events, startDate, endDate) => {
	const roomsByCapacity = rooms.filter(filterByRoomCapacity(users.length)); // Отсекаем недостаточно вместительные комнаты
	const disturbingEvents = events.filter(filterDisturbingEvents(startDate, endDate));
	const unavaliableRooms = disturbingEvents.map(toRoomId);
	return roomsByCapacity.filter(filterByUnavaliableRooms(unavaliableRooms)); // Отсекаем параллельно занятые комнаты
}

const getRoomsSwap = (events, rooms, roomsSwap, handleChange) => {
	const header = (
		<Fragment>
		<p>Упс! На это время всё занято :(</p>
		<p>Можно спасти ситуацию, перенеся что-то из списка ниже в другую переговорку:</p>
		</Fragment>
	);
	const roomsSwapWithData = roomsSwap.map((swap, i) => {
		const event = events.filter(filterByEventId(swap.event))[0];
		const room = rooms.filter(filterByRoomId(swap.room))[0];

		return (
			<Recommendation 
				key={i}
				room={room}
				handleChange={handleChange}
				event={event}
				roomsSwap
			/>
		);
	});
	return (
		<div>
		{header}
		{roomsSwapWithData}
		</div>
	);
};

export default Recommendations;