import GraphQLDate from 'graphql-date';
import query from './query';
import mutation from './mutation';
import event from './event.js';

export default {

    Query: query,

    Mutation: mutation,

    Event: event,

    Date: GraphQLDate
  
  };
