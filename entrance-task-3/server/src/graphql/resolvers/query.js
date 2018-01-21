import { models } from '../../models';

export default {
  event (root, { id }) {
      return models.Event.findById(id);
  },
  eventsByRoom (root, { roomId }, context) {
      return models.Event.findAll({
        include: [{
          model: models.Room,
            where: { id: roomId }
        }]
      });
  },
  events (root, args, context) {
      return models.Event.findAll();
  },
  user (root, { id }) {
      return models.User.findById(id);
  },
  users (root, args, context) {
      return models.User.findAll();
  },
  room (root, { id }) {
      return models.Room.findById(id);
  },
  roomsByFloor (root, { floor }, context) {
      return models.Room.findAll({
        where: {floor: floor}
      });
  },
  rooms (root, args, context) {
      return models.Room.findAll();
  }
}
