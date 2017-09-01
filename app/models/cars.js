module.exports = function(sequelize, Sequelize) {
  
     var Car = sequelize.define('car', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
  
         user: {
             type: Sequelize.INTEGER
         },

         cpm: {
           type: Sequelize.INTEGER
         }
     });
  
     return Car;
  
 }