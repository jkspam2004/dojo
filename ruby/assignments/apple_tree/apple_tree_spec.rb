require_relative "apple_tree"

RSpec.describe AppleTree do
  before do
    @tree1 = AppleTree.new(1,1)
  end

  it "has as getter and setter" do
    expect(@tree1.class).to eq(AppleTree)  
    expect(@tree1.height).to eq(1)
    expect(@tree1.age).to eq(1)
  end

  it "has a count_apples method" do
    expect(@tree1.count_apples()).to eq(0)
  end

  it "has a year_gone_by method" do
    @tree1.year_gone_by() # age 2
    expect(@tree1.age).to eq(2)
    expect(@tree1.height).to eq(2)
    expect(@tree1.apple_count).to eq(0)
  end

  it "does not grow apples until age 4 and after age 10" do
    @tree1.year_gone_by.year_gone_by # age 3
    expect(@tree1.age).to eq(3)
    expect(@tree1.apple_count).to eq(0)
    @tree1.year_gone_by # age 4
    expect(@tree1.age).to eq(4)
    expect(@tree1.apple_count).to eq(3)
    # get to age 9 next
    @tree1.year_gone_by.year_gone_by.year_gone_by.year_gone_by.year_gone_by
    expect(@tree1.age).to eq(9)
    expect(@tree1.apple_count).to eq(18)
    @tree1.year_gone_by # age 10 
    expect(@tree1.apple_count).to eq(21)
    @tree1.year_gone_by # age 10 
    expect(@tree1.apple_count).to eq(21) # no more apples
  end

  it "has a method called pick_apples" do
    10.times{ @tree1.year_gone_by }
    expect(@tree1.age).to eq(11)
    @tree1.pick_apples()
    expect(@tree1.apple_count).to eq(0)
  end



end
