from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from .products import products
from .serializer import ProductSerializer
from .models import Products

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response('Hello')

@api_view(['GET'])
def getProducts(request):
    products = Products.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


