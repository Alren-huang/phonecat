// var PhoneListCtrl = ['$scope', '$http', function($scope, $http){
// 	$http.get('json/phones.json').success(function(data) {
// 		$scope.phones = data;
// 	});
// 	$scope.orderProp = "age";
// }];

function PhoneListCtrl($scope, Phone){
	$scope.phones = Phone.query();
	$scope.orderProp = "age";
}




function PhoneDetailCtrl($scope, $routeParams, Phone){
	$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
		$scope.mainImageUrl = phone.images[0];
	});
	$scope.setImage = function(imageUrl){
		$scope.mainImageUrl = imageUrl;
	}
	$scope.hello = function(name){
		alert('Hello' + (name || 'world') + '!');
	}
};