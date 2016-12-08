var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    school: {
        type: String,
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
});
