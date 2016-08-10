# implement a doubly linked list
# 1. add a new node to the end of the list
# 2. delete an existing node
# 3. insert a node in between existing nodes(before and after node of given value)

import inspect

class DLL (object):
    def __init__(self):
        self.head = None
        self.tail = None
        self.nodes = {}

    # for debugging: return filename, calling line, and function
    def trace(self):
        return __file__, inspect.stack()[1][2], inspect.stack()[1][3]

    # traverse the list and print the values
    def print_list(self):
        print "printing list values", self.trace()
        node = self.head
        while (node):
            print node.value, self.trace()
            node = node.next

    # insert a new node before a specified node
    def prepend(self, node, value):
        print "prepend", value, self.trace()
        new_node = Node(value)
        self.nodes[value] = new_node
        new_node.prev = node.prev
        new_node.next = node
        if (node.prev is None):
            self.head = new_node
        else:
            node.prev.next = new_node
        node.prev = new_node 
        return self

    # insert a new node to the beginning of the list
    def insert_beginning(self, value):
        print "insert_beginning", value, self.trace()
        if (self.head is None): # empty list
            new_node = Node(value)
            self.nodes[value] = new_node
            self.head = new_node
            self.tail = new_node
        else: # non-empty list
            self.prepend(self.head, value)
        return self

    # insert a new node at the end of the list
    def insert_end(self, value):
        print "insert_end", value, self.trace()
        if (self.tail is None):
            self.insert_beginning(value)
        else:
            self.append(self.tail, value)
        return self

    # insert a new node after a specified node
    def append(self, node, value):
        print "append", value, self.trace()
        new_node = Node(value)
        self.nodes[value] = new_node
        new_node.prev = node
        new_node.next = node.next
        if (node.next is None):
            self.tail = new_node
        else:
            node.next.prev = new_node
        node.next = new_node
        return self

    # traverse the list walking forward to then next node, 
    # starting from the head
    def walk_forward(self):
        print "walk_forward", self.trace()
        node = self.head
        while (node):
            print node.value, self.trace()
            node = node.next

    # traverse the list walking backward to the previous node,
    # starting from the tail
    def walk_backward(self):
        print "walk_backward", self.trace()
        node = self.tail
        while (node):
            print node.value, self.trace()
            node = node.prev

    # delete a node with specified value
    def remove(self, value):
        print "remove", value, self.trace()
        node = self.head
        while (node):
            if (node.value == value): # found the matching node
                print "found value to remove", self.trace()

                if (node.prev is None): # node must be first
                    print "removing first node", self.trace()
                    self.head = node.next
                else:
                    node.prev.next = node.next

                if (node.next is None): # node must be last
                    print "removing last node", self.trace()
                    self.tail = node.prev
                else:
                    node.next.prev = node.prev

                return self
            else: # continue to the next node if value not found
                node = node.next 
        return self

    def remove2(self, node):
        print "remove", node.value, self.trace()
        if (node.prev is None): # node must be first
            print "removing first node", self.trace()
            self.head = node.next
        else:
            node.prev.next = node.next

        if (node.next is None): # node must be last
            print "removing last node", self.trace()
            self.tail = node.prev
        else:
            node.next.prev = node.prev

        return self

class Node(object):
    def __init__(self, value):
        self.prev = None
        self.next = None
        self.value = value

    def print_value(self):
        print self.value, self.trace()
        return self


list = DLL()
# add nodes to the end of the list
list.insert_end(3).insert_end(4).insert_end(5).insert_end(6)
# add a new node to the beginning of the list
list.insert_beginning(2)
list.walk_backward()
# remove a node
list.remove2(list.nodes[5]).print_list()
list.append(list.nodes[5], 6).print_list()
list.prepend(list.nodes[2], 1).print_list()

'''
a = Node(4)
b = Node(5)

a.next = b
b.prev = a

list.head = a
list.tail = b
'''
