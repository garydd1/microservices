from django.urls import path, include
from . import views


urlpatterns = [
    path('login', views.base_view, name='base'),
]