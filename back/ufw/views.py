from django.shortcuts import render
from rest_framework import generics

from .models import Log, HistoryLog, LastLog, LastBLog
from .serializers import UfwLogSerializers, HistoryLogSerializers, LastLogSerializers, LastbLogSerializers
# Create your views here.

def list(request):
    logs = Log.objects.all()
    return render(request, 'ufw/a.html', {})

class DetailLog(generics.ListCreateAPIView) :
    queryset = Log.objects.all()
    serializer_class = UfwLogSerializers

class DetailHistoryLog(generics.ListCreateAPIView) :
    queryset = HistoryLog.objects.all()
    serializer_class = HistoryLogSerializers

class DetailLastLog(generics.ListCreateAPIView) :
    queryset = LastLog.objects.all()
    serializer_class = LastLogSerializers

class DetailLastbLog(generics.ListCreateAPIView) :
    queryset = LastBLog.objects.all()
    serializer_class = LastbLogSerializers