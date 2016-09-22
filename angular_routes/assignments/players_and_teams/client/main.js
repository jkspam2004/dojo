/* module */
// var app = angular.module('app', ['ngRoute']);

// /* routing */
// app.config(function($routeProvider) {
//   $routeProvider
//     .when('/players', {
//       controller: 'playersController',
//       templateUrl: 'partials/players.html'
//     })
//     .when('/teams', {
//       controller: 'teamsController',
//       templateUrl: 'partials/teams.html'
//     })
//     .when('/associations', {
//       controller: 'associationsController',
//       templateUrl: 'partials/associations.html'
//     })
//     .when('/:teamname', {
//       controller: 'teamController',
//       templateUrl: 'partials/team.html'
//     })
//     .otherwise({
//       redirectTo: '/'
//     });

// });

// /* playerFactory */
// app.factory('playerFactory', function() {
//   var factory = {};
//   var players = [
//     { name: 'Speros', team: '' },
//     { name: 'Jimmy', team: '' },
//     { name: 'Jay', team: '' },
//     { name: 'Oscar', team: 'Ruby' },
//   ];

//   // get players
//   factory.index = function(callback) {
//     callback(players);
//   }
//   // add a player
//   factory.add = function(newPlayer, callback) {
//     players.push({ name: newPlayer.name });
//     callback(players);
//   } 
//   // delete a player
//   factory.delete = function(playerToDelete, callback) {
//     players.splice(players.indexOf(playerToDelete), 1);  
//     callback(players);
//   }
//   // update team for player
//   factory.update = function(data, callback) {
//     players[data.playerIdx].team = data.team;
//     callback(players);
//   }

//   return factory;
// });

// /* teamFactory */
// app.factory('teamFactory', function() {
//   var factory = {};

//   var teams = [
//     { name: 'Ruby', players: [] },
//     { name: 'Python', players: [] },
//     { name: 'MEAN', players: [] },
//     { name: 'iOS', players: [] },
//   ];

//   // get teams
//   factory.index = function(callback) {
//     callback(teams);
//   }
//   // add a team
//   factory.add = function(newTeam, callback) {
//     teams.push({ name: newTeam.name });
//     callback(teams);
//   } 
//   // delete a team
//   factory.delete = function(teamToDelete, callback) {
//     teams.splice(teams.indexOf(teamToDelete), 1);  
//     callback(teams);
//   }
//   // get players for a specified team
//   factory.getPlayers = function(teamname, callback) {
//     var players = [];
//     var team = teams.filter(function(teamObj) {
//       return teamObj.name === teamname;
//     });
//     console.log("found team", team[0].players);
//     callback(players);
//   }

//   factory.update = function() {

//   }  

//   return factory;
// });

// /* playersController */
// app.controller('playersController', function($scope, $location, playerFactory) {
//   $scope.players = [];
//   // get players
//   $scope.getPlayers = function() {
//     playerFactory.index(function(data) {
//       $scope.players = data;
//     });
//   };
//   $scope.getPlayers();
//   // add a player
//   $scope.addPlayer = function() {
//     playerFactory.add($scope.newPlayer, $scope.getPlayers);
//     $scope.newPlayer = {};
//   };
//   // remove a player
//   $scope.removePlayer = function(playerToDelete) {
//     playerFactory.delete(playerToDelete, $scope.getPlayers);
//   };

// });
// /* teamsController */
// app.controller('teamsController', function($scope, $location, teamFactory) {
//   $scope.teams = [];
//   // get teams
//   $scope.getTeams = function() {
//     teamFactory.index(function(data) {
//       $scope.teams = data;
//     });
//   };
//   $scope.getTeams();
//   // add a team
//   $scope.addTeam = function() {
//     teamFactory.add($scope.newTeam, $scope.getTeams);
//     $scope.newTeam = {};
//   };
//   // remove a team
//   $scope.removeTeam = function(teamToDelete) {
//     teamFactory.delete(teamToDelete, $scope.getTeams);
//   };

// });
// /* associationsController */
// app.controller('associationsController', function($scope, $location, playerFactory, teamFactory) {
//   $scope.players = [];
//   $scope.teams = [];

//   // get players for drop down
//   $scope.getPlayers = function() {
//     playerFactory.index(function(data) {
//       $scope.players = data;
//     });
//   };
//   $scope.getPlayers();

//   // get teams for drop down
//   $scope.getTeams = function() {
//     teamFactory.index(function(data) {
//       $scope.teams = data;
//     });
//   };
//   $scope.getTeams();

//   // add assignment
//   $scope.addAssignment = function() {
//     console.log($scope.newAssignment);
//     playerFactory.update({ 
//       playerIdx: $scope.newAssignment.playerIdx, team: $scope.newAssignment.team 
//     }, $scope.getPlayers);

//     teamFactory.update({  
//       playerIdx: $scope.newAssignment.playerIdx, team: $scope.newAssignment.team 
//     });
//   }

//   // remove assigment
//   $scope.removeAssignment = function(id) {
//     console.log("id=", id);
//     playerFactory.update({ 
//       playerIdx: id, team: '' 
//     }, $scope.getPlayers);
//   }

// });
// /* teamController */
// app.controller('teamController', function($scope, teamFactory, $routeParams) {
//   $scope.team = $routeParams.teamname;
//   $scope.players = []; 
//   // get players for a specific team
//   $scope.getPlayers = function() {
//     teamFactory.getPlayers($scope.team, function(data) {
//       $scope.players = data;
//     });
//   };
//   $scope.getPlayers();
// });


