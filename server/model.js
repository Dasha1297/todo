const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Items = sequelize.define("items", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING },
  completed: { type: DataTypes.BOOLEAN },
});

module.exports = { Items };
