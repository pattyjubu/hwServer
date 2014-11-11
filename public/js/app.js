angular.module("myApp",[])
.controller('mainCtrl', function($scope,$http,$window){
	$scope.books = [];
	$http.get('/api/book').success(function(data){
		$scope.books = data;
	})

	$scope.submit = function() {
       	$http.post('/api/book',{
       		title : $scope.title,
       		price : $scope.price
       	})
       	.success(function(data){
       		console.log("success");
       		$window.location.reload();
		})
    };
})