const { DataTypes } = require('sequelize');
import getPosgresDb from '../index';
import bcrypt from 'bcrypt';
import Video from './Video';

const sequelize = getPosgresDb();

const User = sequelize.define(
  'users',
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      index: true,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
      index: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coverImage: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        // Hash the password before storing
        const hashedPassword = bcrypt.hashSync(value, 8);
        this.setDataValue('password', hashedPassword);
      },
    },
    refreshToken: {
      type: DataTypes.STRING,
    },
    watchHistory: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  },
  {
    tableName: 'users',
    schema: 'nodeJsProject',
    modelName: 'User',
    timestamps: true,
  }
);

// Method to compare passwords during login
User.prototype.validPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

User.hasMany(Video, {
  foreignKey: {
    type: DataTypes.INTEGER,
    allowNull: false,
    name: 'ownerId',
  },
});

module.exports = User;
