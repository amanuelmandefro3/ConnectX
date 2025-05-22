from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AnalyticsViewSet, AdminAnalyticsViewSet

router = DefaultRouter()
router.register(r"analytics", AnalyticsViewSet)
router.register(r"admin/analytics", AdminAnalyticsViewSet, basename="admin-analytics")

urlpatterns = [
    path("", include(router.urls)),
]
