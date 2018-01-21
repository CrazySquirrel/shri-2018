import moment from 'moment';

export const toTimeFormat = (time) => 
`${moment(time).hour() >= 10 ? moment(time).hour() : '0'+moment(time).hour()}:${moment(time).minute() >= 10 ? moment(time).minute() : '0'+moment(time).minute()}`
export const toMoment = (date, time) => moment(date).hour(time.substr(0,2)).minute(time.substr(-2));
export const toRoomId = (event) => event.room.id;
export const byClosestFloor = (closestFloor) => (a,b) => Math.abs(a.floor - closestFloor) - Math.abs(b.floor - closestFloor);

export const filterByEventId = (id) => event => event.id == id;
export const filterByRoomId = (id) => (room) => room.id == id;
export const filterByRoomCapacity = (minimumCapacity) => (room) => room.capacity >= minimumCapacity; // Немного каррирования будет очень кстати
export const filterByUnavaliableRooms = (unavaliableRooms) => (room) => !unavaliableRooms.includes(room.id);
export const filterDisturbingEvents = (startDate, endDate) => (event) => {
	const newStartDate = startDate.valueOf();
	const newEndDate = endDate.valueOf();
	const eventStartDate = moment(+event.dateStart).valueOf();
	const eventEndDate = moment(+event.dateEnd).valueOf();
	return (
		(newStartDate >= eventStartDate && newStartDate < eventEndDate) ||
		(newEndDate <= eventEndDate && newEndDate > eventStartDate) ||
		(eventStartDate >= newStartDate && eventStartDate < newEndDate) ||
		(eventEndDate <= newEndDate && eventEndDate > newStartDate)
	); 
};

export const getOptimalFloor = (users) => Math.round(users.reduce((acc, val) => acc + val.homeFloor, 0) / users.length);
export const getNextTimePeriod = (start, end) => {
	const startHour = +start.substr(0,2);
	const startMinute = +start.substr(-2);
	const endHour = +end.substr(0,2);
	const endMinute = +end.substr(-2);

	let momentStartOld = moment();
	momentStartOld.hour(startHour).minute(startMinute).valueOf();
	let momentStartNew = moment();
	momentStartNew.hour(endHour).minute(endMinute).valueOf();
	const period = momentStartNew - momentStartOld;
	const momentEndNew = moment(momentStartNew + period);

	let nextMinute = momentEndNew.minute() - momentEndNew.minute() % 5;
	nextMinute = nextMinute < 10 ? `0${nextMinute}` : nextMinute;
	const nextEnd = `${momentEndNew.hour()}:${nextMinute}`; 
	
	return ({ 
		nextStart: end,
		nextEnd
	}); 
};
export const getEventsByDate = (date, events) => events && events.filter((event) => moment(+event.dateStart).isSame(moment(date), 'day'));
export const compareStartAndEnd = (start, end) => {
	if(!start || !end || endMinutes < 10) return true;

	const startHour = +start.substr(0,2);
	const startMinutes = +start.substr(-2);
	const endHour = +end.substr(0,2);
	const endMinutes = +end.substr(-2);

	const isHourValid = startHour < endHour;
	if(isHourValid) return true;

	const singleDigitMinutesComparison = (startMinutes < 10 && endMinutes < 10) ? startMinutes < endMinutes : true;
	const twoDigitMinutesComparison =  (startMinutes >= 10 && endMinutes >= 10) ? startMinutes < endMinutes : true;
	const isMinutesValid = startHour === endHour && singleDigitMinutesComparison && twoDigitMinutesComparison;
	if(isMinutesValid) return true;

	return false;
}