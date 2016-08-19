#!/usr/bin/ruby

class SolarSystem
  attr_accessor :name, :planet_list

  def initialize(name="Milky Way")
    puts "new solar system: #{name}"
    @name = name
    @planet_list = []
  end

  # list out the planets
  def list_planets
    @planet_list
  end

  # return planet count
  def count_planets
    @planet_list.length()
  end

  # add_planet: add planet to list if it is of Planet class
  # pass in planet instance and name of planet
  def add_planet(instance, name)
    puts "adding planet #{name} to #{self.name}"
    if instance.class == Planet
      @planet_list.push(name) 
    else
      "non-Planet class"
    end
  end

  # super_nova: destroys all of the planets
  def super_nova
    puts "super_nova: blow away the planets"
    @planet_list = []
  end

end

class Planet
  attr_accessor :name, :description, :population, :solar_system

  def initialize(name, description, population, system_obj)
    @name = name
    @description = description
    @population = population

    # add the planet to the solar system
    @system_obj = system_obj
    @system_obj.add_planet(self,name) 
    @solar_system = @system_obj.name
  end

  def in_solar_system
    @solar_system
  end

end


#=begin
# create instances of SolarSystem class
system1 = SolarSystem.new()
system2 = SolarSystem.new("New System")

# create instances of Planet class
planet1 = Planet.new("Earth", "has water", "billions", system1)
planet2 = Planet.new("Saturn", "many moons?", "zero", system1)
planet3 = Planet.new("Foo", "fooish", "foozero", system2)

print "system1.list_planets(): ", system1.list_planets(), "\n"
print "system1.count_planets(): ", system1.count_planets(), "\n"
print "system2.list_planets(): ", system2.list_planets(), "\n"
print "system2.count_planets(): ", system2.count_planets(), "\n"

print "system1.planet_list: ", system1.planet_list, "\n"
system1.super_nova()
print "system1.list_planets(): ", system1.list_planets(), "\n"
puts planet1.solar_system
puts planet3.solar_system
#=end


