var mongoose = require('mongoose');

module.exports = function(wagner) {
    mongoose.connect('mongodb://localhost:27017/text');

	wagner.factory('db', function(){
		return mongoose;
	});

    wagner.factory('Category', require('./category'));
	
    wagner.factory('Bamboo', require('./bamboo'));
};
