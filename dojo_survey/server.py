from flask import Flask, render_template, request, redirect
app = Flask(__name__)
# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template("index.html")

@app.route('/result', methods=['POST'])
def display_result():
	print("Got Post Info")
	#name = request.form['name']
	# for key, value in request.form.items():
	# 	if (key == 'name'):
	# 		request.form[key] = 'Me'
	# 	print("key: ", key, ", values: ", value)

	return render_template("result.html", request=request.form)

   # redirects back to the '/' route
   #return redirect('/')

app.run(debug=True) # run our serve