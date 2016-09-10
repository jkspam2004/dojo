#!/usr/bin/ruby
# array shuffling to get no repeat elements (sort of).  pop off shuffled list.  reshuffle when we
# have exhausted the list

list = %w{a b c d e f g h i}

puts list.length
puts list.to_s

shuffled = list.shuffle
puts shuffled.to_s

(0...shuffled.length*3).each do |num|
  if shuffled.empty?
    puts "empty, reloading"
    shuffled = list.shuffle
    puts shuffled.to_s
  end
  puts shuffled.pop
end
