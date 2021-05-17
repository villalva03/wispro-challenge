# Test Frontend Wispro

## Tecnologías aplicadas
El proyecto esta desarrollado con [React](https://reactjs.org/) en el lado del cliente y un servidor básico montado en [nodejs](https://nodejs.org/) utilizando [expressjs](http://expressjs.com/) como framwork del lado del servidor, y [socket.io](https://socket.io/) para la comuncación entre servidor y cliente en tiempo real.  

### Cliente:
* HTML
* ReactJS
* React-hook-form
    Es una librería que permite validar formularios en React. Se aplicó esta libreria para la creación del formulario de edición de usuarios y así tener un correcto control de validación de los campos. 
* React-leaflet
    Es una librería que provee a React con componentes para Leaflet. Mediante esta librería se pudo implementar la geolocalización de los diferentes usuarios y a su vez permitir visualizar un usuario seleccionado, como así también poder levantar un modal con los datos del usuario.
* Recharts
    Esta librería nos permite crear gráficos sencillos y ligeros, por lo cual lo implemente para graficar la cantidad de acceso del usuario,y graficar tanto mi cpu como la memoria.     
* Bootstrap
* socket.io-client
    Esto me permite comunicarme bidireccionalmente en tiempo real con el server, así poder graficar en tiempo real el porcentaje de la cpu y memoria. 

### Servidor:
* Node v12.18.3
* Express
* Nodemon
* os-utils
    Esta librería nos brinda utilidades del sistema operativo, para lo cual me fue necesario para obtener información con respecto al uso del cpu y la memoria, pudiendo así, tomar esa informacion y graficarlo.
* socket.io
    Esto me permite comunicarme bidireccionalmente en tiempo real con el cliente, y así mediante la librería os-utils poder enviar la información capturada del cpu y memoria en tiempo real hacia el cliente, y poder graficar dicha información. 

### Json:
    Para los datos de los usuarios fue necesario mockear los datos necesarios y poder utilizarlos en el proyecto. Por ello se creo un archivo **userData.json**.

## Credenciales para Login
    Para poder acceder y probar el sistema se creo un usuario por default.
    **Usuario:** diegol@wispro.com
    **Pass:** admin

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