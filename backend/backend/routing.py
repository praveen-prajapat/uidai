# projectname/your_app/routing.py
from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/live_video/$', consumers.LiveVideoConsumer.as_asgi()),
]
