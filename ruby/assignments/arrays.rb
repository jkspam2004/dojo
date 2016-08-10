#!/usr/bin/ruby

digits = Array(0..9)

# array.at(index) : returns the element at index
# negative index starts count from end of array
# returns nil when index out of range
num = digits.at(6)
puts "#{num}"
num = digits.at(10)
puts "#{num}"

# array.fetch(index) : tries to retun element at index 
# array.fetch(index) - out of range throws IndexError exception 
# array.fetch(index, default) - out of range returns default
# array.fetch(index){ index } - out of range returns value of invoking block
num = digits.fetch(7)
puts "fetch: #{num}"
num = digits.fetch(10,0) # out of range, default 0
puts "fetch out of range with default: #{num}"
num = digits.fetch(10){2} # out of range, default 2
puts "fetch out of range with default index in block: #{num}"

# array.delete() : deletes element at index. returns the element
num = digits.delete(3)
puts "deleted: #{num}"
puts "digits after delete: #{digits}"

# array.reverse() : returns reversed array
new_digits = digits.reverse()
puts "reverse: #{new_digits}"

# array.length()
len = digits.length()
puts "length: #{len}"

# array.sort() : returns new sorted array
new_array = new_digits.sort()
puts "sorted: #{new_array}"

# array.slice(index) : returns the element at index, or
# array.slice(range) : returns a subarray specified by range
# array[start, length] : returns a subarray starting at start for length elements
slice1 = digits.slice(2)
puts "slice at index 2: #{slice1}"
slice2 = digits.slice(6..8)
puts "slice range: #{slice2}"
slice3 = digits[4, 5]
puts "slice with start and length: #{slice3}"

# array.shuffle() : returns a new shuffled array
new_array = digits.shuffle()
puts "shuffled array: #{new_array}"

# array.join(sep=) : returns a string by converting each element to string and joining with the separator
new_str = digits.join(":")
puts "new string joined with ':': #{new_str}"
new_str2 = digits.join # joins element with empty string
puts "new string joined with empty string: #{new_str2}"

# array.insert(index, obj) : inserts given values before element at index
# returns new array
new_array = digits.insert(2, 99)
puts "new array with number 99 inserted before item at index 3: #{new_array}"
print "new array with number 100 inserted before item at index -1: ", digits.insert(-1, 100), "\n"

# values_at() : returns new array with values specified in the param
new_array = digits.values_at(1,3,5)
print "new array with values at indices(1,3,5): #{new_array}\n"
print "new array with values at indices(-1, -2, -2 -20): ", digits.values_at(-1, -2, -2, -20), "\n"

# creating arrays
arr1 = ["apples", "bananas", "pears"]
arr2 = [100, 101, 102, 103]
arr3 = %w{ john bill adam }
new_array = arr1 + arr2
puts "concatenating arrays with '+' : #{new_array}"
puts new_array.class
puts new_array.to_s.class
puts new_array.class

# push() : pushes objects to the end of array. returns array itself. can chain
a = ["a", "b", "c"]
a.push("d", "e", "f")
puts "pushed [d, e, f] to [a, b, c]: #{a}"
print "push 4 then 5 to [1, 2, 3]: ", [1, 2, 3].push(4).push(5), "\n"

# pop() : removes the last element from self and returns it
# pop(<n>) : returns array of last n elements
a = ["a", "b", "c", "d"]
puts "array is: #{a}"
puts "popped element is #{a.pop}"
puts "now array a is: #{a}"
puts "popping 2: #{a.pop(2)}"
