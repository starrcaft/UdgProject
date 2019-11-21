from django.shortcuts import render
from .models import Log

# Create your views here.

def list(request):
    logs = Log.objects.filter()
    return render(request, 'ufw/a.html', {})