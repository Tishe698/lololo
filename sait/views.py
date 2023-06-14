from django.shortcuts import render


# Create your views here.
def index(req):
    return render(req, 'index.html')

def about_me(req):
    return render(req, 'about_me.html')