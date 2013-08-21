/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('masonry2', { title: 'Masonry test' });
};