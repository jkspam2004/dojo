# Create a program that prints the average of the values in the list
list = [1, 2, 5, 10, 255, 3]

sum = 0
for item in list:
    sum += item

print sum/len(list)
