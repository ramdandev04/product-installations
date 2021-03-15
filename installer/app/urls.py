from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('install', views.post_one),
    path('finish', views.finishme)
]