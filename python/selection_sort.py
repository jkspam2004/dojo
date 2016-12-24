# implement selection sort
# 1. walk through the array linearly
# 2. find the minimum value
# 3. swap it to the beginning of unsorted sublist

from random import randint
list = [] 
print list

def get_list():
    for num in range(5):
        print randint(0,10001)
        list.append(randint(0,10001)) 

    return list

def selection_sort(arr):
    for k in range(len(arr)):
        min_idx = k
        for i in range(k, len(arr)):
            if arr[i] < arr[min_idx]:
                min_idx = i
        swap(arr, min_idx, k)

    return arr

def swap(arr, first, second):
    temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
    return arr


list = get_list()
print selection_sort(list)


