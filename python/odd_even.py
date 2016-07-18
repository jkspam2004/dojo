'''
Create a function that counts from 1 to 2000. As it loops through each number, 
have your program generate the number and specify whether it's an odd or even number.
'''

def print_odd_even ():
	for i in range (1, 2001):
		if i % 2 == 0:
			print "Number is " + str(i) + ". This is an even number."
		else:
			print "Number is " + str(i) + ". This is an odd number."


print_odd_even()