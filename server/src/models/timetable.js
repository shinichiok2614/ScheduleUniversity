'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class timetable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  timetable.init(
    {
      subject: DataTypes.STRING,
      class: DataTypes.STRING,
      room: DataTypes.STRING,
      day: DataTypes.STRING,
      timestart: DataTypes.STRING,
      timeend: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'timetable',
    },
  );
  return timetable;
};
