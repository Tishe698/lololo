from django.contrib import admin
from django.urls import path
from sait.views import *
urlpatterns = [
    path('', index, name='home'),
    path('about_me/', page2, name='about_me')
]
