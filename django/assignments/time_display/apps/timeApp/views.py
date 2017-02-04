from django.shortcuts import render, HttpResponse
from datetime import datetime
from tzlocal import get_localzone
import time
# Controller!

# Create your views here.
def index(request):
    #i = datetime.now()
    #currentDateTime = ("%s/%s/%s" % (i.day,i.month,i.year)) + (" %s:%s:%s" % (i.hour,i.month,i.second))

    local = get_localzone()
    currentDateTime = datetime.now(local).strftime("%b %d, %Y %-I:%M %p")
    print "time:", currentDateTime
    print request.method

    print local
    context = {
        'currentDateTime': currentDateTime 
    }
    print context
    print context['currentDateTime']
    return render(request, 'time/index.html', context)
