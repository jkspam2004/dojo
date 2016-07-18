from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

# index route
@app.route('/')
def index():
	return render_template('index.html')

# success page, query all rows, display results
@app.route('/success')
def print_success():
	results = get_all() # get all the results
	return render_template('result.html', results=results)

# remove one row from emails table
@app.route('/delete/<email_id>')
def remove(email_id):
	query = "DELETE FROM emails WHERE id = :id"
	data = {'id': email_id}
	mysql.query_db(query, data)
	return redirect('/success')

# validate email from form
@app.route('/add', methods=['POST'])
def add():
	error_cnt = 0

	email = request.form.get('email', '')
	if len(email) < 1:
		flash('Email cannot be empty!', 'error')
		error_cnt += 1
	elif not EMAIL_REGEX.match(email):
		flash('Email is not valid!', 'error')
		error_cnt += 1

	if error_cnt > 0:
		# return to index page with the email form and flash errors
		return redirect('/') 
	else:
		# insert email into table, flash success message, and redirect to /success
		insert() 
		flash('The email address you entered (' + email + ') is a VALID email address! Thank you!', 'success')
		return redirect('/success')

# add one row into emails table
def insert():
	email = request.form['email']
	query = "INSERT INTO emails (email, added_time, updated_time) \
				VALUES (:email,  NOW(), NOW())"
	data = {
	         'email': email, 
	       }
	mysql.query_db(query, data)

# get all email addresses from emails table
def get_all():
	query = "SELECT * FROM emails ORDER BY added_time DESC"
	results = mysql.query_db(query)
	return results


app.secret_key = "HushHushSecret"

app.run(debug=True)