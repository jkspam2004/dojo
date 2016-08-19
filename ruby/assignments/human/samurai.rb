#!/usr/bin/ruby

require_relative "human"

class Samurai < Human
  @samurai_count = 0

  class << self
    attr_accessor :samurai_count
  end
  
  def initialize
    @health = 200
    self.class.samurai_count += 1
  end

  # death_blow: attacks target and reduces own health to 0
  def death_blow(obj)
    attack(obj)
    @health = 0 
    self
  end

  # recharges samurai to full health
  def meditate
    @health = 200
    self
  end

  def how_many
    puts "There are #{self.class.samurai_count} samurais"
  end
end


sam1 = Samurai.new
sam2 = Samurai.new

sam1.death_blow(sam2).display_health()
sam2.display_health()
sam1.meditate().display_health()

sam2.how_many()
