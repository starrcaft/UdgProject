from django.urls import path
from . import views

urlpatterns = [
    path('', views.DetailLog.as_view()),
]