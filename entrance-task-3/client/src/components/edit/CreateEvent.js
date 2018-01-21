import React, { Component } from 'react';
import { Redirect } from 'react-router';
import moment from 'moment';
import {
    gql,
    graphql,
    compose
} from 'react-apollo';

import { createEventMutation } from '../../constants/gql';

class CreateEvent extends Component {
	state = {
		created: false
	}
	
	toggleCreated = () => this.setState({ created: true });

	render() {
		const { isValid, mutate, room, variables: { input, usersIds, roomId } } = this.props;

		if(this.state.created) return (
			<Redirect 
				push
				to={{
				  	pathname: '/',
					state: { 
						modal: true,
						emoji: "🎉",
						title: "Встреча создана!",
						textRows: [
							`${moment(+input.dateStart).format("D MMMM, H:mm")}—${moment(+input.dateEnd).format("H:mm")}`,
							`${room.title} · ${room.floor} этаж`
						] 
					}
				}}
			/>
		);

		return (
			<button
				className="button button_margin_left"
				disabled={!isValid}
				onClick={
					() => {
						mutate({
							variables: {
								input: {
									title: input.title,
									dateStart: input.dateStart,
									dateEnd: input.dateEnd
								},
								usersIds,
								roomId
							}
						})
						this.toggleCreated();
					}
				}
			>
			Создать встречу
			</button>
		);
	};
};

export default graphql(
	createEventMutation,
	{
	options: {
		refetchQueries: [
	      'EventsByRoomQuery',
	      'RoomsByFloorQuery'
	    ],
  	}
})(CreateEvent);