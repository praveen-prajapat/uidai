# projectname/asgi.py
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
import backend.routing  # Import the routing configuration for your app

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": URLRouter(
        backend.routing.websocket_urlpatterns
    ),
})
