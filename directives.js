exports.menuView = function() {
	return {
		templateUrl: '/views/pages/template.html' 	
	};
};

exports.bambooView = function() {
	return {
		controller: 'BambooViewController',
		templateUrl: '/views/pages/bamboo.html'
	};
};

exports.schoolFilter = function() {
	return {
		controller: 'SchoolFilterController',
		templateUrl: '/views/pages/school_filter.html'
	};
};

exports.schoolBamboos = function() {
	return {
		controller: 'SchoolBamboosController',
		templateUrl: '/views/pages/school_bamboos.html'
	};
};

exports.categoryFilter = function() {
	return {
		controller: 'CategoryFilterController',
		templateUrl: '/views/pages/category_filter.html'
	};
};

exports.categoryBamboos = function() {
	return {
		controller: 'CategoryBamboosController',
		templateUrl: '/views/pages/category_bamboos.html'
	};
};

/*
exports.bambooAll = function() {
    return  {
        conroller: 'BambooAllController',
        templateUrl: '/views/pages/bamboo.html'
    };
};
*/
