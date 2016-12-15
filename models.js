var mongoose = require('mongoose');

module.exports = function(wagner) {
    mongoose.connect('mongodb://localhost:27017/text');

	wagner.factory('db', function(){
		return mongoose;
	});

//    var Category = 
//        mongoose.model('Category', require('./category'), 'categories');
//    var Bamboo =
//	mongoose.model('Bamboo', require('./bamboo'), 'bamboos');

    wagner.factory('Category', require('./category'));
    
	wagner.factory('School', require('./school'));
	
    wagner.factory('Bamboo', require('./bamboo'));
    
//    return {
//        Bamboo: Bamboo
//    };
};
