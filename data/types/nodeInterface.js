import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';

import {
  Student,
  Teacher,
  Admin,
}  from '../models';

import studentType from './studentType';
import teacherType from './teacherType';
import adminType from './adminType';

let {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    // console.log('nodeDefinitions', type, id, globalId);
    switch (type) {
      case 'Student':
        return Student.findByPrimary(id);
      case 'Teacher':
        return Teacher.findByPrimary(id);
      case 'Admin':
        return Admin.findByPrimary(id);
      default:
        return null;
    }
  },
  (obj) => {
    switch (obj.type) {
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
);

export {
  nodeInterface as default,
  nodeField
}
