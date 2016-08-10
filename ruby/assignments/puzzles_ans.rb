# Create an array with the following values: 3,5,1,2,7,9,8,13,25,32. 
numbers_array = [3,5,1,2,7,9,8,13,25,32]

# Return the sum of all numbers in the array.
puts numbers_array.inject(:+)

# Also have it return an array that only include numbers that are greater than 10.
puts numbers_array.find_all { |number| number > 10 }
puts numbers_array.reject { |number| number < 10 }

# Create an array with the following values: John, KB, Oliver, Cory, Matthew, Christopher. 
persons_array = ["John", "KB", "Oliver", "Cory", "Matthew"]

# Shuffle the array and print the name of each person. 
persons_array.shuffle.each { |person| puts person}

# Have the program also return an array with names that are longer than 5 characters.
persons_array.each { |person| puts person if person.length > 5}

# Create an array that contains all 26 letters in the alphabet (this array must have 26 values). 
letters_array = Array("a".."z")

# Shuffle the array and display the last letter of the array. 
shuffled_letters = letters_array.shuffle
puts shuffled_letters.last

# Have it also display the first letter of the array.
puts shuffled_letters.first

 # If the first letter in the array is a vowel, have it display a message
puts ["a","e","i","o","u"].include?(shuffled_letters.first) ? shuffled_letters.first+" is a vowel" : shuffled_letters.first+" is not a vowel"

# Generate an array with 10 random numbers between 55-100.
random_array = Array.new
10.times { random_array.push(rand(55..100)) }
print random_array

# line break only
puts  

# have it be sorted (showing the smallest number in the beginning). Display all the numbers in the arrays. 
puts random_array.sort

# Next, display the minimum value in the array as well as the maximum value.
puts random_array.max
puts random_array.min

# Create a random string that is 5 characters long (hint: (65+rand(26)).chr returns a random character; use a map function and a range to do this).
print string_array = (1..5).map{ rand(65..90).chr }.join

# line break only
puts 

# shorter way
5.times { print rand(65..90).chr }

# Generate an array with 10 random strings that are each 5 characters long
string_array = Array.new
10.times { string_array.push((1..5).map{ rand(65..90).chr }.join) } 

# line break only
puts 
print string_array
