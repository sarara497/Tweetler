# Generated by Django 3.1.5 on 2021-01-27 11:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('likes', '0001_initial'),
        ('tweets', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='like',
            name='tweet_Id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tweet_likes', to='tweets.tweet'),
        ),
    ]
