from django.conf.urls import url
from . import views
from . import views_ans

urlpatterns = [
    url(r'^$', views.index),
    url(r'^ninjas/(?P<color>\S*)$', views.ninjas),
    url(r'^ninjas2$', views_ans.index, name='index_url'),
    url(r'^ninjas2/(?P<ninja_color>\w+)$', views_ans.show, name='show_url')
]

'''
https://docs.djangoproject.com/en/1.9/topics/http/urls/#reversing-namespaced-urls
'''
