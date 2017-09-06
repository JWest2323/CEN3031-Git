angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.inputToSearch = "";
    $scope.newListing = null;
    //$scope.moreDetails = 'code': '', 'name': '', 'coordinates': {'latitude': '', 'longitude': ''}, 'address': '';
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      //$scope.listings.push({'code':$scope.code, 'name':$scope.name, 'coordinates':$scope.coordinates, 'address': $scope.address});
      //$scope.code = '';
      //$scope.name = '';
      //$scope.coordinates = '';
      if($scope.newListing != null){
        $scope.listings.push($scope.newListing);
        $scope.newListing = null;
      } else {
        
      }
    };


    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      console.log(index);
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
