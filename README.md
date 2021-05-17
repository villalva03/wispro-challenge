# Test Frontend Wispro

## Tecnologías aplicadas
El proyecto esta desarrollado con [React](https://reactjs.org/) en el lado del cliente y un servidor básico montado en [nodejs](https://nodejs.org/) utilizando [expressjs](http://expressjs.com/) como framwork del lado del servidor, y [socket.io](https://socket.io/) para la comuncación entre servidor y cliente en tiempo real.  

### Cliente:
* HTML
* ReactJS
* React-hook-form
* React-leaflet
* Recharts
* Bootstrap
* socket.io-client

### Servidor:
* Node v12.18.3
* Express
* Nodemon
* os-utils
* socket.io

## Requerimientos
- Generar un login de usuario con sus correspondientes credenciales.
- Armar una tabla de usuarios con diferentes atributos, la posibilidad de filtrar y ordenar estos atributos.
- Poder editar y eliminar usuarios, para la edición poder levantar un modal.
- Generar un modal para visualizar un gráfico con cantidad de accesos por día en la última semana.
- Generar gráficos en tiempo real via websocket para cpu, memoria y consumo actual de internet.
- Posibilidad de generar un mapa para geolocalizar a los usuarios, poder seleccionar un usuario de la tabla y centrarlo en el mapa, y en caso de eliminar un usuario, que se elimine del mapa.

## Instalación y Compilación

Para levantar un entorno local, hace falta tener instalado [nodejs](https://nodejs.org/) y [npmjs](https://www.npmjs.com/).

Clonar el repositorio, y tanto desde la carpeta "frontend" como desde la carpeta "servidor" ejecutar el siguiente comando para instalar las dependencias:

    $ npm install

El siguiente comando levanta la aplicación en localhost:3000, para ello desde la carpeta "frontend" ejecutar:

    $ npm start

El siguiente comando levanta el servidor en localhost:3001, para ello desde la carpeta "servidor" ejecutar:

    $ npm run dev