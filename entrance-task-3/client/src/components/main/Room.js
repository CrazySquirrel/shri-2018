import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import classnames from 'classnames';
import {
    gql,
    graphql,
} from 'react-apollo';

import Cell from './Cell';
import { eventsByRoom } from '../../constants/gql';

class Room extends Component {

	render() {
		const { floor, room, selectedDay, data = {}} = this.props;
		const parsedSelectedDay = moment(selectedDay);
		const filteredEvents = 
			!!data.eventsByRoom && 
			!!data.eventsByRoom.length && 
			data.eventsByRoom.filter((event) => moment(+event.dateStart).isSame(parsedSelectedDay, 'day'));

		const classNames = classnames(
			'grid__row', 
			{ ['grid__row_type_floor']: floor },
			{ ['grid__row_type_room']: room}
		);
		const roomTitleClassNames = classnames(
			'grid__text_room-title', 
			{ ['grid__text_disabled']: isTextRoomTitleDisabled(filteredEvents, parsedSelectedDay) }
		);

		return (
			<div className={classNames}>
				<div className="grid__cell grid__cell_left">
				{floor && <div className="grid__text_floor-title">{floor}</div>}
				{room && <div className={roomTitleClassNames}>{room.title}</div>}
				{room && <div className="grid__text_capacity">до {room.capacity} человек</div>}
				</div>
				{Array.from(Array(17)).map((_, i) => (
					<Cell 
						key={i}
						roomRow={room} 
						events={room ? getEventsByDateAndHour(i+7, filteredEvents) : false}
						cellHour={i+8}
						selectedDay={parsedSelectedDay}  
					/>
				))}
			</div>
		)
	}
};

const getEventsByDateAndHour = (hour, events) => events && events.filter(event => moment(+event.dateStart).get('hour') === hour);

const isTextRoomTitleDisabled = (events, selectedDay) => {
	const today = moment();
	const workDayMinutesTotal = 60 * (23-8); 
	const roomUsesMinutesTotal = events && events.reduce((acc, val) => {
		const eventMinutesTotal = moment(val).hour()*60 + moment(val).minute()
		return acc + eventMinutesTotal;
	}, 0)
	const isPast = selectedDay.isBefore(today, 'day');
	const isOutOfVacants = !!roomUsesMinutesTotal || roomUsesMinutesTotal >= workDayMinutesTotal;
	return isPast || (!isPast && isOutOfVacants);
}

const mapStateToProps = (state) => ({
    selectedDay: state.selectedDay
});

export default graphql(eventsByRoom, {
	skip: (props) => !props.room || !props.room.id,
	options: (props) => ({
		variables: { roomId: props.room && props.room.id}
	})
})(connect(mapStateToProps)(Room));