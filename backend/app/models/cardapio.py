from django.db import models



class Cardapio(models.Model):
    TIPO_CHOICES = [
        ('trufa', 'Trufa'),
        ('bolo', 'Bolo'),
        ('cupcake', 'Cupcake'),
    ]
    id = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=200,null=False)
    chef = models.CharField(max_length=50,null=False)
    preco = models.FloatField(null=False)
    imagem = models.ImageField(upload_to='cardapio/',blank=True,null=True)
    tipo = models.CharField(max_length=20, choices=TIPO_CHOICES, null=False)