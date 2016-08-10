#!/usr/bin/ruby

x = (1..5)

puts "Class Name: #{x.class}"

# .include?
puts "It does include 3!" if x.include? 3

# .last
puts "The last number of this range is " + x.last.to_s
# .max
puts "The maximum number of this range is " + x.max.to_s
# .min
puts "The minimum number of this range is " + x.min.to_s

y = ('a'..'z')
puts "y: ", y
puts "y printed as an array: #{y.to_a}"

# .shuffle()
print "shuffled: ", y.to_a.shuffle.to_s, "\n"


# .member? and .include? are similar

# .member?(val) => true or false
puts ("a".."z").member?("A")

# .include?(val) => true or false
puts ("a".."z").include?("a")

puts y.max
puts y.min

