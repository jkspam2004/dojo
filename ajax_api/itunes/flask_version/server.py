
from flask import Flask, render_template, request, redirect, jsonify
# Import MySQLConnector class from mysqlconnection.py
from mysqlconnection import MySQLConnector

app = Flask(__name__)
'''
Set variable 'mysql' to be an instance of the MySQLConnector class,
taking our entire application as the first argument and the database
name as the second argument.
'''
mysql = MySQLConnector(app, 'myownapi')

# to see page, run python manage.py and access with http://localhost:8000/quotes
@app.route('/quotes')
def index():
    return render_template('index.html')

@app.route('/movie')
   artist = request.form['user_input'].replace(' ', '')
    url = "https://itunes.apple.com/search?term=" + artist + "&entity=musicVideo"
    # notice this is 'requests' not 'request'
    # we are using the request modules, 'get' function to send a request from our controller
    # then we use ".content" to get the content we are looking for
    response = requests.get(url).content
    # we then send the response back to our client which sent the initial post request
    return response 


