from django.urls import path
from . import views

urlpatterns = [
    #path('', views.DetailLog.as_view()),
    path('last/', views.DetailLastLog.as_view()),
    path('history/', views.DetailHistoryLog.as_view()),
    path('lastB/', views.DetailLastbLog.as_view()),
]