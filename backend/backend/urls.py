from django.contrib import admin
from django.urls import path, include
from app.urls.cardapioUrls import urlpatterns as urlCardapio
from app.urls.loginUrls import urlpatterns as urlLogin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cardapio/',include(urlCardapio)),
    path('login/', include(urlLogin)),
]
