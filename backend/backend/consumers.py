# projectname/your_app/consumers.py
import json
import cv2
import asyncio
from channels.generic.websocket import AsyncWebsocketConsumer

class LiveVideoConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def send_bounding_boxes(self, bounding_boxes):
        await self.send(text_data=json.dumps({'bounding_boxes': bounding_boxes}))

    async def receive(self, text_data):
        pass  # Handle any additional WebSocket communication if needed
