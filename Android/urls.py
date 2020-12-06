from django.urls import path
from Android import views

urlpatterns = [
    path('', views.generate_responsive_android_images, name='android_generate'),
]
