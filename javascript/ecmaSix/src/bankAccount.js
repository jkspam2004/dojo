/* bankAccount class
methods: display account number, checking and savings amount, total amount,
deposit a check, check balance, withdraw money

*/

let _accountNum; // private variable
class BankAccount {
    constructor() {
        this._checking = { balance: 0 };
        this._savings = { balance: 0 };
        /* account number should be random and should stay consistent per user  */
        let min = 10000;
        let max = 99999;
        _accountNum = Math.floor(Math.random() * (max - min + 1)) + min;
        BankAccount.prototype.accounts += 1;
    }

    static totalAccounts(){
        return BankAccount.prototype.accounts;
    }

    /* accountNum(): return the account number */
    get accountNum() {
        return _accountNum;
    }

    /* checkingBalance(): return checking account balance */
    get checkingBalance() {
        if (this._checking) {
            return this._checking.balance;
        } else {
            return "no checking account";
        }
    }

    /* savingsBalance(): return savings account balance */
    get savingsBalance() {
        if (this._savings) {
            return this._savings.balance;
        } else {
            return "no savings account";
        }
    }

    /* deposit(): deposit money into either checking or savings account */
    deposit(accountType, value) {
        if (typeof(accountType) == "string" && typeof(value) == "number" && value > 0) {
            if (accountType == 'checking' && this._checking) {
                this._checking.balance += value
                return `Successful deposit into ${accountType} account`;
            } else if (accountType == 'savings' && this._savings) {
                this._savings.balance += value
                return `Successful deposit into ${accountType} account`;
            } else {
                return "deposit(): invalid accountType";
            }
        } else {
            return "deposit(): invalid input"
        }
    } 

    /* withdraw(): withdraw money from checking or savings
       returns error if insufficient funds
    */
    withdraw(accountType, value) {
        if (typeof(accountType) == "string" && typeof(value) == "number" && value > 0) {
            if (accountType == 'checking' && this._checking) {
                if (value < this._checking.balance) {
                    this._checking.balance -= value
                    return `Successful withdrawal from ${accountType} account`;
                } else {
                    return "Insufficient funds";
                }
            } else if (accountType == 'savings' && this._savings) {
                if (value < this._savings.balance) {
                    this._savings.balance -= value
                    return `Successful withdrawal from ${accountType} account`;
                } else {
                    return "Insufficient funds";
                }
            } else {
                return "withdraw(): invalid accountType";
            }
        } else {
            return "withdraw(): invalid input"
        }
    }

    /* total(): view total amount of money at bank. checking + savings */
    get total() {
        let checking_balance = (this._checking && this._checking.balance) ? this._checking.balance : 0;
        let savings_balance = (this._savings && this._savings.balance) ? this._savings.balance : 0;
        return checking_balance + savings_balance;
    }

    /* accountInformation(): display user's account number, checking balance, savings balance, and total money */
    get accountInformation() {
        return `
            account number: ${_accountNum}, 
            checking balance: ${this.checkingBalance}, 
            savings balance: ${this.savingsBalance}, 
            total: ${this.total}
        `;
    }
}

/*
BankAccount should track how many accounts the bank currently has open. 
This number should be updated every time we create a new bank. 
Should be prototype property. 
*/
BankAccount.prototype.accounts = 0; // shared across instances. stored in heap memory

let myAccount = new BankAccount(); // instances stored in stack
console.log(`accountNum: ${myAccount.accountNum}`);
console.log(`total: ${myAccount.total}`);
console.log(`deposit savings 50: ${myAccount.deposit("savings", 50)}`);

console.log(`myAccount obj: ${myAccount}`);
console.log("myAccount obj:", myAccount);

console.log(`checking balance: ${myAccount.checkingBalance}`);
console.log(`savings balance: ${myAccount.savingsBalance}`);
console.log(`withdraw savings 51: ${myAccount.withdraw("savings", 51)}`);
console.log("account info: ", myAccount.accountInformation);

let y = new BankAccount();
console.log("number of accounts at bank:", BankAccount.totalAccounts());

