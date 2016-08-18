import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

import {
  globalIdField,
} from 'graphql-relay';

import nodeInterface from './nodeInterface';

const lessonType = new GraphQLObjectType({
  name: 'Lesson',
  fields: () => ({
    id: globalIdField('Lesson'),
    title: {
      type: GraphQLString,
      resolve: obj => obj.name
    },
    description: {
      type: GraphQLString,
      resolve: obj => obj.description,
    },
    order: {
      type: GraphQLInt,
      resolve: obj => obj.order,
    },
  }),
  interfaces: () => [nodeInterface],
});

export default lessonType;
