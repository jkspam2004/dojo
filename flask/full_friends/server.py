from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

# display all of the friends
@app.route('/')
def index():
	results = DoSelect()
	return render_template('index.html', friends=results)

# display the add friend form
@app.route('/add')
def display_add():
	return render_template('add.html')

# handle the add friend form submit and create friend in db
@app.route('/friends', methods=['POST'])
def create():
	# some validation to be done here
	# if error redirect back to /add
	data = {
		'first_name': request.form['first_name'],
		'last_name': request.form['last_name'],
		'email': request.form['email']
	}
	DoInsert(data)
	return redirect('/')

# display the edit friend page for the selected friend
@app.route('/friends/<id>/edit')
def display_edit(id):
	friend_id = id
	friend_info = DoSelect(friend_id)
	print("friend_id", friend_id)
	return render_template('add.html', friend=friend_info)

# handle the edit friend page for the selected friend
@app.route('/friends/<id>', methods=['POST'])
def update(id):
	# some validation to be done here
	# if error redirect back to /friends/<id>/edit
	data = {
		'first_name': request.form['first_name'],
		'last_name': request.form['last_name'],
		'email': request.form['email'],
		'id': id
	}
	DoUpdate(data)
	return redirect('/')

# delete the friend from the db
@app.route('/friends/<id>/delete', methods=['POST'])
def destroy(id):
	print("destroy: ", id)
	DoDelete(id)
	return redirect('/')

# update the fields in the database for a selected id
def DoUpdate(data):
	query = "UPDATE friends \
				SET first_name = :first_name, last_name = :last_name, email = :email, updated_at = NOW() \
				WHERE id = :id"
	mysql.query_db(query, data)
	return

# remove one row from emails table
def DoDelete(delete_id):
	query = "DELETE FROM friends WHERE id = :id"
	data = {'id': delete_id}
	mysql.query_db(query, data)
	return

# add one row into emails table
def DoInsert(data):
	query = "INSERT INTO friends (first_name, last_name, email, created_at, updated_at) \
				VALUES (:first_name, :last_name, :email,  NOW(), NOW())"

	mysql.query_db(query, data)
	return

# get all email addresses from emails table
def DoSelect(id=None):
	results = []
	if id:
		query = "SELECT * FROM friends WHERE id = :id"
		data = {'id': id}
		results = mysql.query_db(query, data)
	else:
		query = "SELECT * FROM friends ORDER BY created_at DESC"
		results = mysql.query_db(query)
	return results



app.secret_key = "HushHushSecret"

app.run(debug=True)