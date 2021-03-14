from django.shortcuts import render

def index(req):
    context = {
        'pages': 'Welcome'
    }
    return render(req, 'index.html', context)