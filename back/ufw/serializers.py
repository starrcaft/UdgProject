from rest_framework import serializers
from .models import Log

class UfwLogSerializers(serializers.ModelSerializer) :
    class Meta :
        fields = (
            'srcIP',
            'desIP',
        )
        model = Log