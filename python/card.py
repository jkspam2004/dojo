

class Card(object):
	def __init__(self, suit, value, name):
		self.suit = suit
		self.value = value
		self.name = name
		self.print_card()
	def print_card(self):
		pass
		#print vars(self)