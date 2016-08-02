'''
Create a class called Animal with the following attributes: name, and health. 
Give the animal following three methods: walk, run, and displayHealth. 
Give a new animal a health of 100 when it gets created. 
When a walk() method is invoked, have the health decrease by 1. 
When a run() method is involved, have the health decrease by 5. 
When a displayHealth() method is invoked, display on screen the name of the Animal and the health.
'''

class Animal(object):
	def __init__(self, name):
		self.name = name
		self.health = 100
	def walk(self):
		self.health -= 1
		return self
	def run(self):
		self.health += 5
		return self
	def displayHealth(self):
		print "Name: " + self.name + "\nHealth: " + str(self.health) + "\n"
		return self





