from django.shortcuts import render
from rest_framework import generics
from followers.models import Follow
from followers.serializers import FollowSerializer

# Create your views here.


class FollowList(generics.ListCreateAPIView):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer
