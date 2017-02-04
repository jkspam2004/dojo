from django.shortcuts import render, HttpResponse
# controller file

# Create your views here.
def index(request):
    return render(request, 'index.html')


def show(request):
    return render(request, '/users/show.html')

def test(request):
    response = "Hello there"
    return HttpResponse(response)

