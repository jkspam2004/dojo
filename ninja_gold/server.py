from flask import Flask, render_template, request, redirect, session
import random
from datetime import datetime
from time import strftime

app = Flask(__name__)
app.secret_key = "HushSecretKey"

# index route to handle rendering the four forms
@app.route('/')
def index():
	print "index - method: " + request.method

	# let's initialize some session variables
	if not session.get('gold'):
		session['gold'] = 0
	if not session.get('activities'):
		session['activities'] = ''

	return render_template('index.html')

# reset the session
@app.route('/reset', methods=['POST'])
def reset():
	print "index - method: " + request.method

	if request.form.get('reset'):
		session.clear()	

	return redirect('/')

# process_money route to handle the calculations for money processing and set results in 
# activities key in the session. redirects back to index /
@app.route('/process_money', methods=['POST'])
def process_money():
	print 'got info - method: ' + request.method

	time = datetime.now().strftime("%Y/%m/%d %-I:%M %p")

	result = () # result holds the string and gain/loss status
	if request.form.get('action') == 'play_farm':
		result = play_time('farm', 10, 21)
	elif request.form.get('action') == 'play_cave':
		result = play_time('cave', 5, 11)
	elif request.form.get('action') == 'play_house':
		result = play_time('house', 2, 6)
	elif request.form.get('action') == 'play_casino':
		result = play_time('casino', -50, 51)

	# store the result string, the current time, and the gain/loss status for css color rendering
	# add to existing activities
	session['activities'] += result[0] + ' (' + time + ')|' + result[1] +'\\n'	

	return redirect('/')

def play_time(place, start, end):
	rand_num = random.randint(start, end)
	print('rand_num: ', rand_num)

	session['gold'] += rand_num # add/subtract to the running gold total
	status = 'gain'
	if place == 'casino' and rand_num < 0:
		result = 'Entered a ' + place + ' and lost ' + str(abs(rand_num)) + ' golds... Ouch..'
		status = 'loss'
	else:
		result = 'Earned ' + str(rand_num) + ' golds from the ' + place + '! '
	return (result, status)


app.run(debug=True) # run our server

