'use strict';

const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
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
      watchHistory: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    // Seed initial data if needed
    const hashedPassword = bcrypt.hashSync('initialPassword', 8);
    await queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        email: 'admin@example.com',
        fullName: 'Admin User',
        avatar: 'admin-avatar.jpg',
        password: hashedPassword,
        refreshToken: 'initialRefreshToken',
        watchHistory: [1, 2, 3], // Sample video IDs
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more seed data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
