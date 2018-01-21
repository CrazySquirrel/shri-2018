import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router';
import {
    gql,
    graphql,
    compose
} from 'react-apollo';

import Modal from '../Modal';
import { removeEventMutation } from '../../constants/gql';

class DeleteEvent extends Component {
	state = {
		deleted: false,
		confirming: false
	}
	
	toggleDeleted = () => this.setState({ deleted: true });
	toggleConfirming = () => this.setState(prevState => ({ confirming: !prevState.confirming }));

	render() {
		const { mutate, eventId } = this.props;
		const modal = this.state.confirming ? 
			(<Modal
				emoji="🙅🏻"
				title="Встреча будет удалена безвозвратно"
			>
				<button
					className="button button_grey"
					onClick={() => this.toggleConfirming()}
				>
				Отмена
				</button>
				<button
					className="button button_grey button_margin_left"
					onClick={
					() => {
						mutate({
							variables: {
								id: eventId
							}
						})
						this.toggleDeleted();
					}
				}
				>
				Удалить
				</button>
			</Modal>) : false;

		if(this.state.deleted) return <Redirect push to="/" />;
		return (
			<Fragment>
				<button
					className="button button_grey button_margin_left"
					onClick={() => this.toggleConfirming()}
				>
				Удалить встречу
				</button>
				{modal ? modal : null}
			</Fragment>
		);
	};
};

export default graphql(
	removeEventMutation,
	{
	options: {
		refetchQueries: [
	      'EventsByRoomQuery',
	      'RoomsByFloorQuery'
	    ],
  	}
})(DeleteEvent);