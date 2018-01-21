import { models } from '../../models'

export default {
  users (event) {
        return event.getUsers();
      },
  room (event) {
        return event.getRoom();
      }
};
