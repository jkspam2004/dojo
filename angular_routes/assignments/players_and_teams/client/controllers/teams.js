/* teamsController */
app.controller('teamsController', function($scope, $location, teamFactory) {
  $scope.teams = [];
  // get teams
  $scope.getTeams = function() {
    teamFactory.index(function(data) {
      $scope.teams = data;
    });
  };
  $scope.getTeams();
  // add a team
  $scope.addTeam = function() {
    teamFactory.add($scope.newTeam, $scope.getTeams);
    $scope.newTeam = {};
  };
  // remove a team
  $scope.removeTeam = function(teamToDelete) {
    teamFactory.delete(teamToDelete, $scope.getTeams);
  };

});