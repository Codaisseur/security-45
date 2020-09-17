"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      dog.belongsTo(models.user);
    }
  }
  dog.init(
    {
      name: DataTypes.STRING,
      breed: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "dog",
    }
  );
  return dog;
};
