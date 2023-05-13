from django.contrib import admin
from django.urls import path
from app.views import *
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views
from django.conf import settings
from django.conf.urls.static import static

router=DefaultRouter()
router.register('event',EventModelView,basename="event"),
router.register('gevent',GuestEventModelView,basename="gevent"),
router.register('subscribeduser',subscribedusersView,basename="subscribeduser"),
router.register('booking',bookingView,basename="booking")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/',UserView.as_view()),
    path('tauth/',views.obtain_auth_token),
    
]+router.urls + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

