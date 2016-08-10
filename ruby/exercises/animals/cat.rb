#!/usr/bin/ruby

puts "I am in the cat file"
require_relative "mammal"

# require_relative looks in local directory and loads up ruby file matching that name

class Cat < Mammal
  def jerk
    puts 'scratching you...'
    self
  end 
  def speak  
    puts "Meow" 
    self 
  end  
  def who_am_i
    puts self
    self
  end
end
chloe = Cat.new
chloe.jerk.speak.breathe.who_am_i
