'''
Create a function called 'multiply' that reads each value in the list (e.g. a = [2, 4, 10, 16]) and 
returns a list where each value has been multiplied by 5.

The function should multiply each value in the list by the second argument. 
'''

def multiply(list, num):
	newlist = []
	for item in list:
		newlist.append(item*num)

	return newlist

list = [1, 2, 3, 4, 5, 6]
multiplier = 5
product = multiply(list, multiplier)

print product