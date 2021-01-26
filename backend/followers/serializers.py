from rest_framework import serializers
from followers.models import Follow


class FollowSerializer(serializers.ModelSerializer):
    followingFrom = serializers.CharField(
        source='following_From.name', read_only=True)
    followingto = serializers.CharField(
        source='following_To.name', read_only=True)

    class Meta:
        model = Follow
        fields = ('id', 'followingFrom', 'followingto', 'time')
