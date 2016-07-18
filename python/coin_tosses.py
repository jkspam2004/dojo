'''
Create a program that simulates tossing a coin 5,000 times. 
Your program should display how many times the head/tail appears.

random.random() returns floating point number in the range(0.0,1.0)
use round() to round up or down to integer

random.randint(a, b) returns random number between a and b  
'''

import random

def coin_toss():
	head_cnt = 0
	tail_cnt = 0
	for i in range(5):
		#toss = random.randint(0,1)
		toss = random.random()
		toss = round(toss)
		if toss == 1:
			head_cnt += 1
			coin = 'head'
		else:
			tail_cnt += 1
			coin = 'tail'

		print "Attempt #" +str(i+1) + ": Throwing a coin... It's a " + coin + "! ... Got " + str(head_cnt) + " head(s) so far and " + str(tail_cnt) +  " tail(s) so far"

	print "Ending the program, thank you!"

coin_toss()
