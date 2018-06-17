from django.urls import path, include
from restapp import views
#from restapp.views import empresa_list

urlpatterns = [
    #crud empresas
    path('api/empresas/', views.empresa_list),
    path('api/empresas/<int:id>/', views.empresa_detail),
    #crud tipo de excursiones
    path('api/tiposexcursiones/', views.tipo_excursion_list),
    path('api/tiposexcursiones/<int:id>/', views.tipo_excursion_detail),
    #crud nacionalidades
    path('api/turistas/nacionalidades/', views.nacionalidad_list),
    path('api/turistas/nacionalidades/<int:id>/', views.nacionalidad_detail),
    #crud turistas
    path('api/turistas/', views.turista_list),
    path('api/turistas/<int:id>/', views.turista_detail),
    #crud excursiones
    path('api/excursiones/', views.excursion_list),
    path('api/excursiones/<int:id>/', views.excursion_detail),
    #filtros excursiones
    path('api/excursiones/tipos/<int:id>/', views.excursion_tipos), #todas las excursiones de un tipo de excursion
    #crud tipos denuncias
    path('api/tiposdenuncias/', views.tipo_denuncia_list),
    path('api/tiposdenuncias/<int:id>/', views.tipo_denuncia_detail),
    #crud denunciantes
    path('api/denunciantes/', views.denunciante_list),
    path('api/denunciantes/<int:id>/', views.denunciante_detail),
    #crud denuncias
    path('api/denuncias/', views.denuncia_list),
    path('api/denuncias/<int:id>/', views.denuncia_detail),
    #filtros denuncias
    path('api/denuncias/<int:id>/denunciantes/', views.denuncia_detail_denunciantes), #denunciante de una denuncia
    path('api/denuncias/denunciantes/<int:id>/', views.denuncia_denunciante), #todos las denuncias de un denunciante
    path('api/denuncias/tipos/<int:id>/', views.denuncia_tipos), #todas las denuncias de un tipo de denuncia
]
