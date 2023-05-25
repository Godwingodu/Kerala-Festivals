from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets,status
from rest_framework import authentication,permissions
from django.core.mail import send_mail
from app.task import pageloaded

class EventModelView(viewsets.ModelViewSet):
    models=Events
    serializer_class=EventSerializer
    queryset=Events.objects.all()
    permission_classes=[permissions.IsAuthenticated]
    authentication_classes=[authentication.TokenAuthentication]

class GuestEventModelView(viewsets.ModelViewSet):
    models=Events
    serializer_class=EventSerializer
    queryset=Events.objects.all()

class UserView(APIView):
    def post(self,request,*args,**kwargs):
        ser=UserSerializer(data=request.data)
        if ser.is_valid():
            name=ser.validated_data.get('username')
            psw=ser.validated_data.get('password')
            email=ser.validated_data.get('email')
            ser.save()
            send_mail(
                'Welcome to Kerala-Festivals',
                f"""
Dear {name},

Thank you for registering with Kerala-Festivals, your go-to source for all things related to festivals in Kerala, India!

Your account is now active, Your User Name is: "{name}" and Password is: "{psw}". you can start exploring our website to discover the diverse and vibrant festivals happening across the state. Our platform provides a comprehensive guide to traditional and modern celebrations, and we're constantly updating it with new events and information.

As a registered member, you'll have access to a range of features, including:

Personalized recommendations based on your festival preferences
Ability to add and edit events
Exclusive access to festival updates and announcements

We're excited to have you as part of our community and we look forward to sharing this festival journey with you.

If you have any questions or feedback, please feel free to reach out to us at support@keralafestivals.com. We're always happy to hear from our members.

Thank you again for joining us at Kerala-Festivals!

Best regards,

The Kerala-Festivals Team
""",
                'godwinvinson69@gmail.com',
                [email]
                 )
            return Response({"msg":"ok"})
        else:
            return Response({"msg":ser.errors},status=status.HTTP_404_NOT_FOUND)

class subscribedusersView(viewsets.ModelViewSet):
    models=subscribedusers
    serializer_class=SubscribeduserSerializer
    queryset=subscribedusers.objects.all()


class bookingView(viewsets.ModelViewSet):
    models=booking
    serializer_class=BookingSerializer
    queryset=booking.objects.all()


