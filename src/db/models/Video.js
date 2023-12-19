import { Model, DataTypes } from 'sequelize';
import getPosgresDb from '../index';

const sequelize = getPosgresDb();
const User = require('./User');

const Video = sequelize.define(
  'videos',
  {
    videoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    videoFile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    isPublished: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: 'videos',
    schema: 'nodeJsProject',
    modelName: 'Video',
    timestamps: true,
  },
);


Video.belongsTo(User);

module.exports = Video;
