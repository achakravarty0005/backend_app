'use strict';
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users',
      {
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
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
        },
        refreshToken: {
          type: DataTypes.STRING,
        },
      },
      {
        timestamps: true,
        schema: 'nodeJsProject',
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};

