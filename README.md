<h1 align="center">Plataforma para administrar posts de usuarios</h1>

![app-title](https://user-images.githubusercontent.com/84975927/179807847-28e9c973-15c3-4d3c-a613-a2810807892a.png)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)


## Índice

* [Descripción del proyecto](#descripción-del-proyecto)

* [Instalación](#instalacion)

* [Características del proyecto y demostración](#características-del-proyecto-y-demostración)

* [Tecnologías utilizadas](#tecnologías-utilizadas)

* [Conclusión](#conclusión)

## Descripción del proyecto
Proyecto frontend que consiste en un dashboard para la administración de posts realizados por usuarios. Esta plataforma permite a un administrador visualizar, editar o eliminar los posts de los usuarios. Los datos son consumidos de la API gratuita http://jsonplaceholder.typicode.com/
Tiene también un sistema de autenticación y autorización de usuarios administradores. Actualmente no está conectado a ningún servidor backend pero se implementará en la siguiente versión.

## Características del proyecto y demostración
![1](https://user-images.githubusercontent.com/84975927/179815179-0132b8a8-bb5c-4f0d-bcf0-5de8da359fda.gif)
![2](https://user-images.githubusercontent.com/84975927/179815631-08115973-a2de-409f-9edc-2b8710facc55.gif)
![3](https://user-images.githubusercontent.com/84975927/179816027-1ef4efaf-e247-43d0-a91f-2462ca2cb4ad.gif)

## :hammer:Funcionalidades del proyecto

- `Pantalla de login`: Se puede ingresar con cualquier dato ya que aún no está conectado al backend de auth.
- `Viusalización de posts`: El administrador puede visualizar el título y el contenido de los posts creados por un usuario en la pestaña "Manage posts"
- `Eliminar posts`: El administrador puede elminiar los posts de un usuario en concreto (esta modificación no es persistente, es sólo a nivel de cliente).
- `Editar posts`: El administrador puede editar el título y el contenido de los posts (esta modificación no es persistente, es sólo a nivel de cliente).
- `Visualización de usuarios`: El administrador puede ver todos los usuarios que han posteado, y puede filtrarlos utilizando la barra de búsqueda del menú.
- `Página de perfil`: El administrador puede ve su perfil en la sección "My profile"
- `Logout`: El administrador puede cerrar sesión haciendo click en el icono para cerrar sesión.
