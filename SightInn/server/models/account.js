const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Import your Sequelize configuration

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  
});

module.exports = User;
