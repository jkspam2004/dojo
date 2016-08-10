'''
PART I
Create a Python class called MathDojo that has the methods add and subtract. Have these 2 functions take at least 1 parameter. 

Then create a new instance called md. It should be able to do the following task:

MathDojo().add(2).add(2, 5).subtract(3, 2).result
which should perform 0+2+(2+5)-(3+2) and return 4.
'''


class MathDojo(object):
    def __init__(self):
        self.answer = 0

    def result(self):
        print self.answer
        return self

    def add(self, num, *args):
        self.answer += num 
        for int in args:
           self.answer += int 

        return self

    def subtract(self, num, *args):
        for int in args:
           num += int 
        self.answer -= num

        return self

md = MathDojo()
md.add(2).add(2,5).subtract(3,2).result()

'''
PART II
Modify MathDojo to take at least one integer(s) and/or list(s) as a parameter with any number of values passed into the list. It should now be able to perform the following tasks:

MathDojo().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result
 should do 0+1+3+4+(3+5+7+8)+(2+4.3+1.25)-2-(2+3)-(1.1+2.3) and return its result.
'''

class MathDojo(object):
    def __init__(self):
        self.answer = 0

    def result(self):
        print self.answer
        return self

    def add(self, num, *args):
        self.answer += num 
        for int in args:
           self.answer += int 

        return self

    def subtract(self, num, *args):
        for int in args:
           num += int 
        self.answer -= num

        return self

md = MathDojo()
md.add(2).add(2,5).subtract(3,2).result()




'''
PART III
Make any needed changes in MathDojo in order to support tuples of values in addition to lists and singletons.  
'''

