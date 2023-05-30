from django.shortcuts import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(req):
    return render(req, 'index.html')

def page2(req):
    return render(req,'about_me.html')
