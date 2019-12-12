from django.db import models


# Create your models here.

class Log (models.Model):
    srcIP = models.CharField(max_length = 100)
    desIP = models.CharField(max_length = 100)

class LastLog(models.Model) :
    user = models.CharField(max_length = 100)
    pts = models.CharField(max_length =100)
    srcIP = models.CharField(max_length = 50)
    date = models.CharField(max_length = 100)

class LastBLog(models.Model) :
    user = models.CharField(max_length = 100)
    protocol = models.CharField(max_length = 100)
    srcIP = models.CharField(max_length = 50)
    date = models.CharField(max_length = 100)

class HistoryLog(models.Model) :
    date = models.CharField(max_length = 100)
    cmd = models.TextField()