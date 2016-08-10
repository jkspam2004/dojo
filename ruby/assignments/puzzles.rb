#!/usr/bin/ruby

# Create an array with the following values: 3,5,1,2,7,9,8,13,25,32. 
# Print the sum of all numbers in the array. Also have the function return 
# an array that only include numbers that are greater than 10 
# (E.g. when you pass the array above, it should return an array with 
# the values of 13,25,32 - hint: use reject or find_all method)

def print_sum (arr)
  sum = 0
  arr.each { |num| sum += num }
  puts "sum is #{sum}"
  new_arr = arr.find_all { |num| num > 10 }
end

arr = [3,5,1,2,7,9,8,13,25,32]
puts "numbers greater than 10: #{print_sum(arr)}"

# return the sum all of all numbers in array
puts "sum with inject: #{arr.inject(:+)}"

# Create an array with the following values: John, KB, Oliver, Cory, Matthew, 
# Christopher. Shuffle the array and print the name of each person. Have the 
# program also return an array with names that are longer than 5 characters.
def shuffle_and_5chars(arr)
  puts "shuffled names: #{arr.shuffle()}"
  arr.find_all { |name| name.length > 5 }
end

arr = %w{ John KB Oliver Cory Matthew Christopher }
puts "names longer than 5 characters: #{shuffle_and_5chars(arr)}"

# Create an array that contains all 26 letters in the alphabet (this array 
# must have 26 values). Shuffle the array and display the last letter of 
# the array. Have it also display the first letter of the array. If the first 
# letter in the array is a vowel, have it display a message
def shuffle_alphabets
  arr = ('a'..'z')
  puts "alphabet from a to z: #{arr.to_a.to_s}"
  shuffled = arr.to_a.shuffle
  puts "shuffled alphabet: #{shuffled.to_s}"
  puts "last letter of shuffled alphabet: #{shuffled[-1].to_s}"
  puts "first letter of shuffled alphabet: #{shuffled[0].to_s}"
  puts "first letter is a vowel" if ['a', 'e', 'i', 'o', 'u'].member?(shuffled[0])
end
shuffle_alphabets()

# Generate an array with 10 random numbers between 55-100.
def generate_10_rand
  newarr = []
  10.times { newarr << rand(55..100) }
  puts newarr.to_s
  # .sample() : chooses a random element or n random elements from the array.
  # sample does not repeat itself unless array already contains duplicates
  puts (55..100).to_a.sample(10).to_s
end
generate_10_rand()

# Generate an array with 10 random numbers between 55-100 and have it be 
# sorted (showing the smallest number in the beginning). Display all the 
# numbers in the arrays. Next, display the minimum value in the array as 
# well as the maximum value.
def generate_10_rand_and_sort
  newarr = []
  10.times { newarr << rand(55..100) }
  newarr = newarr.sort
  puts "sorted random 10 numbers: #{newarr.to_s}"
  puts "minimum of sorted 10 numbers: #{newarr.min}"
  puts "maximum of sorted 10 numbers: #{newarr.max}"
end
generate_10_rand_and_sort()

# Create a random string that is 5 characters long (hint: (65+rand(26)).chr 
# returns a random character)
def generate_5char_string
  new_str = ""
  5.times{ new_str << (65+rand(26)).chr }
  puts "5 character string: #{new_str}"
end
generate_5char_string()

# Generate an array with 10 random strings that are each 5 characters long

#10.times { new_arr <<  5.times{ new_str << (65+rand(26)).chr }  }
#puts new_arr
def generate_10_rand_strings
  new_arr = []
  10.times do
    new_str = ""
    5.times{ new_str << (65+rand(26)).chr }
    new_arr << new_str
    puts new_str
  end
  puts "10 random strings of 5 characters: #{new_arr.to_s}"
end
generate_10_rand_strings()


