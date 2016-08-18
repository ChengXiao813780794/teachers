import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLInterfaceType,
  GraphQLString,
} from 'graphql';

import studentType from './studentType';
import teacherType from './teacherType';
import adminType from './adminType';

let userInterface = new GraphQLInterfaceType({
  name: 'User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of the user.'
    },
    username: {
      type: GraphQLString,
      description: 'The username'
    },
    mobile: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    }
  }),
  resolveType: (userObj) => {
    switch (userObj.type) {
      case 'studentType':
        return studentType;
      case 'teacherType':
        return teacherType;
      case 'adminType':
        return adminType;
      default:
        return null;
    }
  }
});

export {
  userInterface as default
}
