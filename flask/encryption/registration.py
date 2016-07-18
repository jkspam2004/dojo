import hashlib
import os, binascii # include this at the top of your file

import md5 # do this at the top of your file where you import modules
@app.route('/users/create', methods=['POST'])
def create_user():
     username = request.form['username']
     email = request.form['email']
     password = request.form['password']
     salt =  binascii.b2a_hex(os.urandom(15))
     encrypted_pw = hashlib.md5(password + salt).hexdigest()
     insert_query = "INSERT INTO users (username, email, password, salt, created_at, updated_at) \
     				VALUES (:username, :email, :password, :salt,  NOW(), NOW())"
     query_data = { 'username': username, 'email': email, 'password': encrypted_pw, 'salt': salt }
     mysql.query_db(insert_query, query_data)