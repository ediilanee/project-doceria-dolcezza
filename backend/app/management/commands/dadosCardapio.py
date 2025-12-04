from django.core.management.base import BaseCommand
from app.models.cardapio import Cardapio

# criando um banco de dados de teste
# do cardapio
class Command(BaseCommand):
    help = 'Criando o banco de dados com itens do cardápio'

    def handle(self, *args, **kwargs):
        itens = [
            {
                "titulo": "Bolo de Chocolate",
                "chef": "Chef Ana",
                "preco": 29.90,
                "imagem": "cardapio/bolofrutasvermelhas.png",
                "tipo": "bolo"
            },
            {
                "titulo": "Brigadeiro Gourmet",
                "chef": "Chef Carlos",
                "preco": 4.50,
                "imagem": "cardapio/trufasdenutela.png",
                "tipo": "trufa"
            },
            {
                "titulo": "Cupcake Red Velvet",
                "chef": "Chef Maria",
                "preco": 12.00,
                "imagem": "cardapio/paçoca.png",
                "tipo": "cupcake"
            },
            {
                "titulo": "Bolo de Morango",
                "chef": "Chef Lucas",
                "preco": 25.20,
                "imagem": "cardapio/bolovermelho.png",
                "tipo": "bolo"
            },
            {
                "titulo": "Doce de leite",
                "chef": "Chef Felipe",
                "preco": 3.50,
                "imagem": "cardapio/trufasdenutela.png",
                "tipo": "trufa"
            },
            {
                "titulo": "Cupcake Frutas",
                "chef": "Chef Edilane",
                "preco": 9.00,
                "imagem": "cardapio/prestigio.png",
                "tipo": "cupcake"
            },
        ]

        for item in itens:
            Cardapio.objects.create(**item)

        self.stdout.write(self.style.SUCCESS('Banco de dados criado com sucesso!'))

# python manage.py dadosCardapio