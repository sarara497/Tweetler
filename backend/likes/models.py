from django.db import models
from users.models import UserAccount
from tweets.models import Tweet

# Create your models here.


class Like(models.Model):
    user_Id = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE, related_name='user_Likes')
    tweet_Id = models.ForeignKey(
        Tweet, on_delete=models.CASCADE, related_name='tweet_Likes')


class Meta:
        unique_together = ('user_Id', 'tweet_Id')

    def __str__(self):
        return self.user_Id.name
