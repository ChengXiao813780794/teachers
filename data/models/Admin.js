/**
 * Admin Model
 * @see https://schema.org/Admin
 * @type {Model}
 */
module.exports = function (sequelize, DataTypes) {

  var Admin = sequelize.define('Admin', {
    type: {
      type: new DataTypes.VIRTUAL(DataTypes.STRING),
      get() {
        return 'adminType';
      }
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'admin_id',
    },
    username: {
      type: DataTypes.STRING,
      field: 'user_name',
    },
    mobile: {
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'admins',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    classMethods: {
      associate: (models) => {
        // Admin.hasMany(models.Article, {
        //   foreignKey: 'AuthorId'
        // });
      }
    }
  });

  return Admin;
};
