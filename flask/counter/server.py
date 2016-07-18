from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # set a security key for security purposes

# our index route will handle rendering our form
@app.route('/', methods=["GET","POST"])  	# submitting form to itself need both methods
def index():								# GET request happens first on initial page load

	reset_me = request.form.get('reset', '') # reset title to '' from ninja or hacker
	if (reset_me == 'true'):
		title = ''
		#request.form.pop('title')
		#print(".py title:", request.form['title'])
		session.pop('count')
	else:
		title = request.form.get('title', '')  

	default = 1
	count = session.get('count', default)       # calling session['count'] raises KeyError when title
	session['count'] = count					# not set. use dict.get() method and set a default
	add = request.form.get('add', '')			# if don't want the exception
	if (add == 'true'):
		session['count'] += 2
	else:
		session['count'] = 1

	print(session['count'])


	return render_template("index.html", request=request.form, title=title)

app.run(debug=True) # run our serve
