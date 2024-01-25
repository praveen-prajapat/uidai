# projectname/appname/urls.py
from django.urls import path
from .views import video_feed

urlpatterns = [
    # ... other URL patterns
    path('video_feed/', video_feed, name='video_feed'),
]
