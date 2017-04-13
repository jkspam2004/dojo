"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* bankAccount class
methods: display account number, checking and savings amount, total amount,
deposit a check, check balance, withdraw money

*/

var _accountNum = void 0; // private variable

var BankAccount = function () {
    function BankAccount() {
        _classCallCheck(this, BankAccount);

        this._checking = { balance: 0 };
        this._savings = { balance: 0 };
        /* account number should be random and should stay consistent per user  */
        var min = 10000;
        var max = 99999;
        _accountNum = Math.floor(Math.random() * (max - min + 1)) + min;
        BankAccount.prototype.accounts += 1;
    }

    _createClass(BankAccount, [{
        key: "deposit",


        /* deposit(): deposit money into either checking or savings account */
        value: function deposit(accountType, value) {
            if (typeof accountType == "string" && typeof value == "number" && value > 0) {
                if (accountType == 'checking' && this._checking) {
                    this._checking.balance += value;
                    return "Successful deposit into " + accountType + " account";
                } else if (accountType == 'savings' && this._savings) {
                    this._savings.balance += value;
                    return "Successful deposit into " + accountType + " account";
                } else {
                    return "deposit(): invalid accountType";
                }
            } else {
                return "deposit(): invalid input";
            }
        }

        /* withdraw(): withdraw money from checking or savings
           returns error if insufficient funds
        */

    }, {
        key: "withdraw",
        value: function withdraw(accountType, value) {
            if (typeof accountType == "string" && typeof value == "number" && value > 0) {
                if (accountType == 'checking' && this._checking) {
                    if (value < this._checking.balance) {
                        this._checking.balance -= value;
                        return "Successful withdrawal from " + accountType + " account";
                    } else {
                        return "Insufficient funds";
                    }
                } else if (accountType == 'savings' && this._savings) {
                    if (value < this._savings.balance) {
                        this._savings.balance -= value;
                        return "Successful withdrawal from " + accountType + " account";
                    } else {
                        return "Insufficient funds";
                    }
                } else {
                    return "withdraw(): invalid accountType";
                }
            } else {
                return "withdraw(): invalid input";
            }
        }

        /* total(): view total amount of money at bank. checking + savings */

    }, {
        key: "accountNum",


        /* accountNum(): return the account number */
        get: function get() {
            return _accountNum;
        }

        /* checkingBalance(): return checking account balance */

    }, {
        key: "checkingBalance",
        get: function get() {
            if (this._checking) {
                return this._checking.balance;
            } else {
                return "no checking account";
            }
        }

        /* savingsBalance(): return savings account balance */

    }, {
        key: "savingsBalance",
        get: function get() {
            if (this._savings) {
                return this._savings.balance;
            } else {
                return "no savings account";
            }
        }
    }, {
        key: "total",
        get: function get() {
            var checking_balance = this._checking && this._checking.balance ? this._checking.balance : 0;
            var savings_balance = this._savings && this._savings.balance ? this._savings.balance : 0;
            return checking_balance + savings_balance;
        }

        /* accountInformation(): display user's account number, checking balance, savings balance, and total money */

    }, {
        key: "accountInformation",
        get: function get() {
            return "\n            account number: " + _accountNum + ", \n            checking balance: " + this.checkingBalance + ", \n            savings balance: " + this.savingsBalance + ", \n            total: " + this.total + "\n        ";
        }
    }], [{
        key: "totalAccounts",
        value: function totalAccounts() {
            return BankAccount.prototype.accounts;
        }
    }]);

    return BankAccount;
}();

/*
BankAccount should track how many accounts the bank currently has open. 
This number should be updated every time we create a new bank. 
Should be prototype property. 
*/


BankAccount.prototype.accounts = 0; // shared across instances. stored in heap memory

var myAccount = new BankAccount(); // instances stored in stack
console.log("accountNum: " + myAccount.accountNum);
console.log("total: " + myAccount.total);
console.log("deposit savings 50: " + myAccount.deposit("savings", 50));

console.log("myAccount obj: " + myAccount);
console.log("myAccount obj:", myAccount);

console.log("checking balance: " + myAccount.checkingBalance);
console.log("savings balance: " + myAccount.savingsBalance);
console.log("withdraw savings 51: " + myAccount.withdraw("savings", 51));
console.log("account info: ", myAccount.accountInformation);

var y = new BankAccount();
console.log("number of accounts at bank:", BankAccount.totalAccounts());