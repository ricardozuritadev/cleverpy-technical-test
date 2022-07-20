<h1 align="center">Plataforma para administrar posts de usuarios</h1>

![app-title](https://user-images.githubusercontent.com/84975927/179807847-28e9c973-15c3-4d3c-a613-a2810807892a.png)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)


## Índice

* [Descripción del proyecto](#descripción-del-proyecto)

* [Instalación](#instalación)

* [Características del proyecto y demostración](#características-del-proyecto-y-demostración)

* [Tecnologías y librerías utilizadas](#tecnologías-y-librerías-utilizadas)

* [Autor](#autor)

## Descripción del proyecto
Proyecto frontend que consiste en un dashboard para la administración de posts realizados por usuarios. Esta plataforma permite a un administrador visualizar, editar o eliminar los posts de los usuarios. Los datos son consumidos de la API gratuita http://jsonplaceholder.typicode.com/
Tiene también un sistema de autenticación y autorización de usuarios administradores. Actualmente no está conectado a ningún servidor backend pero se implementará en la siguiente versión.

## Instalación
El proyecto ha sido desplegado en Vercel y se puede acceder en la siguiente URL:

https://posts-management-dashboard.vercel.app/

Para ejecutarlo en local, clonar el repositorio e instalar las dependencias con el comando:
~~~
npm i
~~~

## Características del proyecto y demostración
![p1](https://user-images.githubusercontent.com/84975927/179972353-4a8a06a3-8839-4eef-a438-7758617b29e5.gif)

![p2](https://user-images.githubusercontent.com/84975927/179972369-005c9be0-a07b-42f6-b1f3-984df22aad42.gif)

![p4](https://user-images.githubusercontent.com/84975927/179972393-bfbfa169-2648-456a-b836-b55e86d831f0.gif)


## :hammer:Funcionalidades del proyecto

- `Pantalla de login`: Se puede ingresar con cualquier dato ya que aún no está conectado al backend de auth.
- `Selector de idioma`: Se puede elegir el idioma en el que se muestra la webapp. Por el momento hay disponibles inglés y español pero se puede ampliar a los idiomas que sean necesarios.
- `Viusalización de posts`: El administrador puede visualizar el título y el contenido de los posts creados por un usuario en la pestaña "Manage posts"
- `Eliminar posts`: El administrador puede elminiar los posts de un usuario en concreto (esta modificación no es persistente, es sólo a nivel de cliente).
- `Editar posts`: El administrador puede editar el título y el contenido de los posts (esta modificación no es persistente, es sólo a nivel de cliente).
- `Visualización de usuarios`: El administrador puede ver todos los usuarios que han posteado, y puede filtrarlos utilizando la barra de búsqueda del menú.
- `Página de perfil`: El administrador puede ve su perfil en la sección "My profile"
- `Logout`: El administrador puede cerrar sesión haciendo click en el icono para cerrar sesión.

## Tecnologías y librerías utilizadas

* React JS

* TypeScript

* Sass

* Axios

* React router dom V6

* React hook form

* i18next React

* FontAwesome

* SweetAlert2

* Metodología BEM para nombrar clases

## Autor
[<img src="https://avatars.githubusercontent.com/u/84975927?v=4" width=115><br><sub>Ricardo Zurita</sub>](https://github.com/ricardozuritadev)
