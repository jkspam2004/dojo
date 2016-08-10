#!/usr/bin/ruby

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

# .key(value) -> returns the key of an occurrence of a given value. If the value is     not found, returns nil
puts "key with value att: #{hash.key("att")}"


# .keys -> returns a new array populated with the keys from the hash
arr_keys = hash.keys()
puts "array of keys from hash: #{arr_keys}"

h = {
  'first_name' => "Coding", 
  'last_name' => "Dojo"
}
puts h

# .delete(key) -> deletes and returns a value associated with the key
puts h.delete('first_name')

# .empty? - returns true if hash contains no key-value pairs
puts h.empty?

a = {:first_name => "Michael", :last_name => "Choi"}
puts a[:first_name]



