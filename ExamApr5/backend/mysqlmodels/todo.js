const { Sequelize, DataTypes } = require("sequelize");
const db = require("../dbsql");

const Todo = db.define(
  "todos",
  {
    status: {
      type: DataTypes.BOOLEAN,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = Todo;
