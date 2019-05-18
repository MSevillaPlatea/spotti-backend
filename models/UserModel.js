let { Sequelize, db } = require("./../db");

class User extends Sequelize.Model {}
User.init(
  {
    id: {
      type         : Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey   : true
    },
    first_name  : Sequelize.STRING,
    last_name   : Sequelize.STRING,
    email       : Sequelize.STRING,
    nickname    : Sequelize.STRING,
    password    : Sequelize.STRING,
    avatar      : Sequelize.STRING,
    birthdate   : Sequelize.DATE  ,
    activated_at: Sequelize.DATE  ,
    created_at  : Sequelize.DATE  ,
    deleted_at  : Sequelize.DATE  ,
    updated_at  : Sequelize.DATE
  },
  { sequelize: db, modelName: "users", underscored: true }
);

module.exports = User;
