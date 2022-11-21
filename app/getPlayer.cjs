function getplayer(playerid) {
    var playerfound = new Player(playerid);
    return playerfound;
  }
  class Player {
    constructor(playerid) {
      this.Playerid = playerid;
      if(playerid === 1 || playerid === '1')
      this.Name = "Richard";
      else
      this.Name = "Ben";

    }
  }
  module.exports = getplayer;
 