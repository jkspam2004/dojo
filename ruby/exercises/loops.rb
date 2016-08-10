#!/usr/bin/ruby

### while loop ###
i = 0
num = 5
while i < num do
   puts "Inside the loop i = #{i}"
   i +=1
end

# less common way of doing the same above, like a do..while
i = 0
num = 5
begin
   puts "Inside the loop i = #{i}"
   i +=1
end while i< num

### for loop ###
# 1. break - terminates the most internal loop
# 2. next - jumps to the next iteration
# 3. redo - restarts the iteration of the most internal loop
for i in 0..5 
  puts "Value of local variable is #{i}" 
end 


