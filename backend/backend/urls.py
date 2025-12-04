from django.contrib import admin
from django.urls import path, include
from app.urls.cardapioUrls import urlpatterns as urlCardapio

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cardapio/',include(urlCardapio)),
]
