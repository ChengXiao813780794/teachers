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

const studentType = new GraphQLObjectType({
  name: 'Student',
  fields: () => ({
    id: globalIdField('Student'),
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
    }
  }),
  interfaces: () => [userInterface, nodeInterface],
});

export default studentType;
