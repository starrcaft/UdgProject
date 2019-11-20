from django.db import models
from django.conf import settings

# Create your models here.

class UfwLog(models.Model):
    srcIP = models.CharField(max_length = 200)
    desIP = models.TextField(max_length = 200)
