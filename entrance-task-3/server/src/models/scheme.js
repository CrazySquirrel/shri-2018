import Sequelize from 'sequelize'

export default function (sequelize) {
  const User = sequelize.define('User', {
    login: Sequelize.STRING,
    avatarUrl: Sequelize.STRING,
    homeFloor: Sequelize.TINYINT
  })

  const Room = sequelize.define('Room', {
    title: Sequelize.STRING,
    capacity: Sequelize.SMALLINT,
    floor: Sequelize.TINYINT
  })

  const Event = sequelize.define('Event', {
    title: Sequelize.STRING,
    dateStart: 'TIMESTAMP',
    dateEnd: 'TIMESTAMP'
  })

  Event.belongsToMany(User, { through: 'Events_Users' })
  User.belongsToMany(Event, { through: 'Events_Users' })
  Event.belongsTo(Room);

  return {
    Room, Event, User
  }
}
