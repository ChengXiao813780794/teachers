import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId,
} from 'graphql-relay';

import {
  getArrayData,
  getModelsByClass,
  resolveArrayByClass,
  resolveArrayData,
  resolveModelsByClass
} from './helpers';

import models from './models';
const {
  Student,
  Teacher,
  Admin,
  Course,
} = models;

import {
  nodeInterface,
  nodeField,
  userInterface,
  studentType,
  teacherType,
  adminType,
  courseType,
} from './types';

models.sequelize.sync();

const Root = new GraphQLObjectType({
  name: 'Root',
  fields: {
    viewer: {
      type: userInterface,
      resolve: () => Teacher.findByPrimary(1)
    },
    student: {
      type: studentType,
      resolve: () => Student.findByPrimary(1)
    },
    teacher: {
      type: teacherType,
      resolve: () => Teacher.findByPrimary(1)
    },
    admin: {
      type: adminType,
      resolve: () => Admin.findByPrimary(1)
    },
    courses: {
      type: new GraphQLList(courseType),
      resolve: () => Course.findAll()
    },
    node: nodeField
  },
});

export const schema = new GraphQLSchema({
  query: Root,
  // mutation: Mutation,
});
