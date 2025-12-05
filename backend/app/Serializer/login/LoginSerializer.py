from rest_framework import serializers
from app.models.user import Usuario
from django.core.validators import MinLengthValidator

class UsuarioSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(validators=[MinLengthValidator(1,message='Email deve ser com @gmail.com')])
    password = serializers.CharField(validators=[MinLengthValidator(8, message='A senha deve ter pelo menos 8 caracteres')])

    class Meta:
        model = Usuario
        fields = 'email , senha'