#!/usr/bin/ruby

class Human
  attr_accessor :strength, :intelligence, :stealth, :health

  def initialize
    @strength = 3
    @stealth = 3
    @intelligence = 3
    @health = 100
  end

  def attack(target)
    target_ancestors = target.class.ancestors
    puts target_ancestors.to_s # array of objects
    if target_ancestors.include?(Human)
      puts "Human class"
      target.health -= 10
    end
    self 
  end

  def display_health
    puts "health: #{@health}"
  end

end

class Nomads < Human
end

class Farmers < Human
end

class Mosquitoes
end

genghis = Nomads.new
joe = Farmers.new
betty = Mosquitoes.new

#genghis.attack(joe).display_health()
#joe.display_health()


=begin
Let's create a class with four attributes: strength, intelligence, stealth, and health.
Give the human a default value of 3 for strength, stealth and intelligence. Health should have a default value of 100.
Now lets add a new method called attack, which when invoked, should attack another object (i.e., decrease its health) if the object it is attacking inherits from the Human class. Hint: you can check ancestors of a object by using .class.ancestors
=end


