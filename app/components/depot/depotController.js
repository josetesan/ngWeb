var depotController = angular.module('depotController', []);

depotController.controller('DepotListCtrl', ['$scope','Depot' function($scope,Depot){
	$scope.depot = Depot.query();
}])