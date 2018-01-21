import React, { Component } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import {
    gql,
    graphql,
    compose
} from 'react-apollo';

import { changeEventRoomMutation } from '../../constants/gql';

class Recommendation extends Component {

	render() {
		const { mutate, current, time, room, handleChange, event, roomsSwap } = this.props;
		const classNames = classnames(
			'recommendations__recommendation', 
			{ ['recommendations__recommendation_current']: current }
		);

		if(roomsSwap) return getRoomsSwapBody(mutate, room, event, handleChange);
		else return (
			<a className={classNames} onClick={() => handleChange(room.id)}>
				<div className="recommendations__time">{time}</div>
				<div className="recommendations__room">{`${room.title} · ${room.floor} этаж`}</div>
			</a>
		);
	}
};
//
const getRoomsSwapBody = (mutate, room, event, handleChange) => {
	const eventDateStart = moment(+event.dateStart).format("HH:mm");
	const eventDateEnd = moment(+event.dateEnd).format("HH:mm");
	const oldRoom = event.room;

	const eventText = `${eventDateStart}—${eventDateEnd}`;
	const roomText = `${event.title}, из  🔳${oldRoom.floor}.${oldRoom.title}  в  🔲${room.floor}.${room.title}`

	return (
		<a 
			className="recommendations__recommendation" 
			onClick={
			() => {
					mutate({
						variables: {
							id: event.id,
							roomId: room.id
						}
					})

				}
			}
		>
			<div className="recommendations__time">{eventText}</div>
			<div className="recommendations__room">{roomText}</div>
		</a>
	);
};

export default graphql(
	changeEventRoomMutation,
	{
	options: {
		refetchQueries: [
	      'EventsByRoomQuery',
	      'RoomsByFloorQuery'
	    ],
  	}
})(Recommendation);