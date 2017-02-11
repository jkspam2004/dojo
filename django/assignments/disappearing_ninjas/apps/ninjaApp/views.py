from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    message = {
        'message': "No ninjas here" 
    }
    return render(request, "ninjas/index.html", message)
    

def ninjas(request, color):
    img = 'img/allninjas.png'
    if color:
        turtle_options = {
            'blue': 'img/leonardo.jpg',
            'orange': 'img/michelangelo.jpg',
            'red': 'img/raphael.jpg',
            'purple': 'img/donatello.jpg'
        }
        if color in turtle_options:
            img = turtle_options[color]
        else:
            img = 'img/notapril.jpg' 

    return render(request, "ninjas/index.html", { 'color': color, 'img': img })




