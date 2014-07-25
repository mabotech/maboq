

from celery import Celery

app = Celery('add')

app.config_from_object('celeryconfig')


@app.task
def add(x, y):
    return x + y

@app.task
def hello():
    return {"msg":"hello"}