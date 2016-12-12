//require express
var express = require('express');
var path = require('path');

//create our router object
var router = express.Router()

//export our router
module.exports = router;

//route for our homepage
router.get('/', function(req, res){
	// res.send('hello!');
	res.render('pages/index');
});

//route for our about page
router.get('/about', function(req, res){
	var users = [
		{name: 'Hanbyul', email: 'hanbyul@bamboo.com', avatar: 'http://placekitten.com/900/900'},
		{name: 'Jiwon', email: 'Jiwon@bamboo.com', avatar: 'http://placekitten.com/800/800'},
		{name: 'Chihyeon', email: 'Chihyeon@bamboo.com', avatar: 'http://placekitten.com/600/600'},
		{name: 'Hyunwoo', email: 'Hyunwoo@bamboo.com', avatar: 'http://placekitten.com/700/700'}
	];
	res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res){
	res.render('pages/contact');
});

router.post('/contact', function(req, res){
	res.send('Thanks for contacting us, ' + req.body.name + "! We will get back to you soon.");
});
