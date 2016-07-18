'''
OOP Practice - Bike

Create a new class called  Bike with the following properties/attributes:

price
max_speed
miles
Create 3 instances of the Bike class.

Use the __init__() function to specify the price and max_speed of each instance (e.g. bike1 = Bike(200, "25mph"); In the __init__() also write the code so that the initial miles is set to be 0 whenever a new instance is created.

Add the following functions to this class:

displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...
Have the first instance ride three times, reverse once and have it displayInfo(). 
Have the second instance ride twice, reverse twice and have it displayInfo(). 
Have the third instance reverse three times and displayInfo().

What would you do to prevent the instance from having negative miles?
'''

class Bike(object):
	def __init__(self, instance='first', price=0, max_speed=0, miles=0):
		self.instance = instance
		self.price = price
		self.max_speed = max_speed
		self.miles = miles
		self.fix_negative_miles()
	def displayInfo(self):
		return self.instance + " instance - " + "price: " + str(self.price) + ", max_speed: " + str(self.max_speed) + ", miles: " + str(self.miles)
	def ride(self):
		print "Riding"
		self.miles += 10
	def reverse(self):
		print "Reversing"
		self.miles -= 5
		self.fix_negative_miles()
	def fix_negative_miles(self):
		if self.miles < 0:
			self.miles = 0

bike1 = Bike('first', 100, 5, 0)
bike2 = Bike('second', 200, 15, 0)
bike3 = Bike('third', 300, 20, 0)

print bike1.displayInfo()
for i in range(3):
	bike1.ride()
bike1.reverse()
print bike1.displayInfo()

print bike2.displayInfo()
for i in range(2):
	bike2.ride()
for i in range(2):
	bike2.reverse()
print bike2.displayInfo()

print bike3.displayInfo()
for i in range(3):
	bike3.reverse()
print bike3.displayInfo()
