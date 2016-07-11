from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'ThisIsASecret'

@app.route('/')
def index():
	for key, val in session.items():
		print("key: ", key, "val: ", val)
		
	default = 1
	count = session.get('count', default)
	session['count'] = count
	if (session['count']): 
		session['count'] += 2
	else:
		session['count'] = 1
	return render_template('index2.html')

app.run(debug=True)