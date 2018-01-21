import { graphql } from 'graphql';
import moment from 'moment';

import { models } from '../server/models';
import schema from '../server/graphql/schema';
import { connect, mocks, generateUsers, testSetup, testClose } from '../utils';

describe('Mutations Test Suite', () => {
	beforeEach(async () => {
			await connect()
			await testSetup()
	})

	test('1. should create a user', async () => {
			const {data: { createUser }} = await graphql(
				schema,
				mocks.createUser("the_ugly", 5),
				{},
				{ models }
			)
			expect.assertions(3)
			expect(createUser).toHaveProperty('id', '3')
			expect(createUser).toHaveProperty('login', 'the_ugly')
			expect(createUser).toHaveProperty('homeFloor', 5)
	})

	test('2. should update a user', async () => {
			const {data: { updateUser }} = await graphql(
				schema,
				mocks.updateUser(2, "the_updated", 1),
				{},
				{ models }
			)
			expect.assertions(3)
			expect(updateUser).toHaveProperty('id', '2')
			expect(updateUser).toHaveProperty('login', 'the_updated')
			expect(updateUser).toHaveProperty('homeFloor', 1)
	})

	test('3. should remove a user', async () => {
			const {data: { users }} = await graphql(
				schema,
				mocks.users,
				{},
				{ models }
			)
			const {data: { removeUser }} = await graphql(
				schema,
				mocks.removeUser(2),
				{},
				{ models }
			)
			const {data: { users: updatedUsers }} = await graphql(
				schema,
				mocks.users,
				{},
				{ models }
			)
			expect.assertions(1)
			expect(updatedUsers).toHaveLength(users.length - 1)
	})

	test('4. should create a room', async () => {
			const {data: { createRoom }} = await graphql(
				schema,
				mocks.createRoom("atlantis", 10000, 1),
				{},
				{ models }
			)
			expect.assertions(4)
			expect(createRoom).toHaveProperty('id', '3')
			expect(createRoom).toHaveProperty('title', 'atlantis')
			expect(createRoom).toHaveProperty('capacity', 10000)
			expect(createRoom).toHaveProperty('floor', 1)
	})

	test('5. should update a room', async () => {
			const {data: { updateRoom }} = await graphql(
				schema,
				mocks.updateRoom(1, "very_new_place", 1, 1),
				{},
				{ models }
			)
			expect.assertions(4)
			expect(updateRoom).toHaveProperty('id', '1')
			expect(updateRoom).toHaveProperty('title', 'very_new_place')
			expect(updateRoom).toHaveProperty('capacity', 1)
			expect(updateRoom).toHaveProperty('floor', 1)
	})

	test('6. should remove a room', async () => {
			const {data: { rooms }} = await graphql(
				schema,
				mocks.rooms,
				{},
				{ models }
			)

			const {data: { removeRoom }} = await graphql(
				schema,
				mocks.removeRoom(2),
				{},
				{ models }
			)

			const {data: { rooms: updatedRooms }} = await graphql(
				schema,
				mocks.rooms,
				{},
				{ models }
			)
			expect.assertions(1)
			expect(updatedRooms).toHaveLength(rooms.length - 1)
	})

	test('7. should create an event', async () => {
			const dates = [
			    moment(1400000000000).toISOString(),
      			moment(1500000000000).toISOString(),
			]

			const {data: { createEvent }} = await graphql(
				schema,
				mocks.createEvent("secret_club_meeting", dates[0], dates[1], [2], 2),
				{},
				{ models }
			)
			expect.assertions(4)
			expect(createEvent).toHaveProperty('id')
			expect(createEvent).toHaveProperty('title', 'secret_club_meeting')
			expect(createEvent).toHaveProperty('dateStart', dates[0])
			expect(createEvent).toHaveProperty('dateEnd', dates[1])
	})

	test('8. should update an event', async () => {
			const dates = [
			    moment(1600000000000).toISOString(),
      			moment(1700000000000).toISOString(),
			]
			const {data: { updateEvent }} = await graphql(
				schema,
				mocks.updateEvent(1, "monday_mars_colonisation", dates[0], dates[1]),
				{},
				{ models }
			)
			expect.assertions(4)
			expect(updateEvent).toHaveProperty('id', '1')
			expect(updateEvent).toHaveProperty('title', 'monday_mars_colonisation')
			expect(updateEvent).toHaveProperty('dateStart', dates[0])
			expect(updateEvent).toHaveProperty('dateEnd', dates[1])
	})

	test('9. should add user to an event', async () => {
			const eventId = 1
			const userId = 2

			const {data: {addUserToEvent}} = await graphql(
				schema,
				mocks.addUserToEvent(eventId, userId),
				{},
				{ models }
			)
			const {data: {event}} = await graphql(
				schema,
				mocks.event(eventId),
				{},
				{ models }
			)
			expect.assertions(1)
			expect(event.users).toContainEqual({ id: "2" })
	})

	test('10. should remove user from an event', async () => {
			const eventId = '1'
			const userId = '1'

			const {data: {removeUserFromEvent}} = await graphql(
				schema,
				mocks.removeUserFromEvent(eventId, userId),
				{},
				{ models }
			)
			const {data: {event}} = await graphql(
				schema,
				mocks.event(eventId),
				{},
				{ models }
			)
			expect.assertions(1)
			expect(event.users).not.toContainEqual({ id: userId })
	})

	test('11. should change event room', async () => {
			const eventId = '1'
			const roomId = '2'

			const {data: {changeEventRoom}} = await graphql(
				schema,
				mocks.changeEventRoom(eventId, roomId),
				{},
				{ models }
			)
			const {data: {event}} = await graphql(
				schema,
				mocks.event(eventId),
				{},
				{ models }
			)
			expect.assertions(1)
			expect(event.room).toEqual({ id: roomId })
	})

	test('12. should remove an event', async () => {
			const {data: { events }} = await graphql(
				schema,
				mocks.events,
				{},
				{ models }
			)

			const {data: { removeEvent }} = await graphql(
				schema,
				mocks.removeEvent(1),
				{},
				{ models }
			)

			const {data: { events: updatedEvents }} = await graphql(
				schema,
				mocks.events,
				{},
				{ models }
			)
			expect.assertions(1)
			expect(updatedEvents).toHaveLength(events.length - 1)
	})

	afterAll(async () => {
			await testClose()
	})
})