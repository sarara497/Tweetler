from django.urls import path, include
from users.views import UserList, details

urlpatterns = [
    path('', UserList.as_view()),
    path('details', details),
    path('all', UserList.as_view()),
]
