function Player (roundscore, totalscore) {
  this.roundscore = roundscore;
  this.totalscore = totalscore;
}

Player.prototype.roll = function() {
<<<<<<< HEAD
  var roll1 = Math.floor(Math.random() * 6) + 1;
  var roll2 = Math.floor(Math.random() * 6) + 1;
  if (roll1 !== 1 || roll2 !== 1) {
  return roll1 + roll2;
  }
  else { return 0
  }
=======
  var dieRoll = Math.floor(Math.random() * 6) + 1;
  return dieRoll;
>>>>>>> 2f6d6810c89bd208358065eae815954db65a14b0
};

Player.prototype.turn = function() {
  var value = this.roll();
<<<<<<< HEAD
  this.roundscore = this.roundscore + value;
  }
=======
  if (value !== 1) {
  this.roundscore = this.roundscore + value;
    } else { this.roundscore = 0;
    }
>>>>>>> 2f6d6810c89bd208358065eae815954db65a14b0
};

Player.prototype.hold = function() {
  this.totalscore = this.totalscore + this.roundscore;
}

Player.prototype.end = function() {
  if (this.totalscore >= 100) {
    return "The End...Ya Dummy."
  }
};

<<<<<<< HEAD
=======
var Player1 = new Player(0, 0)

var Player2 = new Player(0, 0)
>>>>>>> 2f6d6810c89bd208358065eae815954db65a14b0

$(document).ready(function() {
  $("#roll1").click(function(event){
    event.preventDefault();
<<<<<<< HEAD
    var Player1 = new Player(0, 0);
=======
>>>>>>> 2f6d6810c89bd208358065eae815954db65a14b0
    debugger;
  });
  $("#roll2").click(function(event){
    event.preventDefault();
<<<<<<< HEAD
    var Player2 = new Player(0, 0);
    var dieRoll =
    $(".roundscore").text(Player2.roundscore);
=======
>>>>>>> 2f6d6810c89bd208358065eae815954db65a14b0
    debugger;
  });
});
//
//
// Two standard dice are rolled. If neither shows a 1, their sum is added to the turn total.
// If a single 1 is rolled, the player scores nothing and the turn ends.
// If two 1s are rolled, the player’s entire score is lost, and the turn ends.
// If a double is rolled, the point total is added to the turn total as with any roll but the player is obligated to roll again (possible sub-variation of the two-dice game)
