
from deck import Deck
# from card import Card

import random

class Player(object):
	def __init__(self, name):
		self.name = name
		self.hand = []
		self.status = 'playing'
		self.bet_amt = 0
	def discard(self, index):
		# cards[index] pop from position
		self.hand.pop(index)
	def draw(self, times, deck):
		print "drawing"
		removed = deck.remove(times)
		for i in removed:
			self.hand.append(i.name)
		print "your hand is", self.hand
	# def calculate_total(self):
	# 	pass


# class Deck(object):
# 	def __init__(self):
# 		self.cards = []
# 		self.reset()

# 	def reset(self):
# 		suits = ['H', 'D', 'C', 'S']
# 		values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
# 		for suit in suits:
# 			for val in values:
# 				newcard = Card(suit, val, suit + str(val))
# 				self.cards.append(newcard)
# 		self.shuffle()
# 	def shuffle(self):
# 		# instantiate a variable j and set it to length of current card deck
# 		length = len(self.cards)
# 		j = length
# 		# for loop w/ range 0-50
# 		for i in range(0,length):
# 			# generate random number
# 			num = random.randint(0,j)
# 			# pop, then append append card to array
# 			self.cards.append(self.cards.pop(num))
# 			#decrement j
# 			j -= 1
# 		print "shuffling"
# 		self.show_cards()
# 	def remove(self, times):
# 		removed = []
# 		for i in range(times):
# 			removed.append(self.cards.pop())
# 			self.show_cards()
# 		return removed
# 	def show_cards(self):
# 		print "length: " + str(len(self.cards))
# 		for i in range(len(self.cards)):
# 			print self.cards[i].name,
# 		print "\n"

# class Card(object):
# 	def __init__(self, suit, value, name):
# 		self.suit = suit
# 		self.value = value
# 		self.name = name
# 		self.print_card()
# 	def print_card(self):
# 		pass
# 		#print vars(self)


d1=Deck()
# print "player"

# p1 = Player('joe')
# print "draw"
# p1.draw(3, d1)
# p1.draw(1, d1)

# d1.shuffle()
# print "", p1.hand

# p1.discard(1)

# print "after discard", p1.hand


