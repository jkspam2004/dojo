from django.shortcuts import render, HttpResponse
from .models import Place
from .models import Restaurant
from .models import Waiter

# Create your views here.
def index(request):
    p1 = Place(name='Demon Dogs', address='944 W. Fullerton')
    #p1.save()
    p2 = Place(name='Ace Hardware', address='1013 N. Ashland')
    #p2.save()

    r = Restaurant(place=p1, serves_hot_dogs=True, serves_pizza=False)
    #r.save()

    print r.place
    print p1.restaurant
    print p2.restaurant

    return HttpResponse("test")

