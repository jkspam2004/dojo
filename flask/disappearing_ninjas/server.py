from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)

# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template('index.html')

@app.route('/ninja')
def ninjas():
	return render_template('index.html', color='all')

@app.route('/ninja/<color>')
def ninja(color):
	print(color)

	return render_template('index.html', color=color)


app.secret_key = "HushHushSecret"

app.run(debug=True) # run our server