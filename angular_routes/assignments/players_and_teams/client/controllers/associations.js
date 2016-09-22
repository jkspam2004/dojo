/* associationsController */
app.controller('associationsController', function($scope, $location, playerFactory, teamFactory) {
  $scope.players = [];
  $scope.teams = [];

  // get players for drop down
  $scope.getPlayers = function() {
    playerFactory.index(function(data) {
      $scope.players = data;
    });
  };
  $scope.getPlayers();

  // get teams for drop down
  $scope.getTeams = function() {
    teamFactory.index(function(data) {
      $scope.teams = data;
    });
  };
  $scope.getTeams();

  // add assignment
  $scope.addAssignment = function() {
    console.log($scope.newAssignment);
    playerFactory.update({ 
      playerIdx: $scope.newAssignment.playerIdx, team: $scope.newAssignment.team 
    }, $scope.getPlayers);

    teamFactory.update({  
      playerIdx: $scope.newAssignment.playerIdx, team: $scope.newAssignment.team 
    });
  }

  // remove assigment
  $scope.removeAssignment = function(id) {
    console.log("id=", id);
    playerFactory.update({ 
      playerIdx: id, team: '' 
    }, $scope.getPlayers);
  }

});