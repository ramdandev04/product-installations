import os
import socket
import requests
import json
import subprocess

def getip():
    return socket.gethostbyname(socket.gethostname())

def getlicense():
    obj = {
        'ok': True
    }
    lic = requests.post('http://api.sundacoder.com/lcs', data=obj).content
    return json.loads(lic)

def update():
    command = 'apt update && apt upgrade -y'
    os.system(command)

def bundle():
    command = 'apt install nodejs -y && npm i -g yarn'
    os.system(command)

def finish():
    # os.system('exit')
    # os.sys.exit()
    print('ok')
    os.system('bash exit.sh')
    