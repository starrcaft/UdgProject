from django.shortcuts import render
from django.http import HttpResponse
from .models import UfwLog
# Create your views here.

def ufw_list(request):
    lists= UfwLog.objects()
    return render(request, '~/project/front/src/index.js', {})