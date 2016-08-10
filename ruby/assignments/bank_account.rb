#!/usr/bin/ruby

class BankAccount
  attr_accessor :account_number, :checking_balance, :savings_balance
  @accounts_count = 0

  # make class attribute accounts_count accessible by instance
  class << self
    attr_accessor :accounts_count
  end

  def initialize
    create_account()
    @checking_balance = 500 
    @savings_balance = 200 
    @interest_rate = 0.10
    self.class.accounts_count += 1
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
        puts "insufficient funds" 
      else
        @checking_balance -= amount
      end
    elsif acct_type == "savings"
      if amount > @savings_balance
        puts "insufficient funds"
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

  # track how many accounts bank has, 
  # class attribute
  def count_accounts
    self.class.accounts_count
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
puts user2.count_accounts


