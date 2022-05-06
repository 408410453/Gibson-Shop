var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'shop_index' });
});
router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'cart' });
});
router.get('/hats', function(req, res, next) {
  res.render('hats', { title: 'hats' });
});
router.get('/shirt', function(req, res, next) {
  res.render('shirt', { title: 'shirt' });
});
router.get('/pants', function(req, res, next) {
  res.render('pants', { title: 'pants' });
});
router.get('/shoes', function(req, res, next) {
  res.render('shoes', { title: 'shoes' });
});
router.get('/socks', function(req, res, next) {
  res.render('socks', { title: 'socks' });
});








module.exports = router;
