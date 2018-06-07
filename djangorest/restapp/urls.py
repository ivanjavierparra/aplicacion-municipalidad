from django.urls import path, include
from restapp import views
#from restapp.views import empresa_list

urlpatterns = [
    path('api/empresas/', views.empresa_list),
    path('api/empresas/<int:id>/', views.empresa_detail),
    path('api/excursiones/tipos/', views.tipo_excursion_list),
    path('api/excursiones/tipos/<int:id>/', views.tipo_excursion_detail),
    path('api/turistas/nacionalidades/', views.nacionalidad_list),
    path('api/turistas/nacionalidades/<int:id>/', views.nacionalidad_detail),
    path('api/turistas/', views.turista_list),
    path('api/turistas/<int:id>/', views.turista_detail),
    path('api/excursiones/', views.excursion_list),
    path('api/excursiones/<int:id>/', views.excursion_detail),
    path('api/denuncias/tipos/', views.tipo_denuncia_list),
    path('api/denuncias/tipos/<int:id>/', views.tipo_denuncia_detail),
    path('api/denunciantes/', views.denunciante_list),
    path('api/denunciantes/<int:id>/', views.denunciante_detail),
    path('api/denuncias/', views.denuncia_list),
    path('api/denuncias/<int:id>/', views.denuncia_detail),
]
