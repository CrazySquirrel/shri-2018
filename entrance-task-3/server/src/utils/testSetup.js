import { graphql } from 'graphql'
import moment from 'moment'

import mocks from './mocks'
import { sequelize, models } from '../models'
import schema from '../graphql/schema'

export const connect = async () => {
  await sequelize.sync({ force: true })
}

const generateUsers = async () => {
  const homeFloors = [1, 10]

  await graphql(
    schema,
    mocks.createUser("the_good", homeFloors[0]),
    {},
    { models }
  )
  await graphql(
    schema,
    mocks.createUser("the_bad", homeFloors[1]),
    {},
    { models }
  )
}

const generateRooms = async () => {
  const capacities = [5, 2]
  const floors = [1,2]

  await graphql(
    schema,
    mocks.createRoom("do_not_disturb", capacities[0], floors[0]),
    {},
    { models }
  )
  await graphql(
    schema,
    mocks.createRoom("principal", capacities[1], floors[1]),
    {},
    { models }
  )
}

const generateEvents = async () => {
  const dates = [
      moment(1000000000000).toISOString(),
      moment(1100000000000).toISOString(),
      moment(1200000000000).toISOString(),
      moment(1300000000000).toISOString(),
    ]
  const usersIds = [
    [1],
    [1,2]
  ]
  const roomsIds = [1, 2]

  await graphql(
    schema,
    mocks.createEvent("shrovetide", dates[0], dates[1], usersIds[0], roomsIds[0]),
    {},
    { models }
  )
  await graphql(
    schema,
    mocks.createEvent("academy_award", dates[2], dates[3], usersIds[1], roomsIds[1]),
    {},
    { models }
  )
}

export const testSetup = async () => {
	await generateUsers()
	await generateRooms()
  await generateEvents()
}

export const testClose = async () => {
  await sequelize.close()
}