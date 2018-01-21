import React, { Component, Fragment } from 'react';
import moment from 'moment'
import {
    gql,
    graphql,
} from 'react-apollo';

import Room from './Room';
import { roomsByFloorQuery } from '../../constants/gql';

class Floor extends Component {

	render() {
		const { value, data: {loading, error, roomsByFloor} } = this.props;

		if (loading || error || !roomsByFloor || (!!roomsByFloor && !roomsByFloor.length)) {
		    return <div></div>;
		}
		return (
			<div className="grid__floor">
				<Room />
				<Room floor={`${value} ЭТАЖ`} />
				{roomsByFloor.map((room) => (
					<Fragment key={room.id}>
						<Room room={room} />
						<Room />
					</Fragment>
				))}
			</div>
		);
	};
};

export default graphql(roomsByFloorQuery, {
	options: (props) => ({
		variables: { floor: props.value}
	})
})(Floor);
