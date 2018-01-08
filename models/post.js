'use strict'
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define(
    'Post',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      title: DataTypes.STRING,
      text: DataTypes.TEXT,
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      highlight: DataTypes.BOOLEAN
    },
    {
      classMethods: {
        associate: function(models) {
          Post.belongsTo(models.Author, {
            onDelete: 'CASCADE',
            foreignKey: {
              allowNull: false
            }
          })
        }
      }
    }
  )
  return Post
}
