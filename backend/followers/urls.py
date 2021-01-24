from django.urls import path, include
from followers.views import FollowList

urlpatterns = [
    path('', FollowList.as_view())
]
