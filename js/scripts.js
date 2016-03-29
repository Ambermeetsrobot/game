// business logic
function Balance(balance) {
  this.balance = balance;
}

BankAccount.prototype.deposit = function(newDeposit) {
  this.balance = this.balance + this.deposit;
}

BankAccount.prototype.withdraw = function(newWithdraw) {
  this.balance = this.balance - this.withdraw;
}

// user interface
$(document).ready(function() {
  $("form#new-account").submit(function(event){
    event.preventDefault();
    var accountName = $("input#new-name").val();
    var newWithdraw = parseInt($("input#first-withdraw").val());
    var newDeposit = parseInt($("input#new-deposit").val());
    // var newBalance = new Balance();
    
    $("#accounthistory").append(newBalance)

  });
});
