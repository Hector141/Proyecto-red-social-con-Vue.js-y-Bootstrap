const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    }
  }, { timestamps: false });
};
