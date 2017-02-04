from django.conf.urls import url
from . import views
from . import views_ans

urlpatterns = [
    url('^$', views.index),
    url('^reset$', views.reset),
    url('^answer$', views_ans.index),
    url('^create$', views_ans.create),
    url('^reset2$', views_ans.reset)
]
