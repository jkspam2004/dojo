#!/usr/bin/ruby

class AppleTree
  attr_accessor :height, :age, :apple_count

  def initialize(height, age)
    @height = height
    @age = age
    if age <= 3
      @apple_count = 0
    else
      @apple_count = 3
    end
  end

  def count_apples
    @apple_count
  end

  def year_gone_by
    @age += 1
    @height += 1
    if @age > 3 && age <= 10
      @apple_count += 3
    end
    self
  end

  def pick_apples
    @apple_count = 0
  end

end

tree1 = AppleTree.new(3,2)
puts tree1.class
