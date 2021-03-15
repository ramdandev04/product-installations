from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
import time
from . import libs

# Create your views here.
def index(req):
    context = {
        "pages": "Apps"
    }
    return render(req, 'app.html', context)

def post_one(req):
    if req.method == 'POST':
        body = json.loads(req.body)
        if body['name'] == 'prepare':
            return JsonResponse({'code': 200, 'message': 'preparing installations'}, safe=False)

        if body['name'] == 'license':
            ip = libs.getip()
            return JsonResponse({'code': 200, 'message': 'checking license for {}'.format(ip)}, safe=False)

        if body['name'] == 'lcs':
            lcs = libs.getlicense()
            print(lcs)
            return JsonResponse({'code': lcs['code'], 'message': 'license asigned for {}'.format(libs.getip())})
        
        if body['name'] == 'update':
            libs.update()
            return JsonResponse({'code': 200, 'message': 'enviroment updated'}, safe=False)

        if body['name'] == 'bundle':
            libs.bundle()
            return JsonResponse({'code': 200, 'message': 'App has been bundled'}, safe=False)


def finishme(req):
    libs.finish()
    return HttpResponse('200')