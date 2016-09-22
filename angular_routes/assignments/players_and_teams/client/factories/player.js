/* playerFactory */
app.factory('playerFactory', function() {
  var factory = {};
  var players = [
    { name: 'Speros', team: '' },
    { name: 'Jimmy', team: '' },
    { name: 'Jay', team: '' },
    { name: 'Oscar', team: 'Ruby' },
  ];

  // get players
  factory.index = function(callback) {
    callback(players);
  }
  // add a player
  factory.add = function(newPlayer, callback) {
    players.push({ name: newPlayer.name });
    callback(players);
  } 
  // delete a player
  factory.delete = function(playerToDelete, callback) {
    players.splice(players.indexOf(playerToDelete), 1);  
    callback(players);
  }
  // update team for player
  factory.update = function(data, callback) {
    players[data.playerIdx].team = data.team;
    callback(players);
  }

  return factory;
});