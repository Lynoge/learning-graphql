'use strict'
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define(
    'Author',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      username: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          Author.hasMany(models.Author, {
            onDelete: 'CASCADE',
            foreignKey: {
              allowNull: false
            }
          })
        }
      }
    }
  )
  return Author
}
