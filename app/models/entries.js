module.exports = function(sequelize, Sequelize) {
  
     var Entry = sequelize.define('entry', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
  
         user: {
             type: Sequelize.INTEGER
         },

         hours: {
             type: Sequelize.DOUBLE,
         },
  
         date: {
             type: Sequelize.DATE,
         },
  
         miles: {
             type: Sequelize.DOUBLE
         },
  
         tips: {
             type: Sequelize.DOUBLE
         },

         car: {
           type: Sequelize.INTEGER
         }
     });
  
     return Entry;
  
 }