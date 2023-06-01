from django.db import models


class Events(models.Model):
    name=models.CharField(max_length=50)
    place=models.CharField(max_length=50)
    event_date=models.DateField()
    description=models.TextField(max_length=1000,default="Nill")
    pic=models.ImageField(upload_to="festival_images",null=True)
    date=models.DateField(auto_now_add=True)

class subscribedusers(models.Model):
    name=models.CharField(max_length=50)
    email=models.EmailField(max_length=50)
    date=models.DateField(auto_now_add=True)

class booking(models.Model):
    name=models.CharField(max_length=50)
    type=models.CharField(max_length=50)
    number=models.CharField(max_length=10)

