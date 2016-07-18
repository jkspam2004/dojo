from flask import Flask, redirect, render_template, request, session, flash
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
import re
# regex to validate email
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app, 'mydb')

##### Routes ######

# index page displays the login and registration form
@app.route('/')
def index():
	return render_template('index.html')

# handles the validation of the input
# if valid inputs, store in the database and log in user
# if invalid inputs, redirect to reg form
@app.route('/register', methods=['POST'])
def register():
	# get our inputs
	data = {
		'first_name' 		: request.form.get('first_name', ''),
		'last_name'  		: request.form.get('last_name', ''),
		'email'		 		: request.form.get('email', ''),
		'password'			: request.form.get('password', ''),
		'confirm_password'	: request.form.get('confirm_password', '')
	}

	# validate input
	error = True
	error = validate_reg(data)

	if not error:
		data['password'] = bcrypt.generate_password_hash(data['password'])
		ret_val = DoInsert(data)
		session['userid'] = ret_val
		return redirect('/wall')
	else:
		return redirect('/')

# handles login validation
@app.route('/process_login', methods=['POST'])
def login():
	data = {
		'email'		: request.form.get('email', ''),
		'password'	: request.form.get('password', '')
	}

	error = check_login(data)
	if not error:
		return redirect('/wall')
	else:
		return redirect('/login')

# displays standalone login form
@app.route('/login')
def login_retry():
	return render_template('/login.html')

# displays wall page after successful registration or login
@app.route('/wall')
def main_page():
	userid = session.get('userid', 0)

	if userid:
		user_data = DoSelect('users', 'id', userid)
		print("main user info:", user_data)
		messages = DoSelectMessages()
		print("main messages info: ", messages)
		comments = DoSelectComments()
		print("main comments info:", comments)

		return render_template('main.html', user=user_data, messages=messages, comments=comments)
	else:
		flash("Please login", "warning")
		return redirect('/login')

# logout clears the session
@app.route('/logout')
def logout():
	session.clear()
	return redirect('/')

# handles posting a message
@app.route('/post', methods=['POST'])
def post_message():
	print("post_message request: ", request.form)

	if not request.form.get('message', ''):
		flash("Enter a message to post", "warning")
	else: 
		data = {
			'user_id' :	session.get('userid', 0),
			'message' : request.form.get('message', '')
		}
		message_id = DoInsertPost(data)
	return redirect('/wall')

# handles posting a comment
@app.route('/comment', methods=['POST'])
def post_comment():
	if not request.form.get('comment', ''):
		flash("Enter a message to comment", "warning")
	else: 
		data = {
			'user_id'	 : session.get('userid', 0),
			'message_id' : request.form.get('messageid', 0),
			'comment' 	 : request.form.get('comment', '')
		}
		print("\n")
		print("post_comment: ", data)
		print("\n")

		comment_id = DoInsertComment(data)
	return redirect('/wall')

##### Helper Functions ######


# not used ...
# select all messages and comments with user info for poster and commenter
# how do we display it in the html to associate the parent of the comments?  perhaps
# create a dictionary with message id as the keys, holding nested structure of comments?
# ToDo and think about
def DoSelectAll():
	query =	"SELECT messages.id AS message_id, comments.id AS comment_id, \
		poster.first_name AS poster_first, poster.last_name AS poster_last, \
		messages.message, messages.created_at message_created_at, \
		commenter.first_name as commenter_first, commenter.last_name AS commenter_last, \
		comments.comment, comments.created_at comment_created_at \
		FROM messages \
		LEFT JOIN comments on (messages.id = comments.message_id) \
		LEFT JOIN users as poster on (poster.id = messages.user_id) \
		LEFT JOIN users as commenter on (commenter.id = comments.user_id) \
		ORDER BY messages.id"
	mysql.query_db(query)

# update the fields in the database for a selected id
def DoUpdate(data):
	query = "UPDATE users \
		SET first_name = :first_name, last_name = :last_name, email = :email, updated_at = NOW() \
		WHERE id = :id"
	mysql.query_db(query, data)
	return

# remove one row from users table
def DoDelete(delete_id):
	query = "DELETE FROM users WHERE id = :id"
	data = {'id': delete_id}
	mysql.query_db(query, data)
	return

