from django.urls import path
from . import views

urlpatterns = [
    path('', views.getLog, name='log_ufw_main'),
]