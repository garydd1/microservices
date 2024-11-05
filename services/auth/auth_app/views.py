from django.shortcuts import render
import json

# Create your views here.

def base_view(request):
	contexto_ = {
		'titulo': 'Página de Inicio',
		'descripcion': 'Bienvenido a la página de inicio de nuestro sitio web.'
	}
    # print('request_', request)
	
	if request.method == 'POST':
		# Leer el cuerpo de la solicitud
		body_unicode = request.body.decode('utf-8')
		body_data = json.loads(body_unicode)  # Convertir el JSON en un diccionario

		print('body_data', body_data)
	return render(request, 'base.html', contexto_)  # Renderiza la plantilla index.html
