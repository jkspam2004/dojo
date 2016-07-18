'''
Part 1
Create a function called  draw_stars() that takes a list of numbers and prints out  *.

Part 2
Modify the function above. Allow a list containing integers and strings to be passed to the  draw_stars() function. When a string is passed, instead of  displaying *, display the first letter of the string according to the example below. You may use the .lower() string method for this part.

use isinstance() to check the type (string or int)
'''

# Part 1
print "\nPart 1\n"
def draw_stars(list):
	for item in list:
		print item * '*'


list1 = [4, 6, 1, 3, 5, 7, 25]
draw_stars(list1)

# Part 2
print "\nPart 2\n"
def draw_stars2(list):
	for item in list:
		if isinstance(item, str):
			print len(item) * item[0].lower()
		else:
			print item * '*'

list2 = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars2(list2)

