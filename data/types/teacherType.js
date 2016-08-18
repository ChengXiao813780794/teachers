import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import {
  globalIdField,
} from 'graphql-relay';

import nodeInterface from './nodeInterface';
import userInterface from './userInterface';

const teacherType = new GraphQLObjectType({
  name: 'Teacher',
  fields: () => ({
    id: globalIdField('Teacher'),
    username: {
      type: GraphQLString,
      resolve: obj => obj.username
    },
    mobile: {
      type: GraphQLString,
      resolve: obj => obj.mobile,
    },
    email: {
      type: GraphQLString,
      resolve: obj => obj.email,
    },
    // relay connections
    // lists
  }),
  interfaces: () => [userInterface, nodeInterface],
});

export default teacherType;
