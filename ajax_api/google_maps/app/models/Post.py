from system.core.model import *
import re

class Post(Model):
    def __init__(self):
        super(Post, self).__init__()

    # get 3 recent posts
    def most_recent(self):
        query = "SELECT * FROM posts ORDER BY id DESC LIMIT 3"
        return self.db.query_db(query)
    
    # get rest of posts
    def less_recent(self):
        query = "SELECT * FROM posts ORDER BY id DESC LIMIT 3,9"
        return self.db.query_db(query)

    # add a post
    def create(self, new_post):
        query = "INSERT INTO posts(description, created_at, updated_at) VALUES (:description, NOW(), NOW())"
        data = { 'description' : new_post['description'] }
        return self.db.query_db(query, data) 
