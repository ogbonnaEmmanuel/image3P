from django.urls import path
from Ios import views

urlpatterns = [
    path('', views.generate_image, name='android_generate'),
]