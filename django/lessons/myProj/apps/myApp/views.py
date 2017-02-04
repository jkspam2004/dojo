from django.shortcuts import render, HttpResponse, redirect
# controller file

# Create your views here.
def index(request):
    return render(request, "index.html")

def show(request):
    print("request.method", request.method)
    return render(request, "users/show_user.html")

def create(request):
    if request.method == 'POST':
        print("request.method", request.method)
        print("request.post", request.POST)
        request.session['name'] = request.POST['first_name']
        return redirect("/")
    else:
        return redirect("/")
   

def test(request):
    response = "Hello World.  Test Page!"
    print("*" * 100) # print to python console
    return HttpResponse(response)


