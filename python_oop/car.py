'''
Create a class called  Car. In the__init__(), allow the user to specify the following attributes: price, speed, fuel, mileage. If the price is greater than 10,000, set the tax to be 15%. Otherwise, set the tax to be 12%. 

Create five different instances of the class Car. In the class have a method called display_all() that returns all the information about the car as a string. In your __init__(), call this display_all() method to display information about the car once the attributes have been defined.

A sample output would be like this:

Price: 2000
Speed: 35mph
Fuel: Full
Mileage: 15mpg
Tax: 0.12
'''

class Car(object):
	def __init__(self, price, speed, fuel, mileage):
		# setters
		self.price = price
		self.speed = speed
		self.fuel = fuel
		self.mileage = mileage

		# call methods
		self.get_tax()
		self.info = self.display_all()
		self.print_info()
	def display_all(self):
		return "Price: " + str(self.price) + ", Speed: " + str(self.speed) + ", Fuel: " + str(self.fuel) + ", Tax: " + str(self.tax)
	def get_tax(self):
		if self.price > 10000:
			self.tax = 0.15
		else: 
			self.tax = 0.12
	def print_info(self):
		arr = self.info.split(', ')
		for item in arr:
			print item
		print '\n'

car1 = Car(10001, 55, 'Full', 15)
car2 = Car(5000, 5, 'Kind of Full', 200000)
car3 = Car(20000, 80, 'Full', 100)
car4 = Car(9888, 30, 'Empty', 45000)
car5 = Car(100, 10, 'Empty', 300000)

