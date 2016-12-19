var mongoose = require('mongoose');

module.exports = function(wagner) {
    mongoose.connect(process.env.MONGODB_URI);

	wagner.factory('db', function(){
		return mongoose;
	});

    wagner.factory('Category', require('./category'));
	
    wagner.factory('Bamboo', require('./bamboo'));
};
