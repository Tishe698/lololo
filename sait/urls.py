
from django.urls import path
from sait.views import *
urlpatterns = [
    path('', index, name='home'),
    path('about_me', about_me, name='about_me')
]
