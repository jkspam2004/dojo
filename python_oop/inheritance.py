"""
Inheritance is used to indicate that one class will get most or all of its features from a parent class. This happens implicitly whenever you write class Foo(Bar), which says "Make a class Foo that inherits from Bar."

Example combining implicit inheritance, overriding explicitly, and alter before or after
"""

class Parent(object):

    def override(self):
        print "PARENT override()"

    def implicit(self):
        print "PARENT implicit()"

    def altered(self):
        print "PARENT altered()"

class Child(Parent):

    def override(self):
        print "CHILD override()"

    def altered(self):
        print "CHILD, BEFORE PARENT altered()"
        super(Child, self).altered() # get the parent class
        print "CHILD, AFTER PARENT altered()"

dad = Parent()
son = Child()

dad.implicit()
son.implicit()

dad.override()
son.override()

dad.altered()
son.altered()
