var mongoose = require('mongoose');

module.exports = function(db){
	var productSchema = {
	    school: {
		type: String,
		lowercase: true,
		required: true
	    },
	    category: {
		type: String,
		default: 'etc'
	    },
	    topics: {
		type: Array,
		default: ['null']
	    },
	    contents: {
		type: String,
		required: true
	    },
	    date: { 
		type: Date, 
		default: Date.now
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

	schema.index({ contents: 'text' });

	return db.model('Bamboo', schema, 'bamboos');
};