# add one row into comments table
def DoInsertComment(data):
	query = "INSERT INTO comments (message_id, user_id, comment, created_at, updated_at) \
		VALUES (:message_id, :user_id, :comment, NOW(), NOW())"

	ret_val = mysql.query_db(query, data)
	return ret_val

# add one row into messages table
def DoInsertPost(data):
	query = "INSERT INTO messages (user_id, message, created_at, updated_at) \
		VALUES (:user_id, :message, NOW(), NOW())"

	ret_val = mysql.query_db(query, data)
	return ret_val

# add one row into users table
def DoInsert(data):
	query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) \
		VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"

	return mysql.query_db(query, data)

# get comments and commenter info
def DoSelectComments():
	query = "SELECT  first_name, last_name, comments.created_at AS comment_created_at, \
		comments.id as comment_id, message_id, comment \
		FROM comments LEFT JOIN users ON (comments.user_id = users.id) \
		ORDER BY comments.created_at ASC"
	results = mysql.query_db(query)
	return results

# get messages and poster into from messages and users tables
def DoSelectMessages():
	query = "SELECT first_name, last_name, messages.created_at AS message_created_at, \
		messages.id AS message_id, message \
		FROM messages LEFT JOIN users ON (messages.user_id = users.id) \
		ORDER BY messages.created_at DESC"
	results = mysql.query_db(query)
	return results

# do select query
def DoSelect(table_name=None, column_name=None, value=None):
	results = []
	if column_name and value:
		print("column: ", column_name, "value: ", value)
		query = "SELECT * FROM " + table_name + " WHERE " + column_name + " = :" + column_name 
		data = { column_name : value }
		results = mysql.query_db(query, data)
	else:
		query = "SELECT * FROM " + table_name + " ORDER BY id DESC"
		results = mysql.query_db(query)
	return results

# validates inputs for login
# returns error True or False
# set session if credentials are valid
def check_login(args):
	password 	= args.get('password')
	email 		= args.get('email')
	data 		= DoSelect('users', 'email', email) # get database info associated with email

	error = False
	if len(email) < 1:
		flash("Enter an email please.", "warning")
		error = True
	else:
		# check the database for such an email
		if not data[0]:
			flash("Hmm, we don't recognize that email.  Please try again.", "warning")
			error = True
			return error # user doesn't exist, return to login page

	if len(password) < 1:
		flash("Enter your password.", "warning")
		error = True
	else:
		hash_pw = data[0]['password']
		matched = bcrypt.check_password_hash(hash_pw, password)
		if not matched: # input password did not match hashed password in db
			flash("There was an error.  Please try again.", "warning")
			error = True

	if not error: # set the session id if no errors
		session['userid'] = data[0]['id']

	return error

# validate inputs for registration
# returns error True or False
def validate_reg(args):
	first 				= args.get('first_name')
	last 				= args.get('last_name')
	email 				= args.get('email')
	password 			= args.get('password')
	confirm_password	= args.get('confirm_password')

	error = False

	if len(email) < 1:
		flash('Email cannot be blank', 'warning')
		error = True
	else:
		data = DoSelect('users', 'email', email)

		if data: # do not allow duplicate email
			flash("Someone's already using that email.  If that's you, please login", "warning")
			error = True
			return error
		if not EMAIL_REGEX.match(email):
			flash('Invalid email address', 'warning')
			error = True

	if len(first) < 1:
		flash('First name cannot be blank', 'warning')
		error = True
	elif len(first) < 3:
		flash('First name must have at least 2 characters', 'warning')
		error = True

	if len(last) < 1:
		flash('Last name cannot be blank', 'warning')
		error = True
	elif len(last) < 3:
		flash('Last name must have at least 2 characters', 'warning')
		error = True

	if len(password) < 1:
		flash('Password cannot be blank', 'warning')
		error = True
	else: 
		if len(password) < 8:
			flash('Password must have at least 8 characters', 'warning')
			error = True
		if password.isalpha() or password.islower() or password.isdigit():
			flash('Password must have at least 1 uppercase letter and 1 numeric value', 'warning')
			error = True

	if len(confirm_password) < 1:
		flash('Confirm password cannot be blank', 'warning')
		error = True
	elif password != confirm_password:
		flash('Password and Confirm password do not match', 'warning')
		error = True

	if not error:
		flash('Thank you for registering with awesomeness!', 'success')

	return error

app.secret_key = 'HushHushBaby'
app.run(debug=True)

