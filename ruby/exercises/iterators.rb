#!/usr/bin/ruby

# .any? {|obj| block} -> true or false
puts ["ant", "bear", "cat"].any? {|word| word.length >= 3}
# => true

#.each -> calls block once for each element in self, passing that element as a parameter.
["ant", "bear", "cat"].each {|word| print word, "--"}
print "\n"
# => ant--bear--cat--

# .collect {|obj| block} -> array; returns a new array with the results of running block once for every element in enum
puts (1..4).collect {|i| i*i}
# => [1, 4, 9, 16]
puts (1..4).collect { "cat" }
# => ["cat", "cat", "cat", "cat"]

# .map {|obj| block} -> enumerator; returns a new array with the results of running block once for every element in enum. it's exactly like .collect

#.detect/.find -> enumerator; returns the first for which block is true.
puts (1..10).detect { |i| i %5 == 0 and i % 7 == 0 }
# => nil
puts (1..100).detect { |i| i %5 == 0 and i % 7 == 0 }
# => 35

# .find_all {|obj| block} or .select {|obj| block} ; returns an array containing all elements of enum for which block is true 
puts (1..10).find_all { |i| i % 3 == 0 }
# => [3, 6, 9]

# .reject {|obj| block} -> returns an array of all elements that evaluates to false
puts (1..10).reject { |i| i % 3 == 0 }
# => 1 2 4 5 7 8 10

#.upto(limit) -> iterates block up to the int number
puts 5.upto(10) { |i| print i, " " }
# => 5 6 7 8 9 10


hash = {
  "id" => 1,
  "ssid" => "att",
  "pass" => 123456
}

puts "hash: ", hash
# .has_key?(key) -> true or false
puts "has_key?('id'): #{hash.has_key?('id')}"

# .has_value?(value) -> true or false
puts "has_value?(1000): #{hash.has_value?(1000)}"

# .key(value) -> returns the key of an occurrence of a given value. If the value is not found, returns nil
puts "key with value att: #{hash.key("att")}"


# .keys -> returns a new array populated with the keys from the hash
arr_keys = hash.keys()
puts "array of keys from hash: #{arr_keys}"

