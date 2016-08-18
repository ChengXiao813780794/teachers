/**
 * Teacher Model
 * @see https://schema.org/Teacher
 * @type {Model}
 */
module.exports = function (sequelize, DataTypes) {

  var Teacher = sequelize.define('Teacher', {
    type: {
      type: new DataTypes.VIRTUAL(DataTypes.STRING),
      get() {
        return 'teacherType';
      }
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'teacher_id',
    },
    username: {
      type: DataTypes.STRING,
      field: 'user_name',
    },
    mobile: {
      type: DataTypes.STRING,
      field: 'encrypt_mobile'
    },
    email: {
      type: DataTypes.STRING,
      field: 'encrypt_email'
    },
  }, {
    tableName: 'teachers',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    classMethods: {
      associate: (models) => {
        // Teacher.hasMany(models.Article, {
        //   foreignKey: 'AuthorId'
        // });
      }
    }
  });

  return Teacher;
};
