#!/usr/bin/ruby

class BankAccount
  attr_reader :account_number, :checking_balance, :savings_balance
  @@num_accounts = 0

  def initialize
    create_account()
    @checking_balance = 500 
    @savings_balance = 200 
    @interest_rate = 0.10
    @@num_accounts += 1
  end

  def self.count_accounts_class_method
    @@num_accounts
  end

  # track how many accounts bank has
  # num_class is a class attribute
  def count_accounts
    @@num_accounts
  end

  # get the account number
  def get_account_number
    @account_number
  end

  # get checking balance
  def checking_balance
    @checking_balance
  end

  # get savings balance
  def savings_balance
    @savings_balance
  end

  # deposit amount to checking or savings account
  def deposit(acct_type, amount)
    puts "deposting #{amount} into #{acct_type} account"
    if acct_type == "checking"
      @checking_balance += amount
    elsif acct_type == "savings"
      @savings_balance += amount
    end
  end

  # withdraw amount from checking or savings account
  # print insufficient funds message if amount is less than balance
  def withdraw(acct_type, amount)
    puts "withdrawing #{amount} from #{acct_type} account"
    @message = ""
    if acct_type == "checking"
      if amount > @checking_balance
        "insufficient funds" 
      else
        @checking_balance -= amount
      end
    elsif acct_type == "savings"
      if amount > @savings_balance
        "insufficient funds"
      else
        @savings_balance -= amount
      end
    end
  end

  # return total amount of money at the bank
  def total
    @total = @checking_balance + @savings_balance
  end

  # return account information: account number, interest rate, total, balances
  def account_information
    puts 
    puts "-- account information --"
    puts "account number: #{@account_number}"
    puts "interest rate: #{interest_rate()}" 
    puts "total money: #{total()}" 
    puts "checking account balance #{checking_balance()}" 
    puts "savings account balance: #{savings_balance()}"
    puts
  end

  private ### private methods go below ###

  # private attribute
  attr_accessor :interest_rate

  # return account number
  def create_account
    # generate 8 digit random number
    @account_number = 8.times.map{rand(10)}.join 
  end

end

#=begin
user1 = BankAccount.new
puts "account number: #{user1.get_account_number}"
user1.deposit('checking', 100)
puts "checking balance: #{user1.checking_balance()}"
user1.withdraw('savings', 1000)
user1.withdraw('checking', 100)
user1.deposit('savings', 100000)
user1.account_information

user2 = BankAccount.new
puts "account number: #{user2.get_account_number}"
print "instance count_accounts method: ", user2.count_accounts(), "\n"
print "class count_accounts_class_method: ", BankAccount.count_accounts_class_method(), "\n"
print "instance calling class getter method: ", user2.count_accounts_class_method(), "\n"
# cannot access class attribute this way. has to be from a class getter method. so from self.count_accounts_class_method()
print "class num_accounts attribute: ", BankAccount.num_accounts, "\n" 
# instance should not be able to access class attribute num_accounts
print "instance num_accounts attribute: ", user2.num_accounts, "\n" 
#=end

#user2.checking_balance = 99999999
#user2.interest_rate = 0.8
