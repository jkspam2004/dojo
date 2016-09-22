/* playersController */
app.controller('playersController', function($scope, $location, playerFactory) {
  $scope.players = [];
  // get players
  $scope.getPlayers = function() {
    playerFactory.index(function(data) {
      $scope.players = data;
    });
  };
  $scope.getPlayers();
  // add a player
  $scope.addPlayer = function() {
    playerFactory.add($scope.newPlayer, $scope.getPlayers);
    $scope.newPlayer = {};
  };
  // remove a player
  $scope.removePlayer = function(playerToDelete) {
    playerFactory.delete(playerToDelete, $scope.getPlayers);
  };

});