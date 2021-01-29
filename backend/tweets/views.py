from django.shortcuts import render
from rest_framework import generics
from tweets.models import Tweet
from tweets.serializers import TweetSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


class TweetList(generics.ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


@api_view(['POST'])
def details(request):
    tweeeeeets = Tweet.objects.get(user_Id=request.data['id'])
    # console.log('dssss', myaccount)
    serializer = NewACreateSerializer(tweeeeeets, many=False)
    return Response(serializer.data)
