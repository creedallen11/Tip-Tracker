var exports = module.exports = {}

exports.register = function(req, res) {
  res.render('register');

}

exports.login = function(req, res) {
  
     res.render('login');
  
 }

 exports.dashboard = function(req, res) {
  
     res.render('dashboard', {isAuth: req.isAuthenticated(), user: "Creed"}); //ph for seq db query
  
 }

 exports.logout = function(req, res) {
  
     req.session.destroy(function(err) {
  
         res.redirect('/');
  
     });
  
 }