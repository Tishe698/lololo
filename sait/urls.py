
from django.urls import path
from sait.views import *
urlpatterns = [
    path('', index, name='home'),
]
