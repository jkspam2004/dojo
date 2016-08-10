# Polymorphic behavior allows you to specify common methods in an "abstract" level and implement 
# them in particular instances. It is the process of using an operator or function in different 
# ways for different data input.

# We'll use the Person class to demonstrate polymorphism
# in which multiple classes inherit from the same class but behave in different ways
class Person(object):
  def pay_bill(self):
      raise NotImplementedError

# Millionaire inherits from Person
class Millionaire(Person):
  def pay_bill(self):
      print "Here you go! Keep the change!"

# Grad Student also inherits from the Person class
class GradStudent(Person):
  def pay_bill(self):
      print "Can I owe you ten bucks or do the dishes?"


sally = Person()
#sally.pay_bill()

gates = Millionaire()
gates.pay_bill()

sam = GradStudent()
sam.pay_bill()

# Based on this example, a Millionaire and a Grad Student are both Persons. However, when it comes 
# to paying a bill, how they act is quite different. This pattern is useful when you know that each 
# subclass of a parent class must define a specific behavior in a method, and you don't want to 
# define a default behavior in the parent class (hence the pure virtual implementation in the parent). 
