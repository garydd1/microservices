from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TournamentViewSet

router = DefaultRouter()
router.register(r'tournaments', TournamentViewSet)

urlpatterns = [
    path('api/tournaments', include(router.urls)),
]
