#!/usr/bin/ruby

# print 1-255
puts (1..255).to_a.to_s
print "\n"
1.upto(255) { |i| print i, " " }
print "\n"

# print odds between 1-255
new_arr = (1..255).find_all { |i| i % 2 == 1 }
puts "something"
puts new_arr.to_s # temporarily makes it a string
puts new_arr # new_arr is still an array
print "\n"
puts "jdafdsfjad;fjkad"

# print sum
sum = 0
#(0..255).each { |n| puts "New number: #{n} Sum: #{sum += n}" }

# iterating through an array
[1,3,5,7,9,13].each {|n| puts "#{n}"}

# find max
def find_max(arr)
  max = arr[0]
  arr.each { |n| max = n if n > max }
  max
end
max = find_max([-3, -5, -7]) 
puts "max: #{max}"

# get average
def get_average(arr)
  sum = 0
  arr.each { |n| sum += n }
  avg = sum/arr.length
end

avg = get_average([2,10,3]) 
puts "average: #{avg}"

# array with odd numbers
Y = []
(1..255).each { |i| Y.push(i) if i.odd? }
puts "odd numbers: #{Y}"

# greater than y
def greater_than_y(arr, y)
  count = 0
  arr.each { |n| count += 1 if n > y }
  count
end
count = greater_than_y([1,3,5,7], 3)
puts "values greater than 3: #{count}"

# square the values
def square(arr)
  arr.collect {|num| num**2}
end
puts square([1,5,10,-2]).to_s

# eliminating negative numbers
def no_negatives(arr)
  new_arr = []
  arr.each {|num| if num < 0 then new_arr.push(0); else new_arr.push(num) end}
  new_arr
end 
puts "remove negatives: #{no_negatives([1,5,10,-2])}"

# max, min, and average
def min_max_avg(arr)
  sum = 0
  min = arr[0]
  max = arr[0]
  arr.each {|num| sum += num; min = num if num < min; max = num if num > max}
  [sum, min, max]
end
values = min_max_avg([1,5,10,-2])
puts values.to_s

# shifting the values in the array
def shift_array(arr)
counter = 0
arr.each { arr[counter] = arr[counter+=1] }
arr[arr.size-1] = 0 # last element is 0
arr
end
puts shift_array([1,5,10,7,-2]).to_s


# number to string
def num_to_string(arr)
  new_arr = [] 
  arr.each { |num| if num < 0 then new_arr.push('Dojo'); else new_arr.push(num) end}
  new_arr
end
puts num_to_string([-1,-3,2]).to_s

