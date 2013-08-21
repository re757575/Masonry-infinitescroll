
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express test' ,h2: 'My h2'});
};