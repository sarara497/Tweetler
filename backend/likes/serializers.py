from rest_framework import serializers
from likes.models import Like


class LikeSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_id.name', read_only=True)

    class Meta:
        model = Like
<<<<<<< HEAD
        fields = ('id', 'user', 'user_Id', 'user_Id')
=======
        fields = ('id', 'user')
>>>>>>> dcaaffce350685e0739803d1ad22dcbc3859be6c
