var mongoose = require('mongoose');

module.exports = function(db){

	var categorySchema = {

	    _id: { type: Number },
	    categories: [{
		type: String,
		required: true
	   }]

	};
	
	var schema = new mongoose.Schema(categorySchema);

	return db.model('Category', schema, 'categories');
};
