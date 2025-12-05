from django.urls import path
from app.views.login.loginViews import LoginViews

urlpatterns = [
    path('login/', LoginViews.as_view(), name="login")
] 