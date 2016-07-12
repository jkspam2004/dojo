from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # set a security key for security purposes

# our index route will handle rendering our form
@app.route('/')
def index():
	return render_template("index.html")

# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
@app.route('/users2', methods=['POST'])
def create_user2():
	print("Got Post Info")
	# we'll talk about the following two lines after we learn a little more
	# about forms
	name = request.form['name']
	email = request.form['email']
	# redirects back to the '/' route
	return redirect('/')

@app.route('/show')
def show_user():
	# passing hard coded value
	#return render_template('user.html', name='Jay', email='kpatel@codingdojo.com')
	# passing session
    #return render_template('user.html', name=session['name'], email=session['email'])
    # don't pass anything. can get session data from within user.html
    return render_template('user.html')

@app.route('/users', methods=['POST'])
def create_user():
	print("Got Post Info")
	# here we add two properties to session to store the name and email
	session['name'] = request.form['name']
	session['email'] = request.form['email']
	return redirect('/show') # redirecting to page that shows results

app.run(debug=True) # run our server
