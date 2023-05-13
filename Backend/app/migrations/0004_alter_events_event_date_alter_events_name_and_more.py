# Generated by Django 4.2 on 2023-05-03 07:01

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_events_event_date_alter_events_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='event_date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='events',
            name='name',
            field=models.CharField(default=django.utils.timezone.now, max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='events',
            name='place',
            field=models.CharField(default=django.utils.timezone.now, max_length=50),
            preserve_default=False,
        ),
    ]
