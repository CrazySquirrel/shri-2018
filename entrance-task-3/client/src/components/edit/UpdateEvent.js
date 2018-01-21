import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {
    gql,
    graphql,
    compose
} from 'react-apollo';

import { updateEventMutation } from '../../constants/gql';

class UpdateEvent extends Component {
	state = {
		updated: false
	}
	
	toggleUpdated = () => this.setState({ updated: true });

	render() {
		const { isValid, mutate, eventId, variables: { input, usersIds, roomId } } = this.props;

		if(this.state.updated) return <Redirect push to="/" />;
		return (
			<button
				className="button button_grey button_margin_left"
				disabled={!isValid}
				onClick={
					() => {
						mutate({
							variables: {
								id: eventId,
								input: {
									title: input.title,
									dateStart: input.dateStart,
									dateEnd: input.dateEnd
								},
								usersIds,
								roomId
							}
						})
						this.toggleUpdated();
					}
				}
			>
			Сохранить
			</button>
		);
	};
};

export default graphql(updateEventMutation)(UpdateEvent);