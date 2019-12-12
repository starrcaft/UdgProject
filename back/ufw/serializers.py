from rest_framework import serializers
from .models import Log, HistoryLog, LastLog, LastBLog

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

class LastLogSerializers(serializers.ModelSerializer) :
    class Meta :
        fields = (
            'user',
            'pts',
            'srcIP',
            'date',
        )

        model = LastLog

class LastbLogSerializers(serializers.ModelSerializer) :
    class Meta :
        fields = (
            'user',
            'protocol',
            'srcIP',
            'date',
        )

        model = LastBLog

