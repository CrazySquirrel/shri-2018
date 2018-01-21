import React, { Fragment } from 'react';
import moment from 'moment';
import classnames from 'classnames';

import Event from './Event';
import Vacant from './Vacant';

const Cell = ({ roomRow, events, cellHour, selectedDay }) => {

	const isPastDay = moment().isAfter(selectedDay, 'day');
	const isFutureDay = !moment().isAfter(selectedDay, 'day') && moment().valueOf() < selectedDay.valueOf();

	const isPastHour = moment().date() === selectedDay.date() && moment().hour() + 1 > cellHour;
	const isCurrentHour = moment().date() === selectedDay.date() && moment().hour() + 1 === cellHour;
	const isFutureHour = moment().date() === selectedDay.date() && moment().hour() < cellHour;

	const current = moment().hour();
	const disabled = roomRow && (isPastDay || isPastHour);

	const classNames = classnames(
		'grid__cell', 
		{ ['grid__cell_disabled']: disabled }
	);

	return (
		<div className={classNames}>
		{roomRow && getBody(events, cellHour, current, isPastDay, isFutureDay, isCurrentHour, isFutureHour, roomRow, selectedDay)}
		</div>
	);
};

const getBody = (events, cellHour, current, isPastDay, isFutureDay, isCurrentHour, isFutureHour, roomRow, selectedDay) => {
	// Блочим старые ячейки по умолчанию
	if(isPastDay) return (<div className="grid__filler grid__event_minutes_60"></div>); 
	
	// Если в текущем дне нет событий, значит - доступны все ячейки
	if(isFutureDay && !events.length) return (
		<div className="grid__vacant grid__event_minutes_60">
			<Vacant 
				width="60"
				selectedDay={selectedDay}
				cellHour={cellHour}
				room={roomRow}  
			/>
		</div>
		); 
	
	// Вставляем заглушку для прошедшей части часа, если нет событий
	if(isCurrentHour && !events.length) return getFillerAndEvent(cellHour, roomRow, selectedDay); 
	
	// Заполняем грядущие часы, если нет событий
	if(isFutureHour && !events.length) return (
		<div className="grid__vacant grid__event_minutes_60">
			<Vacant 
				width="60"
				selectedDay={selectedDay}
				cellHour={cellHour}
				room={roomRow} 
			/>
		</div>
		); 
	
	// Заполняем грид в соответствии с событиями	
	if(events.length > 0) return getEvent(events, cellHour, current, roomRow, selectedDay, isFutureDay); 
}

const getEvent = (events, cellHour, current, roomRow, selectedDay, isFutureDay) => {//
	let result = [];
	let previousEndMinutes = 0;
	const isSingleEvent = events.length === 1;

	events.map(event => {

		const startMinutes = moment(+event.dateStart).minute() - moment(+event.dateStart).minute() % 5;
		const endMinutes = moment(+event.dateEnd).minute() - moment(+event.dateEnd).minute() % 5;
		const fullHours = moment(+event.dateEnd).hour() - moment(+event.dateStart).hour();
		const width = fullHours * 60 + endMinutes - startMinutes;

		const isPastTimeFiller = !isFutureDay && startMinutes > previousEndMinutes && cellHour <= current;
		const isCurrentOrFutureTimeVacant = (!isFutureDay && startMinutes > previousEndMinutes && cellHour > current) || isFutureDay;
		const isPastTimeFillerLast = isSingleEvent && !isFutureDay && (width + startMinutes) < 60 && cellHour <= current;
		const isCurrentOrFutureTimeVacantLast = isSingleEvent && (width + startMinutes) < 60  && ((!isFutureDay && cellHour > current) || isFutureDay); 

		if(isPastTimeFiller) result.push({
			classnames: classnames(
				'grid__filler', 
				`grid__event_minutes_${startMinutes - previousEndMinutes}`
			)
		});
		if(isCurrentOrFutureTimeVacant) result.push({
			vacant: `${startMinutes - previousEndMinutes}`,
			offset: previousEndMinutes > 0 ? previousEndMinutes : false,
			classnames: classnames(
				'grid__vacant', 
				`grid__event_minutes_${startMinutes - previousEndMinutes}`
			)});
		previousEndMinutes = endMinutes;

		result.push({
			event,
			classnames: classnames(
				'grid__event', 
				[`grid__event_minutes_${width}`]
			)
		});

		if(isPastTimeFillerLast) result.push({
			classnames: classnames(
				'grid__filler', 
				`grid__event_minutes_${60 - width}`
			)
		});

		if(isCurrentOrFutureTimeVacantLast) result.push({
			vacant: `${60 - width}`,
			offset: previousEndMinutes > 0 ? previousEndMinutes : false,
			classnames: classnames(
				'grid__vacant', 
				`grid__event_minutes_${60 - width}`
			)});
	});

	return result.map((cellBody, i) => (
		<div key={i} className={cellBody.classnames}>
		{cellBody.event && <Event event={cellBody.event} />}
		{cellBody.vacant && 
			<Vacant 
				width={cellBody.vacant} 
				selectedDay={selectedDay} 
				cellHour={cellHour}
				room={roomRow}
				offset={cellBody.offset}
			/>
		}
		</div>
	));
};

const getFillerAndEvent = (cellHour, roomRow, selectedDay) => {
	const minutes = moment().minute();
	const fillerClassNames = classnames(
		'grid__filler', 
		`grid__event_minutes_${minutes - minutes % 5}`
	);
	const vacantClassNames = classnames(
		'grid__vacant', 
		`grid__event_minutes_${60 - (minutes - minutes % 5)}`
	);
	return (
		<Fragment>
			<div className={fillerClassNames}></div>
			<div className={vacantClassNames}>
				<Vacant 
					width={60 - (minutes - minutes % 5)}
					selectedDay={selectedDay}
					cellHour={cellHour}
					room={roomRow}
					offset={minutes - minutes % 5}
				/>
			</div>
		</Fragment>
	);
};

export default Cell;