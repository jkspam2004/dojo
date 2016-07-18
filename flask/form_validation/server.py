from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template("index.html")

@app.route('/result', methods=['POST'])
def display_result():
	error_cnt = 0
	if len(request.form['name']) < 1:
		flash("Name cannot be empty!") # message stored temporarily in flash
		error_cnt += 1
	else:
		flash("Success! Your name is {}".format(request.form['name']))

	print("length=", len(request.form['comments']))


	if len(request.form['comments']) < 1:
		flash("Comments cannot be empty!")
		error_cnt += 1
	elif len(request.form['comments']) > 120:
		flash("Please limit comment to 120 characters or less!") 
		error_cnt += 1
	else:
		flash("Thanks for commenting!")

	if error_cnt > 0:
		return redirect('/')
	else:
		return render_template("result.html", request=request.form)

app.secret_key = "HushHushSecret"

app.run(debug=True) # run our serve