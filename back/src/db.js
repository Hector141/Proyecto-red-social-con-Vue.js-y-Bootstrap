require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const {users, posts} = require("./models/index")

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/reddatabase`,
    { logging: false } 
);

users(sequelize)
posts(sequelize)

const { User, Post } = sequelize.models;
User.hasMany(Post); // Un usuario puede tener muchos posts
Post.belongsTo(User); 

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};
