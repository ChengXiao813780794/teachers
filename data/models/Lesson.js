/**
 * Lesson Model
 * @see https://schema.org/Lesson
 * @type {Model}
 */
module.exports = function (sequelize, DataTypes) {

  var Lesson = sequelize.define('Lesson', {
    type: {
      type: new DataTypes.VIRTUAL(DataTypes.STRING),
      get() {
        return 'lessonType';
      }
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'lesson_id',
    },
    name: {
      type: DataTypes.STRING,
      field: 'lesson_name',
    },
    description: {
      type: DataTypes.STRING,
    },
    order: {
      type: DataTypes.INTEGER,
      field: 'order_number',
    },
    published: {
      type: DataTypes.BOOLEAN,
      field: 'published',
    }
  }, {
    tableName: 'lessons',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    classMethods: {
      associate: (models) => {
        // Lesson.hasMany(models.Article, {
        //   foreignKey: 'AuthorId'
        // });
      }
    }
  });

  return Lesson;
};
