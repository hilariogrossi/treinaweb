from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def home(request):
    return JsonResponse(
        {'Nome': 'Hilario Grossi de Oliveira',
        'Idade': 52,
        }
    )
