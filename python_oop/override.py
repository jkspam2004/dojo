'''
Sometimes the problem with implicit inheritance is that you want the child to behave differently than 
the parent. In these cases you want to override the function, effectively replacing the functionality. 
To do this, just define a function with the same name, in the Child.
'''

class Parent(object):
    def talk(self):
        print "invoking PARENT talk() method!"

class Child(Parent):
    def talk(self):
        print "invoking CHILD  talk() method"

dad = Parent()
son = Child()
dad.talk()
son.talk() #notice this overrides the Parent method!
