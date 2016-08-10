"""
Composition
Most uses of inheritance can be simplified or replaced with composition. Inheritance is useful, but you can do exactly the same things by simply using classes and modules rather than rely on implicit inheritance. Of the 3 ways to exploit inheritance, 2 of the 3 involve writing new code to replace or change existing functionality. You can instead simply call functions in a module. 

Here's an example:
"""

class Other(object):
    def override(self):
        print "OTHER override()"
    def implicit(self):
        print "OTHER implicit()"
    def altered(self):
        print "OTHER altered()"

# notice how the Child class does not inherit from the Other class
# however there may be some cases where we want to use some attributes/methods
# from the Other class
class Child(object):
    def __init__(self):
 # so we create an instance of the Other class as an attribute for the Child class
        self.other = Other()
    def implicit(self):
  # we can then use some of the behavior of Other in Child
        self.other.implicit()
    def override(self):
        print "CHILD override()"
    def altered(self):
        print "CHILD, BEFORE OTHER altered()"
  # again we use some of the behavior of Other in Child
        self.other.altered()
        print "CHILD, AFTER OTHER altered()"
son = Child()
son.implicit()
son.override()
son.altered()

"""
In this code, I'm not using Parent as the name for the class. I named the class Other since this is not a parent-child is-a relationship. This is a has-a relationship, where Child has-a Other that it uses to get its work done. When I run this I get the following output:

OTHER implicit()
CHILD override()
CHILD, BEFORE OTHER altered()
OTHER altered()
CHILD, AFTER OTHER altered()

You can see that most of the code in Child and Other are the same to accomplish the same thing. The only difference is that I had to define a Child.implicit function to do that one action.
"""

