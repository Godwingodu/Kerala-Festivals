# Generated by Django 4.2 on 2023-05-04 07:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_events_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='events',
            name='user',
        ),
        migrations.AlterField(
            model_name='events',
            name='description',
            field=models.TextField(default='description', max_length=500),
        ),
    ]
