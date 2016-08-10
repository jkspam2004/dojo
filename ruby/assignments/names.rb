#!/usr/bin/ruby
# given array of names, print something like below

=begin
You got 5 names in the 'names' array
The name is 'Michael Choi'
The name is 'John Supsupin'
The name is 'KB Tonel'
...
=end

a = {:first_name => "Michael", :last_name => "Choi"}
b = {:first_name => "John", :last_name => "Supsupin"}
c = {:first_name => "KB", :last_name => "Tonel"}
d = {:first_name => "Jessie", :last_name => "De Leon"}
e = {:first_name => "Jaybee", :last_name => "Balog"}
names = [a, b, c, d, e]

puts "You got #{names.length} in the 'names' array"
names.each { |x| puts "The name is '#{x[:first_name]} #{x[:last_name]}'" }


