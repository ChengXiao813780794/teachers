/**
 * Photo Model
 * @see https://schema.org/Photo
 * @type {Model}
 */
module.exports = function (sequelize, DataTypes) {

  var Photo = sequelize.define('Photo', {
    type: {
      type: new DataTypes.VIRTUAL(DataTypes.STRING),
      get() {
        return 'photoType';
      }
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'auto_id',
    },
    path: {
      type: DataTypes.STRING,
    },
    tag: {
      type: DataTypes.STRING,
    },
    imageableType: {
      type: DataTypes.STRING,
      field: 'imageable_type'
    },
    imageableId: {
      type: DataTypes.INTEGER,
      field: 'imageable_id'
    }
  }, {
    tableName: 'photos',
    timestamp: false,
    classMethods: {
      associate: (models) => {
        // Photo.hasMany(models.Article, {
        //   foreignKey: 'AuthorId'
        // });
      }
    }
  });

  return Photo;
};
