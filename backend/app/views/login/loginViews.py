from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from app.models.user import Usuario
from app.Serializer.login.LoginSerializer import UsuarioSerializer
from django.contrib.auth import login, logout


class LoginViews(APIView):

    def post(self, request):
        try:
            dadosUser = UsuarioSerializer(data=request.data)
            if dadosUser.is_valid():
                email = dadosUser.validated_data['email']
                senha = dadosUser.validated_data['password']
                user = Usuario.authenticate(email, senha)
                if user:
                    request.session['user_id'] = user.id
                    login(request, user)
                    return Response({"mensagem":"Login feito com sucesso"}, status=200)
                else:
                    return Response({"mensagem":"Erro ao fazer login, credencias errada."},status=404)
        except Exception as e:
            return Response({'mensagem':'Erro interno ao servidor' , 'detail': str(e)}, status=500)