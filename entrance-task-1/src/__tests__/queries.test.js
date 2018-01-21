import { graphql } from 'graphql';

import { models } from '../server/models';
import schema from '../server/graphql/schema';
import { connect, mocks, generateUsers, generateRooms, testSetup, testClose } from '../utils';

describe('Queries Test Suite', () => {
	beforeEach(async () => {
			await connect();
			await testSetup();
	});

	test('1. should return a user', async () => {
			const id = '1';
			const {data: { user }} = await graphql(
				schema,
				mocks.user(id),
				{},
				{ models }
			);
			expect.assertions(1);
			expect(user).toHaveProperty('id', id);
	});

	test('2. should return array of two users', async () => {
			const {data: { users }} = await graphql(
				schema,
				mocks.users,
				{},
				{ models }
			);
			expect.assertions(1);
			expect(users).toHaveLength(2);
	});

	test('3. should return a room', async () => {
			const id = '1';
			const {data: { room }} = await graphql(
				schema,
				mocks.room(id),
				{},
				{ models }
			);
			expect.assertions(1);
			expect(room).toHaveProperty('id', id);
	});

	test('4. should return array of two rooms', async () => {
			const {data: { rooms }} = await graphql(
				schema,
				mocks.rooms,
				{},
				{ models }
			);
			expect.assertions(1);
			expect(rooms).toHaveLength(2);
	});

	test('5. should return an event', async () => {
			const id = '1';
			const {data: { event }} = await graphql(
				schema,
				mocks.event(id),
				{},
				{ models }
			);
			expect.assertions(1);
			expect(event).toHaveProperty('id', id);
	});

	test('6. should return array of two events', async () => {
			const {data: { events }} = await graphql(
				schema,
				mocks.events,
				{},
				{ models }
			);
			expect.assertions(1);
			expect(events).toHaveLength(2);
	});

	afterAll(async () => {
		await testClose();
	});
});