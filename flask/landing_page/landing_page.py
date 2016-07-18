from flask import Flask, render_template  # Import Flask to allow us to create our app, and import
                                          # render_template to allow us to render index.html.
app = Flask(__name__)                     # Global variable __name__ tells Flask whether or not we
                                          # are running the file directly or importing it as a module.

@app.route('/')                           
def greeting():							  # Display a greeting
  return render_template('index.html')    


@app.route('/ninjas')                     # Display informations about ninjas
def ninjas():
  return render_template('ninjas.html')

@app.route('/dojos/new')                  # Contains a form
def dojos():
  return render_template('dojos.html', method="POST")



app.run(debug=True)                       # Run the app in debug mode.
