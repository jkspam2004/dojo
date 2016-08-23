require 'rails_helper'
require 'number'
RSpec.describe "Number" do
  it "is called the number One" do
    number = Number.new
    expect(number.value).to eq(1)
  end
end
