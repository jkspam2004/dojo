from system.core.model import *
import re

class Note(Model):
    def __init__(self):
        super(Note, self).__init__()

    def get_notes(self):
        query = "SELECT * FROM notes"
        return self.db.query_db(query)
    
    def delete(self, id):
        query = "DELETE FROM notes WHERE id = :id"
        return self.db.query_db(query, { 'id' : id })

    def update(self, id, description):
        query = "UPDATE notes SET description = :description, updated_at = NOW()\
            WHERE id = :id"
        return self.db.query_db(query, { 'id' : id, 'description' : description })

    # insert a row into notes table. return a row for the newest note
    def insert(self, data):
        query = "INSERT INTO notes (title, created_at, updated_at)\
            VALUES (:title, NOW(), NOW())"
        row_id = self.db.query_db(query, data)
        return self.select_by_id(row_id)

    def select_by_id(self, id):
        query = "SELECT * FROM notes WHERE id = :id"
        return self.db.query_db(query, { 'id' : id })

        


