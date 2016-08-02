from card import Card


import random

class Deck(object):
	def __init__(self):
		self.cards = []
		self.reset()
		self.removed =[]

	def reset(self):
		suits = ['H', 'D', 'C', 'S']
		values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
		for suit in suits:
			for val in values:
				newcard = Card(suit, val, suit + str(val))
				self.cards.append(newcard)
		self.shuffle()
	def shuffle(self):
		j = 51
		for i in range(0,51):
			num = random.randint(0,j)
			self.cards.append(self.cards.pop(num))
			j -= 1
		self.show_cards()
	def remove(self, times):
		self.removed = []
		for i in range(times):
			self.removed.append(self.cards.pop())
			self.show_cards()
		return self.removed
	def show_cards(self):
		print "length: " + str(len(self.cards))
		for i in range(len(self.cards)):
			print self.cards[i].name,
		print "\n"

d1=Deck()
#print "player"
#
#p1 = Player('joe')
#print "draw"
#p1.draw(3, d1)
#p1.draw(1, d1)
#
#d1.shuffle()
#print "", p1.hand
#
#p1.discard(1)
#
#print "after discard", p1.hand
