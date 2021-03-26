# Prueba técnica para Tribal

Esta es una pequeña aplicación hecha para una entrevista técnica de trabajo. Es una aplicación de ruby on rails donde el usuario puede ver los perfiles de distintos restaurantes y publicar un comentario en cada uno. En el detalle de la información de cada restaurante se muestra los comentarios de éste, del más nuevo al mas viejo.

## Desarrollado con

- Ruby
- Ruby on Rails
- React.js

## Cómo desplegar

- Para desplegar el proyecto en la máquina local, debe primero crear un usuario en postgres llamado railsdb. Guarde la contraseña del usuario de postgres en una variable del entorno llamada RAILSDB_DATABASE_PASSWORD.

- Despues de ello, debe crear la base de datos con ruby on rails

```
$ rails db:create 
```

- Luego migre la base de datos

```
$ rails db:migrate
```

- Ya que este es un proyecto de prueba, se utilizaron datos predeterminados en lugar de llenarlos con una cuenta de administrador. Utilice la semilla proveída utilizando el siguiente comando
```
$ rails db:seed 
```
- Por ultimo, ejecute el servidor de ruby on rails
```
$ rails server
```

## Autor

👤 **Miguel Dubois**

- Github: [@MiguelDP4](https://github.com/MiguelDP4)
- Twitter: [@Mike_DP4](https://twitter.com/Mike_DP4)
- LinkedIn [Miguel Dubois](https://www.linkedin.com/in/miguel-angel-dubois)

## Demo

Puede ver el demo en linea utilizando este [link](https://restaurant-ranker.herokuapp.com/)

## API

El API de esta aplicación es bastante pequeño, utiliza sólo 4 solicitudes. A continuación encontrará el formato de cada una.

### Lista de todos los restaurantes

- Endpoint: "/api/restaurants"

La solicitud GET retornará un arreglo de restaurantes. Cada restaurante tiene el siguiente formato JSON:
```
{
  "id": <integer>,
  "nameId": <string>,
  "name": <string>,
  "description": <string>
}
```

- Endpoint "api/restaurants/<restaurant_id>"

Esta solicitud GET retornará el mismo formato JSON que el endpoint anterior. Retornará sólo la información del restaurante con el ID correspondiente.

- Endpoint "api/restaurant/<restaurant_id>/comments"

Esta solicitud GET retornará con un arreglo de comentarios con la ID del restaurante correspondiente. Cada comentario tiene el siguiente formato JSON: 
}

```
{
  "id": <integer>,
  "name": <string>,
  "content": <string>
}
```

- Endpoint "api/restaurant/<restaurant_id>/comment"

Esta solicitud POST espera recibir un json con el siguiente formato

```
{
  "name": <integer>,
  "content": <integer>
}
```
Al recibir la información, la guardará en la base de datos y devolverá un JSON con el mismo formato que los comentarios.

## Solución a la prueba

Se me solicitó un documento explicativo de mi acercamiento a la solución de la prueba. Intentaré ser conciso:

Se solicitó una aplicación utilizando Ruby on Rails, usando el webpacker de React.js. Creé un nuevo proyecto de ruby on rails utilizando la opción de webpacker indicada

```
rails new react-app --webpack=react
```

Empecé por crear los componentes de react que consideré necesarios. Uno para los restaurantes, uno para el detalle de los restaurantes y uno para el formulario de comentarios.

Hice un modelo para la tabla de restaurantes y un modelo para la tabla de comentarios. No hice usuarios ya que no fue indicado como necesario. Hice un controlador de ruby on rails para la pagina principal, y desde ella usé react-rails para renderizar el componente principal de la aplicación de react.

NOTA: react-rails es una gema que simplifica el renderizado de los componentes en los documentos .erb.

Utilicé el controlador de ruby on rails para generar vistas que renderizarían un JSON. Utilizo esto para mostrar la información necesaria en el front end.

Para las llamadas asíncronas utilizo axios, ya que react no está equipado para manejar código asíncrono.