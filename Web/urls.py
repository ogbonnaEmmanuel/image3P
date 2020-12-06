from django.urls import path

from Web import views

urlpatterns = [
    path('', views.get_request_to_process, name='android_generate'),
]
