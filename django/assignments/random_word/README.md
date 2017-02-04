Random Word Generator

Lesson on using the session variable.  Session variables persist even through browser refresh and close.  Clearing cache clears the session keys.

In order for session to work, migrations must be performed first.
1. python manage.py makemigrations
2. python manage.py migrate


The attempt counter is stored in session.
request.session['counter']

Each time the generate button is clicked, the counter increments and a new random string is generated. I used the GET method to generate the string and to reset the session.
http://localhost:8000

Answer key uses POST for both the generate and reset.
http://localhost:8000/answer



