'''
	Bubble Sort
	Implement the bubble sort algorithm
'''
import random
from datetime import datetime

# Approach: Iterate through the loop at most array.length - 1 times (number of at most comparisons)
# Compare the current element to the element of adjacent right neighbor
def bubble_sort (arr):
	count = 0
	for i in range(1, len(arr)):
		for j in range(0, len(arr)-1):
			if (arr[j] > arr[j+1]):
				temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
	return arr	

# generate a list of 100 random numbers from 0 - 1000
list = []
for i in range(100):
	list.append(random.randint(0,1000))
print list

start = datetime.now()
print(bubble_sort(list))
end = datetime.now()

# benchmark time it took to do bubble sort
delta = end - start
print delta.microseconds

# print(bubble_sort([6,5,3,1,8,7,2,4]))
# print(bubble_sort([20,19,18,17,16,15,14,13,12,11,10,9,8,7]))
# print(bubble_sort([98,233,45,3,234,74,0,35,84,2,3]))
# print(bubble_sort([9,8,7,6,5,4,3,2,1]))
