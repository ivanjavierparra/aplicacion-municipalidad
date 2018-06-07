from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from restapp.models import Empresa, TipoExcursion, Excursion, Nacionalidad, Turista, Excursion, TipoDenuncia, Denunciante, Denuncia
from restapp.serializers import EmpresaSerializer, TipoExcursionSerializer, NacionalidadSerializer, TuristaSerializer, ExcursionSerializer, TipoDenunciaSerializer, DenuncianteSerializer, DenunciaSerializer

# Create your views here.

################################### Empresa ###################################
@csrf_exempt
def empresa_list(request):
    """
    Lista todas las empresas o crea una nueva.
    """
    if request.method == 'GET':
        empresas = Empresa.objects.all()
        serializer = EmpresaSerializer(empresas, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        print("************inicio**********")
        print(request)
        print("************fin**********")
        data = JSONParser().parse(request)
        serializer = EmpresaSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def empresa_detail(request, id):
    """
    Devuelve, actualiza o borra una empresa.
    """
    try:
        empresa = Empresa.objects.get(id=id)
    except Empresa.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = EmpresaSerializer(empresa)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        print("********PUT*************")
        data = JSONParser().parse(request)
        serializer = EmpresaSerializer(empresa, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        empresa.delete()
        return HttpResponse(status=204)

################################### Tipo Excursion ###################################

@csrf_exempt
def tipo_excursion_list(request):
    """
    Lista todos los tipos de excursion o crea uno nuevo.
    """
    if request.method == 'GET':
        tipos_excursion = TipoExcursion.objects.all()
        serializer = TipoExcursionSerializer(tipos_excursion, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TipoExcursionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400) 

@csrf_exempt
def tipo_excursion_detail(request, id):
    """
    Devuelve, actualiza o borra un tipo de excursión.
    """
    try:
        tipo_excursion = TipoExcursion.objects.get(id=id)
    except TipoExcursion.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = TipoExcursionSerializer(tipo_excursion)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        print("********PUT*************")
        data = JSONParser().parse(request)
        serializer = TipoExcursionSerializer(tipo_excursion, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        tipo_excursion.delete()
        return HttpResponse(status=204)


################################### Nacionalidad ###################################

@csrf_exempt
def nacionalidad_list(request):
    """
    Lista todos las nacionalidades o crea una nuevo.
    """
    if request.method == 'GET':
        nacionalidades = Nacionalidad.objects.all()
        serializer = NacionalidadSerializer(nacionalidades, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = NacionalidadSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400) 

@csrf_exempt
def nacionalidad_detail(request, id):
    """
    Devuelve, actualiza o borra una nacionalidad.
    """
    try:
        nacionalidad = Nacionalidad.objects.get(id=id)
    except Nacionalidad.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = NacionalidadSerializer(nacionalidad)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        print("********PUT*************")
        data = JSONParser().parse(request)
        serializer = NacionalidadSerializer(nacionalidad, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        nacionalidad.delete()
        return HttpResponse(status=204)


################################### Turista ###################################

@csrf_exempt
def turista_list(request):
    """
    Lista todos los turistas o crea una nuevo.
    """
    if request.method == 'GET':
        turistas = Turista.objects.all()
        serializer = TuristaSerializer(turistas, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TuristaSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400) 

@csrf_exempt
def turista_detail(request, id):
    """
    Devuelve, actualiza o borra un turista.
    """
    try:
        turista = Turista.objects.get(id=id)
    except Turista.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = TuristaSerializer(turista)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        print("********PUT*************")
        data = JSONParser().parse(request)
        serializer = TuristaSerializer(turista, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        turista.delete()
        return HttpResponse(status=204)

################################### Excursion ###################################

@csrf_exempt
def excursion_list(request):
    """
    Lista todas las excursiones o crea una nuevo.
    """
    if request.method == 'GET':
        excursiones = Excursion.objects.all()
        serializer = ExcursionSerializer(excursiones, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ExcursionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400) 

@csrf_exempt
def excursion_detail(request, id):
    """
    Devuelve, actualiza o borra una excursion.
    """
    try:
        excursion = Excursion.objects.get(id=id)
    except Excursion.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = ExcursionSerializer(excursion)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        print("********PUT*************")
        data = JSONParser().parse(request)
        serializer = ExcursionSerializer(excursion, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        excursion.delete()
        return HttpResponse(status=204)


################################### Tipo Denuncia ###################################

@csrf_exempt
def tipo_denuncia_list(request):
    """
    Lista todos los tipos de denuncia o crea una nuevo.
    """
    if request.method == 'GET':
        tipos_denuncias = TipoDenuncia.objects.all()
        serializer = TipoDenunciaSerializer(tipos_denuncias, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TipoDenunciaSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400) 

@csrf_exempt
def tipo_denuncia_detail(request, id):
    """
    Devuelve, actualiza o borra un tipo de denuncia.
    """
    try:
        tipo_denuncia = TipoDenuncia.objects.get(id=id)
    except TipoDenuncia.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = TipoDenunciaSerializer(tipo_denuncia)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        print("********PUT*************")
        data = JSONParser().parse(request)
        serializer = TipoDenunciaSerializer(tipo_denuncia, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        tipo_denuncia.delete()
        return HttpResponse(status=204)



################################### Denunciante ###################################

@csrf_exempt
def denunciante_list(request):
    """
    Lista todos los denunciantes o crea una nuevo.
    """
    if request.method == 'GET':
        denunciantes = Denunciante.objects.all()
        serializer = DenuncianteSerializer(denunciantes, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = DenuncianteSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400) 

@csrf_exempt
def denunciante_detail(request, id):
    """
    Devuelve, actualiza o borra un denunciante.
    """
    try:
        denunciante = Denunciante.objects.get(id=id)
    except Denunciante.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = DenuncianteSerializer(denunciante)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        print("********PUT*************")
        data = JSONParser().parse(request)
        serializer = DenuncianteSerializer(denunciante, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        denunciante.delete()
        return HttpResponse(status=204)

################################### Denuncia ###################################

@csrf_exempt
def denuncia_list(request):
    """
    Lista todas las denuncias o crea una nueva.
    """
    if request.method == 'GET':
        denuncias = Denuncia.objects.all()
        serializer = DenunciaSerializer(denuncias, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = DenunciaSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400) 

@csrf_exempt
def denuncia_detail(request, id):
    """
    Devuelve, actualiza o borra una denuncia.
    """
    try:
        denuncia = Denuncia.objects.get(id=id)
    except Denuncia.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = DenunciaSerializer(denuncia)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        print("********PUT*************")
        data = JSONParser().parse(request)
        serializer = DenunciaSerializer(denuncia, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        denuncia.delete()
        return HttpResponse(status=204)
