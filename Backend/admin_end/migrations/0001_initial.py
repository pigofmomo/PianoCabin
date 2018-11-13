# Generated by Django 2.1.3 on 2018-11-12 19:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(default='')),
                ('content', models.TextField(default='')),
                ('feedback_time', models.DateTimeField(default=datetime.datetime(2018, 11, 12, 19, 43, 38, 199628))),
            ],
        ),
        migrations.CreateModel(
            name='LongTermOrder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField(default=datetime.date(2018, 11, 12))),
                ('end_date', models.DateField(default=datetime.date(2018, 11, 12))),
                ('day_in_week', models.IntegerField(default=1)),
                ('start_time', models.DateTimeField(default=datetime.datetime(2018, 11, 12, 19, 43, 38, 199052))),
                ('end_time', models.DateTimeField(default=datetime.datetime(2018, 11, 12, 19, 43, 38, 199065))),
                ('price', models.IntegerField(default=0)),
                ('is_valid', models.BooleanField(default=False)),
                ('payment_status', models.IntegerField(default=1)),
                ('order_status', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(default='')),
                ('content', models.TextField(default='')),
                ('publish_time', models.DateTimeField(default=datetime.datetime(2018, 11, 12, 19, 43, 38, 199395))),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=datetime.date(2018, 11, 12))),
                ('start_time', models.DateTimeField(default=datetime.datetime(2018, 11, 12, 19, 43, 38, 198744))),
                ('end_time', models.DateTimeField(default=datetime.datetime(2018, 11, 12, 19, 43, 38, 198757))),
                ('price', models.IntegerField(default=0)),
                ('payment_status', models.IntegerField(default=1)),
                ('order_status', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='PianoRoom',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room_num', models.TextField(default='')),
                ('piano_type', models.TextField(default='')),
                ('brand', models.TextField(default='')),
                ('prices', models.TextField(default='{"student":-1,"teacher":-1,"other":-1}')),
                ('usable', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('open_id', models.TextField(default='')),
                ('identity', models.TextField(default='')),
                ('permission', models.IntegerField(default=0)),
            ],
        ),
    ]
