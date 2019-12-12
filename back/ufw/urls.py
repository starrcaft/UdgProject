from django.urls import path
from . import views

urlpatterns = [
    #path('', views.DetailLog.as_view()),
    path('', views.DetailHistoryLog.as_view())
]