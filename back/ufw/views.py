from django.shortcuts import render
from rest_framework import generics

from .models import Log
from .serializers import UfwLogSerializers
# Create your views here.

def list(request):
    logs = Log.objects.all()
    return render(request, 'ufw/a.html', {})

class DetailLog(generics.ListCreateAPIView) :
    queryset = Log.objects.all()
    serializer_class = UfwLogSerializers