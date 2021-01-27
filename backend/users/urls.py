from django.urls import path, include
from users.views import UserList, details, uploadImg

urlpatterns = [
    path('', UserList.as_view()),
    path('details', details),
    path('image', uploadImg),
    path('all', UserList.as_view()),
]
