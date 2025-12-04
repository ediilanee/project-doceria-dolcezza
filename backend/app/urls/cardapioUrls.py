from django.urls import path
from backend.app.views.cardapio.cardapio import CardapioViews
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('cardapio/', CardapioViews.as_view(), name="cardapio")
] 
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)