from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from app.models.cardapio import Cardapio
from app.Serializer.cardapio.CardapioSerializer import CardapioSerializer
from django_ratelimit.decorators import ratelimit


# baixar limite de taxa = pip install django-ratelimit

class CardapioViews(APIView):
    
    #@ratelimit(key='ip', rate='10/m') # limita a 10 requisição por minutos

    def get(self, request, *args, **kwargs):
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