/**
 * Student Model
 * @see https://schema.org/Student
 * @type {Model}
 */
module.exports = function (sequelize, DataTypes) {

  var Student = sequelize.define('Student', {
    type: {
      type: new DataTypes.VIRTUAL(DataTypes.STRING),
      get() {
        return 'studentType';
      }
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'user_id',
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
    mobileSuffix: {
      type: DataTypes.STRING,
      field: 'mobile_suffix',
    },
  }, {
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    classMethods: {
      associate: (models) => {
        // Student.hasMany(models.Article, {
        //   foreignKey: 'AuthorId'
        // });
      }
    }
  });
  return Student;
};
