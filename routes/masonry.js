/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('masonry', { title: 'Masonry test' });
};