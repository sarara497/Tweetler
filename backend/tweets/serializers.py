from rest_framework import serializers
from tweets.models import Tweet


class TweetSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_id.name', read_only=True)

    class Meta:
        model = Tweet
        fields = ('id', 'user', 'tweet', 'img', 'time')
