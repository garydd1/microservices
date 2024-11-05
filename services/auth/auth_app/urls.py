from django.urls import path, include
from . import views


urlpatterns = [
    path('login', views.base_view, name='base'),
	path('register', views.register_view, name='register'),
]