var app = angular.module('myModule', []);

app.controller('myController', function($scope){
	$scope.groceryItems = [
		// {item: 'apples', price: .50},
		// {item: 'peaches', price: .75},
//		{item: 'yogurt', price: 1.25}
	];
	$scope.total=0;

	$scope.add=function(){
		$scope.groceryItems.push({item: $scope.newItem, price: $scope.newPrice});
		$scope.groceryItems.forEach(function(grocery){
			$scope.total+=grocery.price;
		})
	};
});