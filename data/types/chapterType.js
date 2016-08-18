import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

import {
  globalIdField,
} from 'graphql-relay';

import nodeInterface from './nodeInterface';
import lessonType from './lessonType';

const chapterType = new GraphQLObjectType({
  name: 'Chapter',
  fields: () => ({
    id: globalIdField('Chapter'),
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
    lessons: {
      type: new GraphQLList(lessonType),
      resolve: obj => obj.getLessons()
    }
  }),
  interfaces: () => [nodeInterface],
});

export default chapterType;
