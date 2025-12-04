from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from app.models.cardapio import Cardapio
from app.Serializer.CardapioSerializer import CardapioSerializer


class InserirCardapio(APIView):

    def post(self , request):
        iduser = request.session.get('user_id')
        if 'id_user' not in request.session:
            return Response({"mensagem":"Faça login antes de publicar"})
        dadosCardapio = CardapioSerializer(data=request.data)
        try:
            if dadosCardapio.is_valid():
                novoItemCardapio = dadosCardapio.validated_data
                novoItemCardapio['id_user'] = iduser
                Cardapio.objects.create(**novoItemCardapio)
                return Response({"mensagem":"Novo item do cardapio adicionado"})
            else:
                return Response({'mensagem':'Não foi possivel publicar'})
        except:
            return Response({'mensagem':'Não foi possivel publicar'})