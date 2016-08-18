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
import chapterType from './chapterType';

const courseType = new GraphQLObjectType({
  name: 'Course',
  fields: () => ({
    id: globalIdField('Course'),
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
    published: {
      type: GraphQLBoolean,
      resolve: obj => obj.published,
    },
    chapters: {
      type: new GraphQLList(chapterType),
      resolve: obj => obj.getChapters()
    }
  }),
  interfaces: () => [nodeInterface],
});

export default courseType;
