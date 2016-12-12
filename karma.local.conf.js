module.exports = function(config) {
	config.set({
		files: [
			'https://code.jquery.com/jquery-1.11.3.js',
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.js',
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular-mocks.js',
			'./app/app.js',
			'./test.js',
			{ pattern: './*.html', included: false, served: true }
		],
		frameworks: ['mocha', 'chai'],
		browsers: ['Chrome'],
		port: 9876,
		proxies : {
			'/views/pages': 'http://localhost:9876/base/'
		}
	});
};
