#!/usr/bin/ruby

class BankAccount
    attr_accessor :account_number, :checking_balance, :savings_balance
    @account_counter = 0

    class << self
        attr_accessor :account_counter
    end

    def initialize
        createAccountNumber
        @savings_balance = 2500
        @checking_balance = 5000
        @interest_rate = 0.05
        self.class.account_counter += 1
    end

    def displayAccountNumber
        puts @account_number
    end
    
    def savingsAccountBalance
        puts "Your Savings Account balance is: #{@savings_balance}"
    end
    
    def checkingAccountBalance
        puts "Your Checking Account balance is: #{@checking_balance}"
    end

    def deposit(amount, account)
        if account == "savings"
            puts "deposit savings"
            @savings_balance += amount
        else
            puts "deposit checking"
            @checking_balance += amount
        end
    end

    def withdraw(amount, account)
        if account == "savings"
            if amount < @savings_balance
                @savings_balance -= amount
            else
                puts "Sorry, your Savings Account balance is insufficient"
            end
        else
            if amount < @checking_balance
                @checking_balance -= amount
            else
                puts "Sorry, your Savings Account balance is insufficient"
            end
        end
    end

    def displayTotalBalance
        puts "Your Checking Account balance is: #{@checking_balance + (@checking_balance * @interest_rate)}"
        puts "Your Savings Account balance is: #{@savings_balance + (@savings_balance * @interest_rate)}"
        puts "Total balance is: #{(@checking_balance + @savings_balance) + ((@checking_balance+@savings_balance)) * @interest_rate}"
    end

    def account_information
        puts "Your account number is: #{@account_number}"
        puts "Total balance is: #{(@checking_balance + @savings_balance) + ((@checking_balance+@savings_balance)) * @interest_rate}"
        puts "Your Checking Account balance is: #{@checking_balance + (@checking_balance * @interest_rate)}"
        puts "Your Savings Account balance is: #{@savings_balance + (@savings_balance * @interest_rate)}"
        puts "The interest rate is: #{@interest_rate}"
    end

    def count_accounts
        puts "There are a total of #{self.class.account_counter} accounts"
    end

    private
    attr_accessor :interest_rate

    def createAccountNumber
        @account_number = Integer(rand.to_s[2..9])
    end
    
end

user1 = BankAccount.new
user1.displayAccountNumber
# user1.checkingAccountBalance
# user1.savingsAccountBalance
# user1.deposit(800, "checking")
# # user1.checkingAccountBalance
# user1.deposit(400, "savings")
# # user1.savingsAccountBalance
# user1.withdraw(500, "checking")
# user1.checkingAccountBalance
# user1.withdraw(100, "savings")
# user1.savingsAccountBalance
# user1.displayTotalBalance
user1.account_information

user2 = BankAccount.new
user2.displayAccountNumber
user2.count_accounts
