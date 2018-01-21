import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class Vacant extends Component {

	getTime = (cellHour, width, offset) => {
		const startHour = `${cellHour >= 10 ? cellHour : '0'+cellHour}`
		const startMinutes = `${width == 60 ? '00' : offset >= 10 ?  offset : '0' + offset}`

		const isTillHourEnd = (width == 60 || +width + offset >= 60);

		const endHour = isTillHourEnd ? (cellHour + 1) >= 10 ? (cellHour + 1) : '0'+(cellHour + 1) : cellHour;
		const endMinutes = `${isTillHourEnd ? '00' : +width + offset }`

		return { start: `${startHour}:${startMinutes}`, end: `${endHour}:${endMinutes}` };
	}

	render() {
		const { width, selectedDay, cellHour, room, offset } = this.props;
		const cellHourFloored = cellHour - 1;
		const { start, end } = this.getTime(cellHourFloored, width, offset);
		const date = selectedDay && selectedDay.toDate();

		return (
			<Link 
				className="grid__vacant-button" 
				to={{
				  	pathname: '/edit',
					state: { date, start, end, room: room.id }
				}}
			>
			</Link>
		);
	};
};