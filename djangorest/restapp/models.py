from django.db import models
from django.core.validators import MinValueValidator
import datetime

# Create your models here.

class Empresa (models.Model):
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=50)

class TipoExcursion (models.Model):
    nombre = models.CharField(max_length=50)

class Nacionalidad (models.Model):
    nombre = models.CharField(max_length=50)

class Turista (models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    nacionalidad = models.ForeignKey('Nacionalidad', on_delete=models.CASCADE)
    nro_documento = models.PositiveIntegerField(validators=[MinValueValidator(1)],null=True, blank=True)

class Excursion (models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField(max_length=100,null=True, blank=True)
    precio_por_persona = models.FloatField(null=True, blank=True)
    cantidad_minima_personas = models.PositiveIntegerField(validators=[MinValueValidator(1)],null=True, blank=True,default=1)
    cantidad_maxima_personas = models.PositiveIntegerField(validators=[MinValueValidator(1)],null=True, blank=True,default=10)
    empresa = models.ForeignKey('Empresa', on_delete=models.CASCADE)
    tipo = models.ForeignKey('TipoExcursion', on_delete=models.CASCADE)
    fecha = models.DateField()
    hora =  models.TimeField(default=datetime.datetime.now().time(),null=True, blank=True)
    turistas = models.ManyToManyField('Turista')

#class Salida (models.Model):
 #   fecha = models.DateField(default=datetime.date.today())
  #  hora =  models.TimeField(default=datetime.datetime.now().time())
   # turistas = models.ManyToManyField('Turista')
    #excursion = models.ForeignKey('Excursion', on_delete=models.CASCADE)
    #https://www.youtube.com/watch?v=ejJ-2oz4AgI
    #https://www.youtube.com/watch?v=akyIsv5xyBU
    #https://docs.djangoproject.com/en/2.0/ref/models/fields/#timefield
    #http://www.django-rest-framework.org/
    #https://www.paradigmadigital.com/dev/introduccion-django-rest-framework/
    #https://docs.djangoproject.com/es/2.0/intro/tutorial01/
    #https://www.toptal.com/laravel/restful-laravel-api-tutorial


class TipoDenuncia (models.Model):
    nombre = models.CharField(max_length=50)

class Denunciante (models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    nro_documento = models.PositiveIntegerField(validators=[MinValueValidator(1)])
    sexo = models.CharField(max_length=50)

class Denuncia (models.Model):
    fecha = models.DateField(default=datetime.date.today)
    tipo_denuncia = models.ForeignKey('TipoDenuncia', on_delete=models.CASCADE)
    descripcion = models.TextField(max_length=200,null=True, blank=True)
    direccion = models.CharField(max_length=50)
    comisaria = models.CharField(max_length=50,null=True, blank=True, default="Comisaria 1")
    denunciante = models.ForeignKey('Denunciante', on_delete=models.CASCADE)