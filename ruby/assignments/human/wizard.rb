#!/usr/bin/ruby

require_relative "human"

class Wizard < Human
  def initialize
    @health = 50
    @intelligence = 25
  end

  def heal
    @health += 10
    self
  end

  # decrease the health of target
  def fireball(obj)
    obj.health -= 20
    self
  end
end

merlin = Wizard.new
gandalf = Wizard.new

merlin.fireball(gandalf)
gandalf.display_health()
gandalf.heal().display_health()
