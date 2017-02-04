from django.shortcuts import render, redirect, HttpResponse
import string
import random

# Generate a random string using get method

# Create your views here.
def index(request):
    word = ''
    if 'counter' in request.session:
        request.session['counter'] += 1
        for letter in range(14):
            word += random.choice(string.letters)
    else:
        request.session['counter'] = 0
        word = "Click Generate button for a random string"

    return render(request, "index.html", { 'word' : word } )


def reset(request):
    request.session.clear()
    return redirect('/')
