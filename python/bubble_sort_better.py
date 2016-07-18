from datetime import datetime
import random

def bubbleSort(alist):
	count = 0
	for passnum in range(len(alist)-1,0,-1):
		for i in range(passnum):
			count +=1
			if alist[i]>alist[i+1]:
				temp = alist[i]
				alist[i] = alist[i+1]
				alist[i+1] = temp
	print(count)

alist = []
for i in range(100):
	alist.append(random.randint(0,1000))
print alist

start = datetime.now()
#alist = [54,26,93,17,77,31,44,55,20]
bubbleSort(alist)
print(alist)

end = datetime.now()
delta = end - start
print delta.microseconds

