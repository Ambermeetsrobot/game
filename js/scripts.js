function Player (roundscore, totalscore) {
  this.roundscore = roundscore;
  this.totalscore = totalscore;
}

Player.prototype.roll = function() {
  var roll1 = Math.floor(Math.random() * 6) + 1;
  var roll2 = Math.floor(Math.random() * 6) + 1;
  if (roll1 !== 1 || roll2 !== 1) {
  this.roundscore = this.roundscore + roll1 + roll2;
  }
    else {
    this.roundscore = 0;
    return 0;
    }
};


Player.prototype.hold = function() {
  this.totalscore = this.totalscore + this.roundscore;
}

Player.prototype.end = function() {
  if (this.totalscore >= 100) {
    return "The End...Ya Dummy."
  }
};


$(document).ready(function() {
  var player1 = new Player(0, 0);
  var player2 = new Player(0, 0);
  $("#roll1").click(function(event){
    event.preventDefault();
    $("#player1score").show();
    player1.roll();
    $("#roundscore1").text(player1.roundscore);
    $("#totalscore1").text(player1.turn);

  });
  $("#roll2").click(function(event){
    event.preventDefault();
    $("#player2score").show();
    player2.roll();
    $("#roundscore2").text(player2.roundscore);
    $("#totalscore2").text(player2.totalscore);

  });
});
//
//
// Two standard dice are rolled. If neither shows a 1, their sum is added to the turn total.
// If a single 1 is rolled, the player scores nothing and the turn ends.
// If two 1s are rolled, the player’s entire score is lost, and the turn ends.
// If a double is rolled, the point total is added to the turn total as with any roll but the player is obligated to roll again (possible sub-variation of the two-dice game)
