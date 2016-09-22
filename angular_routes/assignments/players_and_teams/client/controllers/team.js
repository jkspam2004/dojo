/* teamController */
app.controller('teamController', function($scope, teamFactory, $routeParams) {
  $scope.team = $routeParams.teamname;
  $scope.players = []; 
  // get players for a specific team
  $scope.getPlayers = function() {
    teamFactory.getPlayers($scope.team, function(data) {
      $scope.players = data;
    });
  };
  $scope.getPlayers();
});