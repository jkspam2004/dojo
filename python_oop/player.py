
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




d1=Deck()
print "player"

p1 = Player('joe')
print "draw"
p1.draw(3, d1)
p1.draw(1, d1)

d1.shuffle()
print "", p1.hand

p1.discard(1)

print "after discard", p1.hand


