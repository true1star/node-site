exports.BambooViewController = function($scope, $bambooList) {

	$scope.bambooList = $bambooList;

	setTimeout(function() {
		$scope.$emit('BambooViewController');
	}, 0);
};

exports.SchoolFilterController = function($scope) {

	$scope.schoolList = ['가천대', '건국대', '경북대', '경희대', '고려대', '광운대', '동국대', '부산대', '서강대', '서울교대', '서울대', '서울시립대', '서울여대', '성균관대', '성신여대', '숙명여대', '숭실대', '아주대', '연세대', '외대', '인하대', '전남대', '전북대', '중앙대', '충남대', '한양대', '항공대', '홍익대'];

	setTimeout(function() {
		$scope.$emit('SchoolFilterController');
	}, 0);
};

exports.SchoolBamboosController = function($scope, $routeParams, $http) {

	console.log("SCHOOL: ", $routeParams);
	var encoded = encodeURIComponent($routeParams.school);
	
	if ($routeParams.category){
		var encodedcategory = encodeURIComponent($routeParams.category);
		encoded += "/" + encodedcategory;
	}
	
	$http.
		get('/api/v1/bamboo/school/' + encoded).
		success(function(data) {
			$scope.bambooList = data.bamboos;
			console.log(data.bamboos);
		});
		
		setTimeout(function() {
			$scope.$emit('SchoolBamboosController');
		}, 0);
};

exports.CategoryFilterController = function($scope, $routeParams, $http, $location) {

	console.log($location.path());
	if ($routeParams.school){
		$scope.path = "#/school/"+$routeParams.school;
	} else {
		$scope.path = "#/category";
	}

	console.log("FILTER: ", $routeParams);

	$http.
		get('/api/v1/categories').
		success(function(data) {
			$scope.categories = data.categories;

		});
		
		setTimeout(function() {
			$scope.$emit('CategoryFilterController');
		}, 0);
};

exports.CategoryBamboosController = function($scope, $routeParams, $http) {
	var encoded = encodeURIComponent($routeParams.category);
	
	$http.
		get('/api/v1/bamboo/category/' + encoded).
		success(function(data) {
			$scope.bambooList = data.bamboos;
		});
		
		setTimeout(function() {
			$scope.$emit('CategoryBamboosController');
		}, 0);
};

/*
exports.BambooAllController = function($scope, $routeParams, $http) {
    var encoded = encodeURIComponent($routeParams.id);

    $http.
        get('/api/v1/bamboo/').
        success(function(data) {
                $scope.bamboos = data.bamboos;
                });

    setTimeout(function() {
            $scope.$emit('BammbooAllController');
            }, 0);
};
*/
