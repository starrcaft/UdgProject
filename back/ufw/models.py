from django.db import models


# Create your models here.

class Log (models.Model):
    srcIP = models.CharField(max_length = 100)
    desIP = models.CharField(max_length = 100)