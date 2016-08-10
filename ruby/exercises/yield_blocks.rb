#!/usr/bin/ruby

def test 
  puts "You are in the method" 
  yield 
  puts "You are again back to the method" 
  yield 
end 
test {puts "You are in the block"}

=begin output
You are in the method 
You are in the block 
You are again back to the method 
You are in the block
You also can pass parameters with the yield statement. Here is an example:
=end

print "\n"

def test 
  yield 5 
  puts "You are in the method test" 
  yield 100 
end 
test {|i| puts "You are in the block #{i}"}

=begin
You are in the block 5 
You are in the method test
You are in the block 100 
=end

print "\n"

def square(num)
  puts "num is #{num}"
  puts "yield(num) has a value of #{yield(num)}"
end

square(5) do |i|
  i*i
end

print "\n"

# print_list without yield
def print_list(array, first = 1)
  counter = first
  array.each do |item|
    puts "#{counter}. #{item}"
    counter = counter.next
  end
end

print_list(["Ruby", "Python", "C"])
print "\n"
print_list(["Ruby", "Python", "C"], 99)
print "\n"
print_list(["Ruby", "Python", "C"], "X")
print "\n"

# print_list with yield
def print_list_yield(array, first = 1)
  counter = first
  array.each do |item|
    puts "#{yield counter} #{item}"
    counter = counter.next
  end
end

# counter is passed to yield
print_list_yield( [1,2,3], 23 ) {|n| "<#{n}>"}
print "\n"
print_list_yield( ["alpha","beta","gamma"], 5 ) do |n|
  "[#{100*n}]:"
end 

print "\n"

# multi-line block. between do and end
[1, 2, 3].each do |n| 
    puts "Number #{n}" 
end
print "\n"

# inline block. between { and }
[1, 2, 3].each {|n| puts "Number #{n}"}
print "\n"


def my_function
  yield("Bill", 25)
end

my_function do |name, age|
  puts "#{name} is #{age} years old"
end


