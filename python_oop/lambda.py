# lambdas are expressions, not statements


# lambda passed to another function as a callback
def invoker(callback):
    print callback(2)

invoker(lambda x: 2 * x)
invoker(lambda y: 5 + y)


# lambda returned by another function
def incrementor(num):
    start = num
    return lambda x: num + x

print incrementor(3)(3)

