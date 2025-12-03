from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from app.models.cardapio import Cardapio
from app.Serializer.CardapioSerializer import CardapioSerializer

class CardapioViews(APIView):
    
    def get():
        try:
            dadosBolos = Cardapio.objects.filter(tipo='bolo').all()
            dadosChocolates = Cardapio.objects.filter(tipo='chocolate').all()
            dadosDocinhos = Cardapio.objects.filter(tipo='doce').all()
            dados = {
                'dadosBolos': CardapioSerializer(dadosBolos, many=True).data,
                'dadosChocolates': CardapioSerializer(dadosChocolates, many=True).data,
                'dadosDocinhos': CardapioSerializer(dadosDocinhos, many=True).data,
            }
            return Response({"cardapioDados": dados})
        except Exception as e:
            return Response({'erro': 'Erro ao buscar cardapio', 'detail': str(e)}, status=500)

    def post():
        pass