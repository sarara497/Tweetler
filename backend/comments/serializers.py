from rest_framework import serializers
from favourites.models import Favourite


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_Id.name', read_only=True)
    tweet = serializers.CharField(source='tweet_Id.tweet', read_only=True)

    class Meta:
        model = Favourite
        fields = ('id', 'user', 'tweet', 'user_Id',
                  "tweet_Id", 'comment', 'img', 'time')
