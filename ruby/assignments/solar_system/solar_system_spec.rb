require_relative 'solar_system'

RSpec.describe SolarSystem do
  before do
    @system1 = SolarSystem.new()
    @system2 = SolarSystem.new("New System")
    @planet1 = Planet.new("Earth", "has water", "billions", @system1)
    @planet2 = Planet.new("Saturn", "has many moons", "zero", @system1)
    @planet3 = Planet.new("Foo", "fooish", "foo_billions", @system2)
  end

  it "SolarSystem has a getter and setter" do
    expect(@system1.name).to eq("Milky Way")
    expect(@system2.name).to eq("New System")
  end

  it "Planet has a getter and setter" do
    @planet1.name = "Mars"
    expect(@planet1.name).to eq("Mars")
  end

  it "Planet has a name, description, and population" do
     expect(@planet1.name).to_not eq("") 
     expect(@planet1.description).to_not eq("") 
     expect(@planet1.population).to_not eq("") 
     expect(@planet2.name).to_not eq("") 
     expect(@planet2.description).to_not eq("") 
     expect(@planet2.population).to_not eq("") 
     expect(@planet3.name).to_not eq("") 
     expect(@planet3.description).to_not eq("") 
     expect(@planet3.population).to_not eq("") 
  end

  it "Solar System has a list_planets method" do
    expect(@system1.list_planets).to eq(["Earth", "Saturn"])
    expect(@system2.list_planets).to eq(["Foo"])
  end 

  it "Solar System has a count_planets method" do
    expect(@system1.count_planets).to eq(2)
    expect(@system2.count_planets).to eq(1)
  end

  it "planets added should be from Planet class" do
    expect(@system1.add_planet(String, 'nuplanet')).to eq("non-Planet class")   
    expect(@system2.add_planet(Array, 'oneplanet')).to eq("non-Planet class")   
  end

  it "Solar System has a super_nova method" do
    expect(@system1.super_nova()).to eq([])
    expect(@system2.super_nova()).to eq([])
  end

end
