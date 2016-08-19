#!/usr/bin/ruby
# logic doesn't work as planet_list was set as a class attribute
# when we have more than one solar system, the planet list is the same for all
# solar systems
### good practice with class attribute without using @@

class SolarSystem
  attr_accessor :name, :planet_list
  @planet_list = []

  class << self
    attr_accessor :planet_list
  end

  def initialize(name="Milky Way")
    puts "new solar system: #{name}"
    @name = name
    self.class.planet_list = []
  end

  def list_planets
    self.class.planet_list
  end

  def count_planets
    self.class.planet_list.length()
  end

  def add_planet(name)
    self.class.planet_list.push(name) 
  end

  def super_nova
    self.class.planet_list = []
  end

end

class Planet
  attr_accessor :name, :description, :population

  def initialize(name, description, population, solar_system)
    @name = name
    @description = description
    @population = population
    @solar_system = solar_system
    @solar_system.add_planet(name)
  end

end

system1 = SolarSystem.new()
system2 = SolarSystem.new("New System")
planet1 = Planet.new("Earth", "has water", "billions", system1)
planet2 = Planet.new("Saturn", "many moons?", "zero", system1)
planet3 = Planet.new("Foo", "fooish", "foozero", system2)

# SolarSystem class instance
print "system1 count: ", system1.count_planets(), "\n"
print "system1 list: ", system1.list_planets(), "\n"

print "system2 count: ", system2.count_planets(), "\n"
print "system2 list: ", system2.list_planets(), "\n"

print "SolarSystem.planet_list: ", SolarSystem.planet_list, "\n"
print "system1.planet_system: ", system1.planet_list, "\n"

