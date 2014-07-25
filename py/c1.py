

from celery import Celery

BROKER_URL = 'redis://localhost:6379/2'

CELERY_ACCEPT_CONTENT = ['pickle', 'json', 'msgpack', 'yaml']
    
app = Celery('hello', broker=BROKER_URL)

@app.task
def hello():
    return 'hello world'
    
