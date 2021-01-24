from django.shortcuts import render
from rest_framework import generics
from favourites.models import Favourite
from favourites.serializers import FavouriteSerializer

# Create your views here.


class FavouriteList(generics.ListCreateAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer
