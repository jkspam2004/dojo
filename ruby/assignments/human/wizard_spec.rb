require_relative 'wizard'

RSpec.describe Wizard do
  before do
    @harry = Wizard.new
    @voldemort = Wizard.new
  end
 
  it "has a default health of 50 and intelligence of 25" do
    expect(@harry.health).to eq(50)
    expect(@harry.intelligence).to eq(25)
  end

  it "has a heal method that increases health by 10" do
    @harry.heal()
    expect(@harry.health).to eq(60)
  end 

  it "has an ancestor chain that includes Human" do
    expect(@harry.class.ancestors.include?(Human)).to eq(true)
  end

  it "has a fireball method that attacks an object and reduces the objects health" do
    @harry.fireball(@voldemort)
    expect(@voldemort.health).to eq(30)
  end
end

