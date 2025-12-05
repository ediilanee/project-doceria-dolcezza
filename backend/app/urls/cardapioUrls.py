from django.urls import path
from app.views.cardapio.cardapio import CardapioViews
from app.views.cardapio.inserirCardapio import InserirCardapio

from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('cardapio/', CardapioViews.as_view(), name="cardapio"),
    path('inserirCardapio/', InserirCardapio.as_view(), name="inserirCardapio")
] 
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)