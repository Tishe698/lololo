
from django.urls import path
from sait.views import *
urlpatterns = [
    path('', index, name='home'),
    path('about_me', about_me, name='about_me'),
    path('traning', traning, name='traning'),
    path('master_class', master_class, name='master_class'),
]
