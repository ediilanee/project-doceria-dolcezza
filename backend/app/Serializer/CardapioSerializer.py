from rest_framework import serializers
from app.models.cardapio import Cardapio

class CardapioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cardapio
        fields = '__all__'
