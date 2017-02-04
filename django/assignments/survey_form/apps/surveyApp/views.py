from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    if not 'counter' in request.session:
        request.session['counter'] = 0
    return render(request, 'survey/index.html', { 'foo' : 'foo' })

def process(request):
    print("processing")
    request.session['counter'] += 1 
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['comment']
    return redirect('/result')

def result(request):
    return render(request, 'survey/result.html')

def reset(request):
    request.session.clear()
    return redirect('/')
