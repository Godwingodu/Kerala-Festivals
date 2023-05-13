from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model=Events
        fields=["name","place","event_date","description","pic","id"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["username","password","email"]
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    

class SubscribeduserSerializer(serializers.ModelSerializer):
    class Meta:
        model=subscribedusers
        fields=["name","email"]


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model=booking
        fields=["name","type","number"]