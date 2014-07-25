from datetime import timedelta

BROKER_URL = 'redis://localhost:6379/2'
CELERY_RESULT_BACKEND = 'redis://localhost:6379/2'

CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_ACCEPT_CONTENT=['json']
CELERY_TIMEZONE = 'UTC'
CELERY_ENABLE_UTC = True



CELERYBEAT_SCHEDULE = {
    'add-every-3-seconds': {
        'task': 't2.add',
        'schedule': timedelta(seconds=3),
        'args': (2, 16)
    },
    
    'hello-every-5-seconds': {
        'task': 't2.hello',
        'schedule': timedelta(seconds=5),
        'args': ()
    },
    
}
