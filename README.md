# TODO list

 El proyecto crea una base de datos con dos tablas: users y tasks.

 Tiene los siguientes endpoints:
  - Para crear un usuario: POST /auth/register
  - Para hacer login: POST /auth/login
  - Para crear una tarea: POST /todolist
  - Para obtener todas las tareas de un usuario en particular: GET /todolist/userId/:userId
  - Para obtener un tarea específica, dado su identificador único: GET /todolist/taskId/:id
  - Para actualizar los detalles de una tarea existente: PUT /todolist/taskId/:id
  - Para borrar una tarea dado su identificador único: DELETE /todolist/taskId/:id

## Construido con 
 
* [Node.js](https://nodejs.org/) - El entorno de ejecución de JavaScript. 
* [Express](https://expressjs.com/) - El framework web utilizado. 
* [Sequelize](https://sequelize.org/) - El ORM utilizado para la gestión de la base de datos. 