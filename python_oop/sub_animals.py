'''
Create a class called Animal with the following attributes: name, and health. 
Give the animal following three methods: walk, run, and displayHealth. 
Give a new animal a health of 100 when it gets created. 
When a walk() method is invoked, have the health decrease by 1. 
When a run() method is involved, have the health decrease by 5. 
When a displayHealth() method is invoked, display on screen the name of the Animal and the health.

Create an instance of the animal called 'animal' and have this animal walk
three times, run twice, and have it display its health.

Now, create another class called Dog that inherits everything that the Animal does and have, but 
1) have the default health be 150 and 
2) add a new method called pet, which when invoked, increase the health by 5. 
Have the Dog walk() three times, run() twice, pet() once, and have it displayHealth().

Now, create another class called Dragon that also inherits everything from Animal, but 
1) have the default health be 170 and 
2) add a new method called fly, which when invoked, decreased the health by 10. 
Have the Dragon walk() three times, run() twice, fly() twice, and have it displayHealth(). 
When the Dragon's displayHealth function is called, have it say 'this is a dragon!' 
before it displays the default information (by calling the parent's displayHealth function).

Now for the first instance of the animal (instance called 'animal'), try calling fly() or 
pet() and make sure this doesn't work.  (-:
'''
from animal import Animal
class Dog(Animal):
	def __init__(self, name):
		super(Dog, self).__init__(name)
		self.name = name
		self.health = 150
	def pet(self):
		self.health += 5
		return self

class Dragon(Animal):
	def __init__(self, name):
		super(Dragon, self).__init__(name)
		self.health = 170
	def fly(self):
		self.health -= 10
		return self
	def displayHealth(self):
		super(Dragon, self).displayHealth()
		print "this is a dragon!\n"

dog = Dog('dog')
print dog.health

dog.walk().walk().walk().run().run().pet().displayHealth()

dragon = Dragon('dragon')
dragon.walk().walk().walk().run().run().fly().fly().displayHealth()

animal = Animal('animal')
animal.walk().walk().walk().run().run().displayHealth()

#animal.fly() # Animal object has no atrribute fly
#animal.pet() # Animal object has no attribute pet


