/* teamFactory */
app.factory('teamFactory', function() {
  var factory = {};

  var teams = [
    { name: 'Ruby', players: [] },
    { name: 'Python', players: [] },
    { name: 'MEAN', players: [] },
    { name: 'iOS', players: [] },
  ];

  // get teams
  factory.index = function(callback) {
    callback(teams);
  }
  // add a team
  factory.add = function(newTeam, callback) {
    teams.push({ name: newTeam.name });
    callback(teams);
  } 
  // delete a team
  factory.delete = function(teamToDelete, callback) {
    teams.splice(teams.indexOf(teamToDelete), 1);  
    callback(teams);
  }
  // get players for a specified team
  factory.getPlayers = function(teamname, callback) {
    var players = [];
    var team = teams.filter(function(teamObj) {
      return teamObj.name === teamname;
    });
    console.log("found team", team[0].players);
    callback(players);
  }

  factory.update = function() {

  }  

  return factory;
});