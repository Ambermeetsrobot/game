var dieRoll = (Math.floor(Math.random() * 6) + 1;

function Player (roundscore, totalscore) {
  this.roundscore = roundscore;
  this.totalscore = totalscore;
}

Player.prototype.roll = function() {
  var dieRoll = Math.floor(Math.random() * 6) + 1;
  return dieRoll;
};

Player.prototype.turn = function() {
  var value = this.roll();
  if (value !== 1) {
  this.roundscore = this.roundscore + value;
    } else { this.roundscore = 0;
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

var newPlayer = new Player(0, 0)

$(document).ready(function() {
  $("form#play").submit(function(event){
    event.preventDefault();

    var roundScore = new



Two standard dice are rolled. If neither shows a 1, their sum is added to the turn total.
If a single 1 is rolled, the player scores nothing and the turn ends.
If two 1s are rolled, the player’s entire score is lost, and the turn ends.
If a double is rolled, the point total is added to the turn total as with any roll but the player is obligated to roll again (possible sub-variation of the two-dice game)
