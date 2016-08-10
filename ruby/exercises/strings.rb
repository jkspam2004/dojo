#!/usr/bin/ruby

# puts method

=begin
    multiline comment
=end


puts "hello"
puts "coding"
puts "dojo"

print "Hello" # no newline
puts "Coding" 

BEGIN {
    puts "this is in BEGIN and will print first"
}

END {
    puts "this is in the END block"
}

x = 5
y = 6
z = x + y
puts z

x = 10; y = 15; z = x + y; puts z

first_name = "Donald"
last_name = "Duck"

# this will print newline for the 3 items below
puts "Your name is ", first_name, last_name

# this will print newline for the 3 items below
puts "Your name in one line " + first_name + last_name

puts "My first name is #{first_name} and last name is #{last_name}"

puts "first name is %s and last name is %s" % [first_name, last_name]

z = 50
puts "value is %d" % [z]
puts "value is %d" % z

a = 5
b = 'y'
puts a,b
#puts a + b # error, cannot add string and num

c = 3
puts a,c
puts a + c

# length, class, upcase, downcase
x = "CodingDojo"
puts "length of %s is " %x + x.length.to_s
puts "class: " + x.class.to_s
puts "upcase: " + x.upcase
puts "downcase: " + x.downcase
puts "index 2: " + x[2]

# include
puts x.include?('dojo') # does x include dojo? *case sensitive
puts "x has the word 'Dojo'" if x.include? 'Dojo'

# split
names = "james, charles, alex, john" # string
puts names.split(',') # array
puts names.split(',').to_s

# string is empty
y = ""
puts "y is empty" if y.empty?

# string ancestors
puts String.ancestors


# capitalize first letter, rest lowercase. add ! to make the change permanent
name = "felix"
puts name.capitalize
puts name
puts name.capitalize!
puts name

# downcase, empty?, split, length, split

puts "Ruby!" * 2

puts "Chunky" << "Bacon"

puts "Chunky"[2..3]

puts "ruBy".capitalize

puts "".empty?

puts "team".include?("i")

puts "matz".length

# call to_s to get a string that describes the object
# call to_str to verify that an object really acts like a string
print "convert to string with to_s: ", 1.to_s, "\n"


# .class to determine type of object
