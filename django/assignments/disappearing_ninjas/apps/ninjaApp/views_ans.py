from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'ninjas/answer.html')

def show(request, ninja_color):
    turtle_options = {
        'red': 'img/raphael.jpg',
        'blue': 'img/leonardo.jpg',
        'orange': 'img/michelangelo.jpg',
        'purple': 'img/donatello.jpg'
    }
    if ninja_color in turtle_options:
        context = {
            'image': turtle_options[ninja_color],
            'color': ninja_color
        }
    else:
        context = {
            'image': 'img/notapril.jpg',
            'color': ninja_color
        }

    return render(request,'ninjas/answer.html', context)

