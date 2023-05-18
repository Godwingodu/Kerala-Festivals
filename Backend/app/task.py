from celery import shared_task
from.models import Events,subscribedusers
from django.core.mail import send_mail
from keralafestivals import settings
from django.utils import timezone
from datetime import timedelta


@shared_task(bind=True)
def send_mail_func(self):
    users=subscribedusers.objects.all()
    tomorrowdate=timezone.localdate()+timedelta(days=1)
    todayevents=Events.objects.filter(event_date=tomorrowdate)
    for event in todayevents:
        for user in users:
            mail_subject="Kerala Festivals"
            message = f"""Dear {user.name},\n\nWe wanted to let you know about an upcoming festival that you may be interested in. The festival is {event.name} and it will be taking place on {event.event_date} at {event.place}.\n\nFor more information, please visit our website or contact us at support@keralafestivals.com.\n\nBest regards,\nThe Kerala-Festivals Team"""
            to_mail=user.email
            send_mail(
                subject=mail_subject,
                message=message,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[to_mail],
                fail_silently=True,
                )
    return "========================Mail send Successfully to the subscribed users======================="