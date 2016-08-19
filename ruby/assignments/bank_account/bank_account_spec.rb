require_relative 'bank_account'

RSpec.describe BankAccount do
  before do
    @account = BankAccount.new
  end

  it "has a method for retrieving the checking account balance" do
    expect(@account.checking_balance()).to eq(500)
  end

  it "has a method that retrieves the total account balance" do
    expect(@account.total()).to eq(700)
  end

  it "has a method that allows the user to withdraw cash" do
    expect(@account.withdraw('checking', 100)).to eq(400)
    expect(@account.withdraw('savings', 100)).to eq(100)
  end

  it "raises an error if a user tries to withdraw more money than they have in the account" do
    expect(@account.withdraw('checking',5000)).to eq("insufficient funds") 
    expect(@account.withdraw('savings',5000)).to eq("insufficient funds") 
  end

  it "raises an error when the user tries to print out how many bank accounts there are" do
    expect{puts @account.accounts_count}.to raise_error(NoMethodError)
  end

  it "raises an error when the user tries to set the interest rate" do
    #@account.interest_rate = 0.20
    expect{@account.interest_rate = 0.20}.to raise_error(NoMethodError)
  end

  it "raises an error when the user tries to set any attribute" do
    expect{@account.checking_balance = 100000}.to raise_error(NoMethodError)
    expect{@account.savings_balance = 100000}.to raise_error(NoMethodError)
    expect{@account.account_number = 3}.to raise_error(NoMethodError)
    expect{@account.account_number = 3993}.to raise_error(NoMethodError)
    expect{@account.interest_rate = 0.20}.to raise_error(NoMethodError)
    expect{@account.savings_balance(100000)}.to raise_error(ArgumentError)
  end
end

=begin

Has a method for retrieving the checking account balance
Has a method that retrieves the total account balance
Has a method that allows the user to withdraw cash
Raises an error if a user tries to withdraw more money than they have in the account
Raises an error when the user tries to print out how many bank accounts there are
Raises an error when the user tries to set the interest rate
Raises an error when the user tries to set any attribute

=end
