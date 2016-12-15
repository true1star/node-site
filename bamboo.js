var mongoose = require('mongoose');

module.exports = function(db){

	var productSchema = {

	    school: {
		type: String,
		lowercase: true,
		required: true
	    },
	    category: {
		type: Number,
		ref: 'Category',
	    },
	    topics: [{
	    	type: String
	    }],
	    contents: {
		type: String,
		required: true
	    },
	    date: { 
		type: Date, 
		default: new Date()
	    },
	    like: {
		type: Number,
		default: 0
	    },
	    featured: {
		type: Boolean
	    }

	};
	
	var schema = new mongoose.Schema(productSchema);

	schema.index({ topics: 'text' });

	return db.model('Bamboo', schema, 'bamboos');
};
