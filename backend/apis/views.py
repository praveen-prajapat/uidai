# projectname/appname/views.py
from django.http import StreamingHttpResponse
from django.views.decorators import gzip
import cv2
import threading
import time

class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)
        _, self.frame = self.video.read()
        self.lock = threading.Lock()

    def __del__(self):
        self.video.release()

    def get_frame(self):
        return cv2.imencode('.jpg', self.frame)[1].tobytes()

@gzip.gzip_page
def video_feed(request):
    return StreamingHttpResponse(video_stream(),
                                 content_type='multipart/x-mixed-replace; boundary=frame')

def video_stream():
    camera = VideoCamera()
    while True:
        with camera.lock:
            frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
        time.sleep(0.1)  # Adjust the sleep time as needed
