# implement a doubly linked list
# 1. add a new node to the end of the list
# 2. delete an existing node
# 3. insert a node in between existing nodes(before and after node of given value)

import inspect

class DoublyLinkedList (object):
    def __init__(self):
        self.head = None
        self.tail = None

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
    def prepend(self, node, new_node):
        print "prepend", new_node.value, self.trace()
        new_node.prev = node.prev
        new_node.next = node
        if (node.prev is None):
            self.head = new_node
        else:
            node.prev.next = new_node
        node.prev = new_node 
        return self

    # insert a new node to the beginning of the list
    def insert_beginning(self, new_node):
        print "insert_beginning", new_node.value, self.trace()
        if (self.head is None): # empty list
            self.head = new_node
            self.tail = new_node
        else: # non-empty list
            self.prepend(self.head, new_node)
        return self

    # insert a new node at the end of the list
    def insert_end(self, new_node):
        print "insert_end", new_node.value, self.trace()
        if (self.tail is None):
            self.insert_beginning(new_node)
        else:
            self.append(self.tail, new_node)
        return self

    # insert a new node after a specified node
    def append(self, node, new_node):
        print "append", new_node.value, self.trace()
        new_node.prev = node
        new_node.next = node.next
        if (node.next is None):
            self.tail = new_node
        else:
            node.next.prev = new_node
        node.next = new_node
        return self

    # traverse the list walking forward to the next node, 
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
    def remove(self, node):
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


node0 = Node(0)
node1 = Node(1)
node2 = Node(2) 
node3 = Node(3) 
node4 = Node(4) 
node5 = Node(5) 
mylist = DoublyLinkedList()

# add nodes to the end of the list
mylist.insert_end(node2).insert_end(node3).insert_end(node4)
# add a new node to the beginning of the list
mylist.insert_beginning(node1)
mylist.walk_backward()
# remove a node
mylist.remove(node1).print_list()
# append node 5 after node 4
mylist.append(node4, node5).print_list()
# prepend node0 before node 1
mylist.prepend(node1, node0).print_list()


