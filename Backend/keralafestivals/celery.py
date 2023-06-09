from __future__ import absolute_import,unicode_literals
import os
from celery import Celery
from django.conf import settings
from celery.schedules import crontab

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'keralafestivals.settings')
app = Celery('keralafestivals')
app.conf.enable_utc=False
app.conf.update(timezone='Asia/Kolkata')
app.config_from_object(settings, namespace='CELERY')
app.autodiscover_tasks()
@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')


# <------ beat------->
app.conf.beat_schedule={
    'send-mail-every-day-at-8':{
        'task':'app.task.send_mail_func',
        'schedule':crontab(hour=8,minute=0),
    }
}

# app.conf.beat_schedule={
#     'pageloadevery14minutes':{
#         'task':'app.task.pageloadevery14minutes',
#         'schedule':840,
#     }
# }
