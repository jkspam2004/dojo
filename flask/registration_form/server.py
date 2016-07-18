from flask import Flask, render_template, request, redirect, session, flash
import time
from datetime import datetime
# the "re" module will let us perform some regular expression operations
import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # set a security key for security purposes

# our index route will handle rendering our form
@app.route('/', methods=['GET', 'POST'])  
def index():								# GET request happens first on initial page load
	print('method', request.method)

	form_vars = request.form
	title = form_vars.get('title', '')

	processed = int(form_vars.get('processed', 0))
	print('processed', processed)

	reset_me = form_vars.get('reset', '') # reset title to '' from ninja or hacker
	if (reset_me == 'true'):
		title = ''
		processed = 0		# set processed to 0 so we don't do the validation on first page load and reset
		session.clear()

	# keep an error count. if 0 in the end, form submitted with no errors
	error_cnt = 0
	# enter the if block if the form was submitted, not on initial page load
	if processed:
		fields = ['email', 'firstname', 'lastname', 'password', 'confirm_password']
		error_cnt = 0
		for field in fields:
			if len(form_vars.get(field, '')) < 1:
				flash(field + ' cannot be blank', 'empty')
				error_cnt += 1
			else:
				if field == 'email' and not EMAIL_REGEX.match(request.form['email']):
					flash("Invalid Email Address!", "invalid")
					error_cnt += 1
				elif (field == 'firstname' or field == 'lastname') and not form_vars.get(field).isalpha():
					flash(field + ' cannot contain numbers or symbols', 'invalid')
					error_cnt += 1
				elif field == 'password':
					if len(form_vars.get('password', '')) < 8:
						flash('Password should be more than 8 characters', 'password')
						error_cnt += 1
					if title == 'ninja' and (form_vars[field].isalpha() or form_vars[field].islower() or form_vars[field].isdigit()):
						flash('Password must have at least 1 uppercase letter and 1 numeric value', 'invalid')
						error_cnt += 1
				elif field == 'confirm_password' and form_vars.get('password') != form_vars.get('confirm_password'):
					flash('Password and Confirm Password do not match', 'password')
					error_cnt += 1

		# validate the birthdate for the hacker
		if title == 'hacker':
			if len(form_vars.get('birthdate')) < 1:
				flash('Birthdate cannot be empty', 'empty')
				error_cnt += 1
			else:
				try:
					birthdate = datetime.strptime(form_vars.get('birthdate'), '%Y-%m-%d')
					if birthdate > datetime.today():
						flash('Birthdate must be in the past', 'invalid')
						error_cnt += 1
				except ValueError:
					flash('Invalid birthdate format', 'invalid')
					error_cnt += 1

		if error_cnt == 0:
			flash('Thanks for submitting your information', 'success')

	return render_template("index.html", title=title, processed=processed, error_cnt=error_cnt)

app.run(debug=True) # run our serve
