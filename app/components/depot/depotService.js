var depotServices = angular.module('depotServices', ['ngResource']);

depotServices.factory('Depot', ['$resource',function($resource){
    return $resource('depot/:userId.json', {}, {
      query: {method:'GET', params:{userId:'userId'}, isArray:true}
    });
  }]);