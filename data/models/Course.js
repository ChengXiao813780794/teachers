/**
 * Course Model
 * @see https://schema.org/Course
 * @type {Model}
 */
module.exports = function (sequelize, DataTypes) {

  var Course = sequelize.define('Course', {
    type: {
      type: new DataTypes.VIRTUAL(DataTypes.STRING),
      get() {
        return 'courseType';
      }
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'course_id',
    },
    name: {
      type: DataTypes.STRING,
      field: 'course_name',
    },
    description: {
      type: DataTypes.STRING,
    },
    order: {
      type: DataTypes.INTEGER,
      field: 'order_number',
    },
    // published: {
    //   type: new DataTypes.VIRTUAL(DataTypes.BOOLEAN),
    //   get() {
    //     return this.getDataValue('pushlished') > 0;
    //   },
    //   set(val) {
    //     this.setDataValue('pushlished', val ? 1 : 0);
    //   }
    // }
    published: {
      type: DataTypes.BOOLEAN,
      field: 'pushlished',
    }
  }, {
    tableName: 'courses',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    classMethods: {
      associate: (models) => {
        Course.hasMany(models.Chapter, {
          foreignKey: 'course_id'
        });
      }
    }
  });

  return Course;
};
