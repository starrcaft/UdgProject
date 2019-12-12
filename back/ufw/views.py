from django.shortcuts import render
from rest_framework import generics

from .models import Log, HistoryLog
from .serializers import UfwLogSerializers, HistoryLogSerializers
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