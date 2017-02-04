from django.shortcuts import render, HttpResponse

# controller
def index(request):
    response = "Hello, I am your first request!"
    print("*"*100)
    #return HttpResponse(response)
    return render(request, "test_view/index.html")

# Create your views here.
