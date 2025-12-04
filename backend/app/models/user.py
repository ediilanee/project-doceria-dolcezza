from django.db import models


class Usuario(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100,null=False)
    email = models.CharField(max_length=256,null=False)
    senha = models.CharField(max_length=256,null=False)
    telefone = models.CharField(max_length=12, null=False)
    cidade = models.CharField(max_length=256, null=False)
    bairro = models.CharField(max_length=256, null=False)
    numero = models.IntegerField(null=False)
    complemento = models.TextField(max_length=256, null=False)