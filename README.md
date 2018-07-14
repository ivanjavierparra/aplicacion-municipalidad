# 3er Trabajo de Aplicaciones Web: Aplicación Municipalidad
## Licenciatura en Sistemas 
## UNPSJB - Facultad de Ingeniería - Sede Trelew 

En este trabajo se implementó una aplicación web para una municipalidad ficticia. La misma ofrece una serie de gráficos, tablas e indicadores acerca de: infracciones de tránsito, denuncias, atenciones médicas, hotelerías y excursiones turísticas.

Se implementó, además, una API REST. 
Para llevar a cabo el trabajo se utilizó:
1. MEANJS: descargamos el proyecto desde su página oficial: http://meanjs.org/
Aquí implementamos tanto un servidor como un cliente, utiizando el Stack MEAN. Este servidor en NodeJS y MongoDB se encarga de gestionar las atenciones médicas. El cliente en angularjs se comunica con este sewrvidor y con los dos restantes a través de una api rest.
2. Laravel: aquí implementamos un servidor en php con MySQL, encargados de gestionar infracciones de tránsito y hotelerías.
3. Django: aquí implementamos un servidor con python y SQLite, encargados de gestionar denuncias y excursiones turísticas.

Para poder ejecutar la aplicación:
1. Ir a la carpeta donde este instalado MongoDB, abrir una terminal allí y escribir: mongod.
2. Abrir XAMPP, y ejecutar PHP y MYSQL.
3. Dentro de la carpeta "laravelRest", abrir una terminal y ejecutar: php artisan serve
4. Ir a la carpeta "djangoRest", abrir una terminal y ejecutar: python manage.py runserver 8080
5. Ir a la carpeta "meanjs-mean-9ecbbfa", abrir una terminal y ejecutar: gulp
6. En http://localhost:3000/ se encuentra la aplicación en ejecución.
7. Nota: Para que la aplicación funcione debe estar habilitado el CORS (Cross-origin resource sharing - Intercambio de recursos de origen cruzado). Nosotros usamos la siguiente extensión para Chrome: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

Integrantes del grupo:
- De Marco, Emiliano.
- Parra, Iván Javier.

## Pantalla Principal
<img src="/docs/logo.png" alt="My cool logo"/>
