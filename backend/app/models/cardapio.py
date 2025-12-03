from django.db import models



class Cardapio(models.Model):
    id = models.AutoField(primary_key=True)
    titulo = models.CharField(null=False)
    descricao = models.CharField(null=False)
    chef = models.CharField(null=False)
    preco = models.FloatField(null=False)
    imagem = models.ImageField(upload_to='cardapio',blank=True,null=True)
    tipo = models.CharField(null=False)