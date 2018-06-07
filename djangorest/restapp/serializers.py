from rest_framework import serializers
from restapp.models import Empresa, TipoExcursion, Excursion, Nacionalidad, Turista, TipoDenuncia, Denunciante, Denuncia

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = ('id', 'nombre', 'direccion')

class TipoExcursionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoExcursion
        fields = ('id', 'nombre')

class NacionalidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nacionalidad
        fields = ('id', 'nombre')

class TuristaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turista
        fields = ('id', 'nombre','apellido','nacionalidad','nro_documento')

class ExcursionSerializer(serializers.ModelSerializer):
    turistas = TuristaSerializer(read_only=True, many=True)
    print("*************************")
    #print(turistas)
    class Meta:
        model = Excursion
        fields = ('id', 'nombre','descripcion','precio_por_persona','cantidad_minima_personas','cantidad_maxima_personas','empresa','tipo','fecha','hora','turistas')

class TipoDenunciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoDenuncia
        fields = ('id', 'nombre')

class DenuncianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Denunciante
        fields = ('id', 'nombre','apellido','nro_documento','sexo')

class DenunciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Denuncia
        fields = ('id', 'fecha','tipo_denuncia','descripcion','direccion', 'comisaria', 'denunciante')