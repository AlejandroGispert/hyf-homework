class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
    }
  }
  getBalance() {
    console.log(this.balance);
  }
}

const myAccount = new BankAccount(139, "loco", 100);
console.log(myAccount);
myAccount.deposit(100);
console.log(myAccount);
myAccount.withdraw(60);
console.log(myAccount);
