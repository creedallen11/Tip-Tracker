var exports = module.exports = {}

var db = require(".././models/index");
db["user"].findAll({where: {firstname: "Creed"}}).then(users => console.log(users[0].dataValues.firstname + " " + users[0].dataValues.lastname));


exports.logEntry = function(req, res) {
  // log then display dashboard.
  // res.render('foobaz');
  // console.log("USER ID IS.... " + req.user.id);

  db['entry'].create({
    user: req.user.id,
    hours: parseFloat(req.body.hours),
    date: req.body.date,
    miles: parseFloat(req.body.miles),
    tips: parseFloat(req.body.tips),
    car: 1
  }).then(entry => {
    console.log("Logged Entry");
  });
  // console.log(req.body)
  // console.log(entry.user + " and they worked " + entry.date);
  // console.log("THIS IS THE ENTRY PARSED: " + entry);

  // entry.save().complete(function (err) {
  //   if (err) 
  //     console.log("error in inserting record");
  //   else
  //     console.log("Data successfully logged.");
  // });

  // db['entry'].find({}).then(function(data) {
  //   console.log(data);
  // });


  res.render('dashboard', {message: "Wrote entry for  " + req.body.date + " to database."});
}


