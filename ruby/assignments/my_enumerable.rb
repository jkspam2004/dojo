#!/usr/bin/ruby

# implement my_each method
module MyEnumerable
  def my_each
    for i in self
      yield i 
    end
    #puts self.class
  end
end

class Array
  include MyEnumerable
end

[1,2,3,4].my_each { |i| puts i } # prints 1 2 3 4 in the terminal
