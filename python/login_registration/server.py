from flask import Flask, redirect, render_template, request, session, flash
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
import re
# regex to validate email
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app, 'mydb')

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
		return redirect('/main')
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
		return redirect('/main')
	else:
		return redirect('/login')

# displays standalone login form
@app.route('/login')
def login_retry():
	return render_template('/login.html')

# displays main page after successful registration or login
@app.route('/main')
def main_page():
	userid = session.get('userid', 0)

	if userid:
		data = DoSelect('id', userid)
		return render_template('main.html', user=data)
	else:
		flash("Please login", "warning")
		return redirect('/login')

@app.route('/logout')
def logout():
	session.clear()
	return redirect('/')

# update the fields in the database for a selected id
def DoUpdate(data):
	query = "UPDATE users \
		SET first_name = :first_name, last_name = :last_name, email = :email, updated_at = NOW() \
		WHERE id = :id"
	mysql.query_db(query, data)
	return

# remove one row from emails table
def DoDelete(delete_id):
	query = "DELETE FROM users WHERE id = :id"
	data = {'id': delete_id}
	mysql.query_db(query, data)
	return

# add one row into emails table
def DoInsert(data):
	query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) \
		VALUES (:first_name, :last_name, :email,  :password, NOW(), NOW())"

	ret_val = mysql.query_db(query, data)
	return ret_val

# get all email addresses from emails table
def DoSelect(column_name=None, value=None):
	results = []
	if column_name and value:
		print("column: ", column_name, "value: ", value)
		query = "SELECT * FROM users WHERE " + column_name + " = :" + column_name 
		data = { column_name : value }
		results = mysql.query_db(query, data)
	else:
		query = "SELECT * FROM users ORDER BY created_at DESC"
		results = mysql.query_db(query)
	return results

# validates inputs for login
# returns error True or False
# set session if credentials are valid
def check_login(args):
	password 	= args.get('password')
	email 		= args.get('email')
	data 		= DoSelect('email', email) # get database info associated with email

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
		data = DoSelect('email', email)

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

