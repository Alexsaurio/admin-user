
# Administraci贸n de usuarios 馃搼.

Aplicaci贸n encargada de la administraci贸n de usuarios, as铆 como, mostrar sus posts que contiene cada uno de estos.


## Caracter铆sticas.

- Inicio de sesi贸n del usuario.
- Registro de usuario.
- Visualizaci贸n del listado de usuario.
- Edici贸n de la informaci贸n del usuario.
- Visualizaci贸n del listado de posts del usuario.
- Elimiaci贸n de posts del usuario seleccionado.

  
## Ejecutar localmente 馃捇.

Clonar proyecto del repositorio.

```bash
  git clone https://github.com/Alexsaurio/admin-user
```

Dirigirse al directorio del proyecto.

```bash
  cd admin-user
```

Instalar dependencias del proyecto.

```bash
  npm install
```

Iniciar el servidor localmente.

```bash
  npm run start
  -------------
  ng serve
```

  
## Variables de entorno.

Este proyecto contiene variables de entorno las cuales son usadas dentro de los servicios construidos.

`urlUSer: https://reqres.in/api/`

`urlPost: https://jsonplaceholder.typicode.com/`


## sessionStorage.

El proyecto almacena algunos datos dentro del `sessionStorage` que son los siguiente:

`token: sessionStorage.getItem('token');` retorna una cadena de texto.

`isAuth: sessionStorage.getItem('isAuth');` retorna un cadena con el valor 'success' si esta autentificado.

  
## Referencias de la API de usuarios.

url API: [https://reqres.in/](https://reqres.in/)

Servicios utilizados:
- userService
- authService

#### Obtener todos los usuarios por p谩gina.

```http
  GET /api/users?page=${page}
```

| Par谩metro | Tipo     | Descripci贸n                   |
| :-------- | :------- | :---------------------------- |
| `page`    | `number` | n煤mero de p谩gina de usuarios. |


#### f getUserPage(page: number)

Recibe entero con el n煤mero de la p谩gina a consultar lo que retorna la informaci贸n.

#### Obtener los datos de un usuario.

```http
  GET /api/users/${userId}
```

| Par谩metro | Tipo     | Descripci贸n                       |
| :-------- | :------- | :-------------------------------- |
| `userId`  | `number` | id del usuario seleccionado.      | 


#### f getUserDetail(userId: number)

Recibe entero con el id del usuario para obtener su informaci贸n detallada.


#### Actualizar la informaci贸n de un usuario.

```http
  PUT /api/users/${idUSer}
```

| Par谩metro  | Tipo     | Descripci贸n                       |
| :--------- | :------- | :-------------------------------- |
| `idUSer`   | `number` | id del usuario seleccionado.      | 
| `name`     | `string` | nombre del usuario.               |
| `job`      | `string` | trabajo del usuario.              |


#### f putUserDetail(userId: number, objUser)

Recibe el id del usuario a editar junto con sus nuevos datos.

```javascript
  const objUser =   {
      "name": "morpheus",
      "job": "zion resident"
  }
```

#### Inicio de sesi贸n de usuario.

```http
  POST /api/login
```

| Par谩metro    | Tipo     | Descripci贸n                       |
| :----------- | :------- | :-------------------------------- |
| `email`      | `string` | email para el inicio de sesi贸n.  |
| `password`   | `string` | contrase帽a del emial seleccionado.|


#### f login(logObj)

Recibe el objeto con las credenciales del usuario que solicita el inicio de sesi贸n.

```javascript
  const logObj =   {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  } 
```

#### Registra un nuevo usuario.

```http
  POST /api/register
```

| Par谩metro    | Tipo     | Descripci贸n                       |
| :----------- | :------- | :-------------------------------- |
| `email`      | `string` | email para el inicio de sesi贸n.  |
| `password`   | `string` | contrase帽a del email seleccionado.|


#### f register(logObj)

Recibe el objeto con las credenciales del nuevo usuario que solicita su registro.

```javascript
  const logObj =   {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  } 
```

## Referencias de la API de posts.


url API: [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

Servicios utilizados: 
- userService.

#### Obtener todos los posts de un usuario.

```http
  GET /posts?userId=${userId}
```

| Par谩metro | Tipo     | Descripci贸n                   |
| :-------- | :------- | :---------------------------- |
| `userId`  | `number` | id del usuario seleccionado.  |


#### f getUserPosts(userId: number)

Recibe el id del usuario para retornar un array con sus posts creados.


#### Eliminar un posts de un usuario.

```http
  DELETE /posts/${postId}
```

| Par谩metro | Tipo     | Descripci贸n                   |
| :-------- | :------- | :---------------------------- |
| `postId`  | `number` | id de un post del usuario.    |


#### f deleteUserPost(postId: number)

Recibe el id del post para eliminar el registro seleccionado.

  ## Referencias de color 馃馃徏.

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Grey 1 | ![#444747](https://via.placeholder.com/10/444747?text=+) #444747 |
| Grey 2 | ![#333434](https://via.placeholder.com/10/333434?text=+) #333434 |
| Grey 3 | ![#ebebeb](https://via.placeholder.com/10/#ebebeb?text=+) #ebebeb |
| Grey 4 | ![#eeeeee](https://via.placeholder.com/10/eeeeee?text=+) #eee |
| Pink | ![#f8f8f8](https://via.placeholder.com/10/e91e63?text=+) #e91e63 |
| White | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |
| Black | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |


## Tecnolog铆as.

**Frontend:** Angular, SASS, angular-material.

