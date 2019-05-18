//solamente sirve para ser importado por los modelos

const Sequelize = require("sequelize");
const db = new Sequelize("mysql://root:@localhost:3306/mydb");

module.exports = {
  Sequelize,
  db
};

/* 
User.findByPk(1).then(data => {
  console.log(data);
}); */
