import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import CreateEvent from './CreateEvent';
import UpdateEvent from './UpdateEvent';
import DeleteEvent from './DeleteEvent';

class Footer extends Component {

	getButtons = (isUpdateExistent, isValid, variables, mutate, eventId, room) => isUpdateExistent ?
	(
		<Fragment>
			<DeleteEvent 
				eventId={eventId}
			/>
			<UpdateEvent 
				isValid={isValid}
				eventId={eventId}
				variables={variables}
			/>
		</Fragment>
	) :
	(
		<CreateEvent 
			isValid={isValid}
			variables={variables}
			room={room}
		/>
	);

	render() {
		const { isUpdateExistent, isValid, variables, mutate, eventId, room } = this.props;
		return (
			<div className="footer">
				<Link to="/" className="button button_grey">
	        		Отмена
	        	</Link>
	        	{this.getButtons(isUpdateExistent, isValid, variables, mutate, eventId, room)}
			</div>
		);
	}
};

export default Footer;