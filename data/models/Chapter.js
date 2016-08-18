/**
 * Chapter Model
 * @see https://schema.org/Chapter
 * @type {Model}
 */
module.exports = function (sequelize, DataTypes) {

  var Chapter = sequelize.define('Chapter', {
    type: {
      type: new DataTypes.VIRTUAL(DataTypes.STRING),
      get() {
        return 'chapterType';
      }
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'chapter_id',
    },
    name: {
      type: DataTypes.STRING,
      field: 'chapter_name',
    },
    description: {
      type: DataTypes.STRING,
    },
    order: {
      type: DataTypes.INTEGER,
      field: 'order_number',
    },
  }, {
    tableName: 'chapters',
    timestamps: false,
    classMethods: {
      associate: (models) => {
        Chapter.hasMany(models.Lesson, {
          foreignKey: 'chapter_id'
        });
      }
    }
  });

  return Chapter;
};
