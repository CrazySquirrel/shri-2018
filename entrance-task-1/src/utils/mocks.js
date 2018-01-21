export default {
	createUser: (login, homeFloor) => `
		mutation {
			createUser(input: {
				login: "${login}", 
				homeFloor: ${homeFloor}
			}) {
				id,
				login,
				homeFloor
			}
		}
	`,

	updateUser: (id, login, homeFloor) => `
		mutation {
			updateUser(id: "${id}", input: {
				login: "${login}",
				homeFloor: ${homeFloor}
			}) {
				id,
				login,
				homeFloor
			}
		}
	`,

	removeUser: (id) => `
		mutation {
			removeUser(id: ${id}) {
				id,
				login,
				homeFloor
			}
		}
	`,

	createRoom: (title, capacity, floor) => `
		mutation {
			createRoom(input: {
				title: "${title}", 
				capacity: ${capacity}, 
				floor: ${floor}
			}) {
				id,
				title,
				capacity,
				floor
			}
		}
	`,

	updateRoom: (id, title, capacity, floor) => `
		mutation {
			updateRoom(id: ${id}, input: {
				title: "${title}", 
				capacity: ${capacity}, 
				floor: ${floor}
			}) {
				id,
				title,
				capacity,
				floor
			}
		}
	`,

	removeRoom: (id) => `
		mutation {
			removeRoom(id: ${id}) {
				id,
				title,
				capacity,
				floor
			}
		}
	`,

	createEvent: (title, dateStart, dateEnd, usersIds, roomId) => `
		mutation {
			createEvent(
				input: {
					title: "${title}",
					dateStart: "${dateStart}",
					dateEnd: "${dateEnd}"
				},
				usersIds: [${usersIds}],
				roomId: ${roomId}
			) {
				id,
		        title,
		        dateStart,
		        dateEnd
			}
		}
	`,

	updateEvent: (id, title, dateStart, dateEnd) => `
		mutation {
			updateEvent(id: ${id}, input: {
				title: "${title}",
				dateStart: "${dateStart}",
				dateEnd: "${dateEnd}"
			}) {
				id,
		        title,
		        dateStart,
		        dateEnd
			}
		}
	`,

	addUserToEvent: (id, userId) => `
		mutation {
			addUserToEvent(id: ${id}, userId: ${userId}) {
				id,
				users {
					id
				}
			}
		}
	`,

	removeUserFromEvent: (id, userId) => `
		mutation {
			removeUserFromEvent(id: ${id}, userId: ${userId}) {
				id,
				users {
					id
				}
			}
		}
	`,

	changeEventRoom: (id, roomId) => `
		mutation {
			changeEventRoom(id: ${id}, roomId: ${roomId}) {
				id,
				room {
					id
				}
			}
		}
	`,

	removeEvent: (id) => `
		mutation {
			removeEvent(id: ${id}) {
				id
			}
		}
	`,

	user: (id) => `
		query {
			user(id: ${id}) {
				id,
				login,
				homeFloor
			}
		}
	`,

  	users: `
    	query {
      		users {
		        id,
		        login,
		        homeFloor
	        }
	    }
    `,

    room: (id) => `
    	query {
    		room(id: ${id}) {
    			id,
    			title,
    			capacity,
    			floor
    		}
    	}
    `,

	rooms: `
    	query {
      		rooms {
		        id,
		        title,
		        capacity,
		        floor
    	    }
	    }
    `,

    event: (id) => `
    	query {
    		event(id: ${id}) {
    			id,
		        title,
		        dateStart,
		        dateEnd,
		        room {
		        	id
		        },
		        users {
		        	id
		        }
    		}
    	}
    `,

	events: `
    	query {
      		events {
		        id,
		        title,
		        dateStart,
		        dateEnd
      		}
    	}
    `
};