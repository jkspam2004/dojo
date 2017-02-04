from django.conf.urls import url
from . import views

def index(request):
    print("I will be your future routes")
    print(request)

urlpatterns = [
    url(r'^$', views.index)
]

