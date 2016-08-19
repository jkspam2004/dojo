#!/usr/bin/ruby

require_relative "human"

class Ninja < Human
  def initialize
    @stealth = 175
  end

  def steal(obj)
    attack(obj)
    @health += 10    
  end

  def get_away
    @health -= 15
  end
end

leo = Ninja.new
don = Ninja.new

leo.steal(don).display_health()
don.get_away.display_health()
