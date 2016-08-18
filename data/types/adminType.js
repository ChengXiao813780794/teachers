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

const adminType = new GraphQLObjectType({
  name: 'Admin',
  fields: () => ({
    id: globalIdField('Admin'),
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
      resolve: '',
    }
  }),
  interfaces: () => [userInterface, nodeInterface],
});

export default adminType;
