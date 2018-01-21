import { gql } from 'react-apollo';

export const roomsByFloorQuery = gql`
	query RoomsByFloorQuery($floor: Int!) {
  		roomsByFloor(floor: $floor) {
    		id,
    		title,
    		capacity,
    		floor
	  	}
	}
`;

export const eventsByRoom = gql`
	query EventsByRoomQuery($roomId: ID!) {
  		eventsByRoom(roomId: $roomId) {
    		id,
    		title,
    		dateStart,
    		dateEnd,
    		users {
    			id,
    			login,
    			homeFloor,
    			avatarUrl
    		},
    		room {
    			id,
    			title,
    			capacity,
    			floor
    		}
	  	}
	} 
`;

export const eventQuery = gql`
	query Event($eventId: ID!) {
		event(id: $eventId) {
			id,
			title,
			dateStart,
			dateEnd,
			users {
				id,
				login,
				homeFloor,
				avatarUrl
			},
			room {
				id,
				title,
				capacity,
				floor
			}
		}
	}
`;
export const eventsQuery = gql`
	query Events {
		events {
			id,
			title,
			dateStart,
			dateEnd,
			users {
				id,
				login,
				homeFloor,
				avatarUrl
			},
			room {
				id,
				title,
				capacity,
				floor
			}
		}
	}
`;
export const roomsQuery = gql`
	query Rooms {
		rooms {
			id,
			title,
			capacity,
			floor
		}
	}
`;
export const usersQuery = gql`
	query Users {
		users {
			id,
			login,
			homeFloor,
			avatarUrl
		}
	}
`;

export const createEventMutation = gql`
  mutation createEvent($input: EventInput!, $usersIds: [ID], $roomId: ID!) {
    createEvent(input: $input, usersIds: $usersIds, roomId: $roomId) {
      	id,
	    title,
	    dateStart,
	    dateEnd,
	    users {
			id, login, homeFloor, avatarUrl
	    },
	    room {
			id, title, capacity, floor
	    }
    }
  }
`;

export const removeEventMutation = gql`
  mutation removeEvent($id: ID!) {
    removeEvent(id: $id) {
      	id,
	    title
    }
  }
`;

export const changeEventRoomMutation = gql`
  mutation changeEventRoom($id: ID!, $roomId: ID!) {
    changeEventRoom(id: $id, roomId: $roomId) {
      	id,
	    title,
	    room {
			id, title, capacity, floor
	    }
    }
  }
`;

export const updateEventMutation = gql`
  mutation updateEvent($id: ID!, $input: EventInput!, $usersIds: [ID], $roomId: ID!) {
    updateEvent(id: $id, input: $input, usersIds: $usersIds, roomId: $roomId) {
      	id,
	    title,
	    dateStart,
	    dateEnd,
	    users {
			id, login, homeFloor, avatarUrl
	    },
	    room {
			id, title, capacity, floor
	    }
    }
  }
`;