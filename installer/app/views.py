from django.shortcuts import render
from django.http import HttpResponse
import requests

# Create your views here.
def index(req):
    context = {
        "pages": "Apps"
    }
    return render(req, 'app.html', context)