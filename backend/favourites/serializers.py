from rest_framework import serializers
from favourites.models import Favourite


class FavouriteSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_id.name', read_only=True)

    class Meta:
        model = Favourite
        fields = ('id', 'tweet')
