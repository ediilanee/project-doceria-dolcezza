from django.core.management.base import BaseCommand
from app.models.user import Usuario , DadosUsuario

# criando um banco de dados de teste
# do usuario
usuarios = [
    {
        "nome": "Kaua Neclon",
        "email": "kaua1234@gmail.com",
        "senha": "kaua1234",
        "telefone": "123456789",
        "cidade": "Vitoria",
        "bairro": "morro do moreno",
        "numero": 123,
        "complemento": "slalaa"
    },
]

# inserindo os dados
for u in usuarios:
    Usuario.objects.create(**u)