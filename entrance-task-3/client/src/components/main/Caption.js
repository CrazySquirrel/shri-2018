import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Participants from './Participants';
import Widget from '../Widget';

export default class Caption extends Component {

	render() {
		const { event } = this.props;
		return (
			<div className="caption">
				<div className="caption__body">
					<div className="caption__title">{event.title}</div>
					<div className="caption__text">{getText(event)}</div>
					<Participants users={event.users} />
					<Link to={`/edit/${event.id}`}>
                		<Widget mod="edit" handleClick={this.handleEditClick} />
                	</Link>
				</div>
			</div>
		);
	}
};

const getText = (event) =>
	`${moment(+event.dateStart).format('D MMMM')},
	 ${moment(+event.dateStart).format('H')}:${moment(+event.dateStart).format('mm')}—${moment(+event.dateEnd).format('H')}:${moment(+event.dateEnd).format('mm')} · ${event.room.title}
`;