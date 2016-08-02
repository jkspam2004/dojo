from system.core.model import *
import re

class Quote(Model):
    def __init__(self):
        super(Quote, self).__init__()

    # get all quotes
    def all(self):
        query = "SELECT * FROM quotes ORDER BY id DESC"
        return self.db.query_db(query)

    # add a quote
    def create(self, new_quote):
        query = "INSERT INTO quotes(author, quote) VALUES (:author, :quote)"
        data = { 'author' : new_quote['author'], 'quote' : new_quote['quote'] }
        return self.db.query_db(query, data) 
