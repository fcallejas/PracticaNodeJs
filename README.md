# Nodepop

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Servicio a una app (API) de venta de artículos de segunda mano, llamada Nodepop. Con esta API se comunicará tanto la app versión iOS y como la versión Android.

La API permite consultar artículos y aplicar filtros en las busquedas cómo:

  - Lista de anuncios paginada. Con filtros por tag, tipo de anuncio (venta o búsqueda), rango de precio (precio min. y precio max.) y nombre de artículo (que empiece por el dato buscado)
  - Lista de tags existentes

La API tiene autenticación por JWT:
  - Registro (nombre, email, contraseña)
  - Obtener token

Los mensajes de error de la API se pueden obtener en ingles o español enviando en la peticion el lenguaje (es, eng)

> Se pueden agregar más idiomas en el archivo conf/config.js agregando la clave del idioma y la traducción del mensaje

### Tecnologías

La API usa las siguienes tecnologías:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [MongoDB] - Base de datos NO-SQL

### Instalación

Requiere [Node.js](https://nodejs.org/) 
Requiere [MongoDB](https://www.mongodb.com/es) 

Primero crear la Base de datos mongoDB

```sh
$ npm run install_bd
```

Para Arrancar el servidor para la API

```sh
$ nodemon
```

### Ejemplo Peticiones

Todas las peticiones deben tener Content-Type:application/x-www-form-urlencoded

Usuarios (post)

* usaurios/autenticar (indicar email, pass)
* usuarios/crear (indicar nombre, email, pass)

Anuncios (get)

* anuncios/ filtros (tags,venta,precio,nombre,limit,skip,sort,campos)

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [MongoDB]: <https://www.mongodb.com/es>
   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]:  <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>