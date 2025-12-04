from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from app.models.cardapio import Cardapio
from app.Serializer.CardapioSerializer import CardapioSerializer

class CardapioViews(APIView):
    
    def get(self):
        try:
            dadosBolos = Cardapio.objects.filter(tipo='bolo').all()
            dadosCupcakes = Cardapio.objects.filter(tipo='cupcake').all()
            dadosTrufas = Cardapio.objects.filter(tipo='trufas').all()
            dados = {
                'dadosBolos': CardapioSerializer(dadosBolos, many=True).data,
                'dadosCupcakes': CardapioSerializer(dadosCupcakes, many=True).data,
                'dadosTrufas': CardapioSerializer(dadosTrufas, many=True).data,
            }
            return Response({"cardapioDados": dados})
        except Exception as e:
            return Response({'erro': 'Erro ao buscar cardapio', 'detail': str(e)}, status=500)

    def post(self):
        pass