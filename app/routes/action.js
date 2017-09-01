var actionController = require('../controllers/actionController.js');
var authController = require('../controllers/authcontroller.js');


// db query example
// var db = require(".././models/index");
// db["user"].findAll({where: {firstname: "Creed"}}).then(users => console.log(users[0].dataValues.firstname + " " + users[0].dataValues.lastname));

module.exports = function(app) {
  app.post('/entry', actionController.logEntry);

}
