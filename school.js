var mongoose = require('mongoose');

module.exports = function(db){

	var schoolSchema = {

	    _id: { type: String }

	};
	
	var schema = new mongoose.Schema(schoolSchema);

	return db.model('School', schema, 'schools');
};
