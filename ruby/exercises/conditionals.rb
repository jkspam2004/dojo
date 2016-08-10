#!/usr/bin/ruby

# if, unless
x = 5

puts "x is not 2 if" if x != 2
puts "x is greater than 2" if x > 2

puts "x is not 2" unless x==2

if x < 5
    puts "less than"
elsif x > 5
    puts "greater than"
else
    puts "equal to"
end

# switch case
age = 5

case age
when 0..2
    puts "baby"
when 3..6
    puts "little child"
when 7..12
    puts "child"
when 13..18
    puts "youth"
else
    puts "adult"
end

if ""
    puts "i am positive"
end
if 0
    puts "i am positive"
end

unless nil
    puts "i am negative"
end
unless false
    puts "i am negative"
end

puts "hello" if nil
puts "hello2" if []
