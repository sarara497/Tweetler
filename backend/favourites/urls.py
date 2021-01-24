from django.urls import path, include
from favourites.views import FavouriteList

urlpatterns = [
    path('', FavouriteList.as_view())
]
