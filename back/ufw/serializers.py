from rest_framework import serializers
from .models import Log, HistoryLog

class UfwLogSerializers(serializers.ModelSerializer) :
    class Meta :
        fields = (
            'srcIP',
            'desIP',
        )
        model = Log

class HistoryLogSerializers(serializers.ModelSerializer) :
    class Meta :
        fields = (
            'date',
            'cmd',
        )

        model = HistoryLog