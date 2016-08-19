#!/usr/bin/ruby

class Project
  attr_accessor :name, :member
  def initialize(name, description)
    @name = name
    @description = description
  end

  def elevator_pitch
    str = "%s, %s" % [@name, @description]
  end

  def add_to_team(member)
    @member = member
  end
end

#project1 = Project.new("Project 1", "Description 1")
#puts project1.name # prints out Project 1"
#project1.elevator_pitch # prints out "Project 1, Description 1"
