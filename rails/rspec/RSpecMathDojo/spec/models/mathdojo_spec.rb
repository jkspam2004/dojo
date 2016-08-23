require 'rails_helper'
require "mathdojo"
describe MathDojo do
  it "adds" do
    expect(MathDojo.new.add(3,8).result).to eq(11)
  end
  it "adds arrays" do
    expect(MathDojo.new.add([1,3,5,9]).result).to eq(18)
  end
  it "subtracts" do
    expect(MathDojo.new.subtract(3,4).result).to eq(-7)
  end
  it "subtracts arrays" do
    expect(MathDojo.new.subtract([2,5]).result).to eq(-7)
  end
  it "multiplies" do
    expect(MathDojo.new.add(3).multiply([5,7]).result).to eq(36) 
  end
  it "resets" do
    expect(MathDojo.new.add([1,3,5]).reset().add(5).result).to eq(6)
  end
end
