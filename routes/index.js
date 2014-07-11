var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });
mongoose.model('products',{name:String,description:String,price:String,currency:String});
router.get('/products',function(req,res){
	mongoose.model('products').find(function(err,products){
		res.send(products);
	});
	// res.send({
	// 	products:['product A','product B']
	// });
})
module.exports = router;
