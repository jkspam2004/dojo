
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
    #return render_template('index.html')
    # load up the quotes without clicking button
    quotes = all()
    return render_template('index.html', quotes=quotes)


@app.route('/quotes/index_json')
def index_json():
    quotes = all()
    return jsonify(quotes=quotes)
 
@app.route('/quotes/index_html')
def index_partial():
    quotes = all()
    return render_template('partials/quotes.html', quotes=quotes)

@app.route('/quotes/create', methods=['POST'])
def create():
    quote = request.form
    query = "INSERT INTO quotes(author, quote) VALUES (:author, :quote)"
    mysql.query_db(query, quote)
    #return redirect('/quotes')
    quotes = all()
    return render_template('partials/quotes.html', quotes=quotes)

def all():
    query = "SELECT * FROM quotes ORDER BY id DESC" 
    return mysql.query_db(query)



if __name__ == "__main__":
    app.run(port=8000, debug=True)
