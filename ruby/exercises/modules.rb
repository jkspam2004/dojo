#!/usr/bin/ruby

# Modules
# Modules are very similar to Classes. In fact a Module is a superclass of a Class:

puts Class.superclass #=> Module

=begin
We use a module to group together a collection of variables and methods 
(very similar to a class). However, we should use a module if it is meant 
to be included within a class and we should use a class if we are going 
to instantiate something. What does it mean by including a module?
=end

# Enumerable

=begin
Enumerable is just a module that is included in Arrays and Hashes. We can verify this by looking at the ancestors. Ancestors contain the list of Classes and Modules that a class inherits/includes.
=end

print "ancestors for Array: ", Array.ancestors.to_s
puts
print "ancestors for Hash: ", Hash.ancestors.to_s
puts

=begin
Arrays and Hashes both have the Enumerable and the Kernel module included. 
This means that any methods declared in these two methods are available to 
the instances of the Array or Hash class. Arrays and Hashes also inherit from 
the Object class and the BasicObject class. This is what people mean when they 
say: in Ruby everything is an object. If we look at the ancestor chain, it 
always ends with Object and BasicObject.
=end

print "ancestors for Fixnum: ", Fixnum.ancestors.to_s

=begin
The Enumerable module has many methods that make Ruby very fun to work with. 
The Enumerable module is equivalent to the underscore library for JavaScript 
except that it comes pre-baked with Ruby.
=end

# Method Lookup
=begin
When we send a message to an object, it first looks within its own class if that method exists. If not we move up our ancestor chain to see if that message 
exists. We keep going up until we either find the message that we know how to 
respond to or we reach the end of our ancestor chain and say no message (method)
was found.
=end

#.any? {|obj| block} -> true or false
["ant", "bear", "cat"].any? {|word| word.length >= 3}
# => true
  
#.each -> calls block once for each element in self, passing that element as 
# a parameter.
["ant", "bear", "cat"].each {|word| print word, "--"}
# => ant--bear--cat--
  
#.collect {|obj| block} -> array; returns a new array with the results of 
# running block once for every element in enum
(1..4).collect {|i| i*i}
# => [1, 4, 9, 16]

(1..4).collect { "cat" }
# => ["cat", "cat", "cat", "cat"]

# .map {|obj| block} -> enumerator; returns a new array with the results of running block once for every element in enum. it's exactly like .collect
# .detect/.find -> enumerator; returns the first for which block is not false.
(1..10).detect { |i| i %5 == 0 and i % 7 == 0 }
# => nil

(1..100).detect { |i| i %5 == 0 and i % 7 == 0 }
# => 35
# .find_all {|obj| block} or .select {|obj| block} ; returns an array 
# containing all elements of enum for which block is not false
(1..10).find_all { |i| i % 3 == 0 }
# => [3, 6, 9]

# .reject {|obj| block} -> opposite of find_all
(1..10).reject { |i| i % 3 == 0 }
 
# => [1, 2, 4, 5, 7, 8, 10]
# .upto(limit) -> iterates block up to the int number
5.upto(10) { |i| print i, " " }
# => 5 6 7 8 9 10

# .has_key?(key) -> true or false
# .has_value?(value) -> true or false
# .key(value) -> returns the key of an occurrence of a given value. If the 
# value is not found, returns nil
# .keys -> returns a new array populated with the keys from the hash
