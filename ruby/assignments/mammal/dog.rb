#!/usr/bin/ruby

require_relative "mammal"

class Dog < Mammal
  def pet
    @health += 5
    self
  end

  def walk
    @health -= 1
    self
  end

  def run
    @health -= 10
    self
  end

end

spot = Dog.new
puts spot.health
spot.walk.walk.walk.run.run.pet.display_health


# requirements
=begin
Default health by 150 (inherited)
A method called pet, which when invoked, increase the health by 5
A method called walk, which when invoked, decreases the health by 1
A method called run, which when invoked, decreases the health by 10
A method called display_health (inherited)
Have the Dog walk three times, run twice, petted once, and have it display its health.
=end
