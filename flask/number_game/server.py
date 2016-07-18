from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # set a security key for security purposes

# our index route will handle rendering our form
@app.route('/', methods=["GET","POST"])  	# submitting form to itself need both methods
def index():								# GET request happens first on initial page load

 	if request.form.get('reset'):			# reset the game
		session.pop('great_number')

	if not session.has_key('great_number'):
		great_number = random.randrange(1,101)	# get a random number if we don't have one yet
		session['great_number'] = great_number	# store this number in the session so it sticks when page reloads

	print("great number is: ", session.get("great_number"))

	guess = 'none'
	if 'number' in request.form:
		number = int(request.form.get('number'))	# convert 'guess' request form value from unicode to int
		if number == -1:							# reset the response after game reset
			guess = 'none'
		elif number < session['great_number']:
			guess = 'low'
		elif number > session['great_number']:
			guess = 'high'
		else:
			print("finally a match")
			guess = 'match'

	return render_template("index.html", request=request.form, guess=guess)

app.run(debug=True) # run our serve
