var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/data.json').success(function(data) {
        $scope.gallery = data;
    });
}]);