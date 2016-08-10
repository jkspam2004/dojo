#!/usr/bin/ruby

require_relative "mammal"

class Dragon < Mammal
  def initialize
    @health = 170
  end

  def fly
    @health -= 10
    self
  end

  def attack_town
    @health -= 50
    self
  end

  def eat_humans
    @health += 20
    self
  end

  def display_health
    puts "this is a dragon!"
    super
  end
end


drake = Dragon.new
drake.attack_town.attack_town.attack_town.eat_humans.eat_humans.fly.fly.display_health


=begin
Have the default health be 170
 Add a new method called fly, which when invoked, decreased the health by 10.
 Add a new method called attack_town, which when invoked, decreased the health by 50.
 Add a new method called eat_humans, which when invoked, increases the health by 20.
 Have the Dragon attack_town three times, eat_humans twice, fly twice, and have it display its health. When the Dragon's displayHealth function is called have it say 'this is a dragon!' before it displays the default information (make sure you still call the parent's displayHealth function).
=end
