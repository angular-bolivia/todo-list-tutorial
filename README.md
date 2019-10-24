# Tutorial Lista de Tareas - ngGirls Bolivia
 
En este tutorial, te llevaremos de viaje a las entrañas de la tecnología web, para que veas todas las piezas que se necesitan para construir una web funcional.
 
Como pasa con todas las cosas nuevas va a ser una aventura, diviértete, una vez que te has decidido a empezar, te va a ir fenomenal :)
 
## Primera parte
 
Puedes encontrar la primera parte de este tutorial [aquí](https://ng-girls-bolivia.gitbook.io/workshop/).

## Segunda Parte

Ahora que sabemos crear Tareas llego la hora de eliminar y editar una tarea ya creada.

- Paso 1: Primeramente necesitamos crear una clase llamada tarea, para esto vamos a crear un archivo llamado tarea.model.ts que contendrá nuestra clase Tarea,
 esta clase tendrá dos atributos `detalle` que será de tipo string y `completada` que será de tipo boolean, esta clase también tendrá su función `constructor()`
 con los datos mencionados anteriormente.

   Ejemplo de la clase:

   ![clase Tarea](./recursos-readme/claseTarea.png)

- Paso 2: Ahora toca modificar el archivo app.component.ts para que pueda funcionar con nuestra nueva clase, esta modificación consta de
 los siguientes pasos.

 - Paso 2.1: Importar nuestra clase Tarea
 
      `import { Tarea } from './tarea.model';`
      
 - Paso 2.2: Cambiar el tipo de dato de listaTareas de una lista de Strings a una lista de tareas `listaTareas: Tarea[] = [];`.

 - Paso 2.3: Ahora que listaTareas es una lista de Tareas debemos modificar la función `crearTarea()`.

   - Dentro de la función creamos una variable de tipo Tarea que recibirá como parámetros de creación la variable `nuevaTarea` para el campo
     detalle y `false` en el campo completada del constructor.
   - Una vez creada la tarea esta se añadirá a `listaTarea` con la función `push`.
   - Finalmente cambiamos el valor de la variable `nuevaTarea` a `''`.
  
  Ejemplo:
 
  ![crearTarea](./recursos-readme/crearTarea.png)
  
 - Paso 2.4: Crearemos nuestra función para eliminar una tarea, esta función recibirá como parámetro el índice de la tarea que queremos eliminar
   y con la función `splice` de `listaTarea` eliminaremos la tarea de la lista.
  
   Si deseas conocer mas de la funcion splice podras encontrar la informacion [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice).
  
   Ejemplo:
  
   ![crearTarea](./recursos-readme/eliminarTarea.png)
  
 - Paso 2.5: Crearemos la función para cambiar el valor del atributo `completada` de una tarea, esta función recibe como parámetro la tarea que queremos actualizar
   y le diremos que el atributo `completada` de la tarea será igual al opuesto del valor actual del atributo `completada`.
  
    Ejemplo:
  
    ![crearTarea](./recursos-readme/tareaCompletada.png)
  
- Paso 3: Ahora vamos a editar los archivos app.component.css y styles.css en ellos agregaremos los estilos que necesita nuestro componente para poder visualizarse correctamente.

  - app.componente.css
      
       Aqui añadiremos los siguientes estilos:
       - Estilo de cada tarea `todo-item`
        - Estilo de una tarea completada `tarea=completada`
        - Estilo del texto de una tarea `todo-title`
        - Estilo del caja de actualización de la tarea `todo-checkbox`
  
        ![crearTarea](./recursos-readme/appComponentCss.png)
       
  - styles.css
       
        Aquí añadiremos los estilos de nuestro botón de borrado.
         
       ![crearTarea](./recursos-readme/stylesCss.png)
      
  
- Paso 4: Por último editaremos el archivo app.component.html, esta modificación consta de los siguientes pasos:
  
  - Paso 4.1: en ngFor añadiremos añadiremos el código para obtener el índice de cada tarea.
  
       `<li *ngFor="let tarea of listaTareas; index as indice">`   
  
   - Paso 4.2 Ahora en el lugar del `<label>` donde estaba nuestra tarea pondremos un `<div><div/>` con el class `todo-item` creado anteriormente
     y dentro contendrá lo siguiente:
      - Un input de tipo `checkbox`, como class tendrá nuestro class `todo-checkbox` y como click el método `marcarTareaComoCompletada(tarea)`.
      - Un `<span></span>` que tendrá un ngClass que verificará si el atributo `completada` es `true` o `false`, de ser `true` tendrá la class
        `tarea-completada`, además también tendrá la class `todo-title` y por último mostrara el atributo `detalle` de la tarea.
      - Crearemos un `<label></label>` que contendrá un `<button></button>` con el texto Eliminar, la class `btn` y `btn-red` y por último el click
         `eliminarTarea(indice)`  
  
   ![crearTarea](./recursos-readme/appComponentHtml.png)   
 
  y Finalmente el resultado será el siguiente
 
  ![crearTarea](./recursos-readme/segundaParte.png)

## Tercera Parte: Instalación del entorno
 
Ya tenemos nuestro proyecto creado, pero si deseamos acceder a él debemos tener una conexión a internet. Es en ese momento donde nos preguntamos cómo crear nuestros proyectos sin la necesidad de stackblitz. La solución es Node.js y Angular CLI.
 
## ¿Node.js y Angular CLI?
 
Node.js es un "entorno de ejecución para JavaScript", es decir para ejecutar JavaScript los desarrolladores necesitaban siempre un navegador como Chrome, Firefox entre otros, pero Node.js nos ofrece poderlo ejecutar por ejemplo en un servidor o en tu misma computadora. Cuando descargamos Node.js en nuestro ordenador viene con un gestor de paquetes llamado NPM (Node Package Manager) el cual te permite descargar librerias en cualquier proyecto Javascript.
 
Angular CLI  es una librería JavaScript, su nombre viene de la siglas Command Line Interface (Interfaz de línea de comandos), es decir, usaremos la consola para generar y construir los proyectos Angular.
 
> No le temas a la consola, a medida que pase el tiempo tendrás más confianza y entenderás todos los mensajes en blanco y negro que te aparecerán.
 
Como lo mencionamos anteriormente, Node.js nos permite descargar librerías. Una de ellas es Angular CLI, entonces procederemos a la instalación.
 
## Instalación de Node.js
 
El primer paso para instalar Angular en nuestro entorno es poder instalar Node.js.
 
## Paso 1
Debemos ir a la pagina de Node.js: [pagina de node](https://nodejs.org/es/) y le daremos click en descargar la última versión.
 
![](../todo-list-tutorial/recursos-readme/node.png)
## Paso 2
Se nos descargará un **ejecutable**, lo abriremos, en todos los pasos hacemos click en "siguiente" y ya estará listo.
 
![](../todo-list-tutorial/recursos-readme/nodejs-on-windows-1.png)
![](../todo-list-tutorial/recursos-readme/nodejs-on-windows-2.png)
 
## Paso 3
Para verificar si se instaló correctamente debemos abrir la consola y escribir:
 
> node --version 
 
Debería salir la versión que decía en la página cuando descargamos.
 
![](../todo-list-tutorial/recursos-readme/nodejs-on-windows-3.png)
 
## Instalación de Angular CLI
En la consola escribiremos el siguiente comando, el cual servirá para instalar a nivel global Angular en nuestros ordenadores.
 
> npm install -g @angular/cli
 
# Instalación de Visual Studio Code
Una manera increíble de programar es teniendo VS Code. Es un editor de texto muy potente el cual nos servirá para poder programar en muchos lenguajes de programación. Este programa es muy popular entre los desarrolladores web.
 
Para la instalación iremos a la [página oficial de VS Code](code.visualstudio.com) y le daremos en descargar.
 
![](../todo-list-tutorial/recursos-readme/vs-code.png)
 
Instalaremos como cualquier otro programa.
 
## Descargando nuestro proyecto
 
## Paso 1
Para descargar nuestro proyecto debemos ir a la [página](https://github.com/angular-bolivia/todo-list-tutorial.git).
 
![](recursos-readme/github-angular.png)
 
## Paso 2
Le daremos click en el botón verde "Clone or download" y luego "Download ZIP".
![](../todo-list-tutorial/recursos-readme/angular&#32;zip.png)
 
## Paso 3
Se descargará un ZIP, lo pondremos en la carpeta de tu preferencia y por último lo descomprimimos.
## Paso 4
Una vez descomprimido debemos entrar con la consola en el directorio del proyecto.
[Si deseas saber más acerca de comandos de consola](http://www.falconmasters.com/offtopic/como-utilizar-consola-de-windows/). Por ejemplo, mi proyecto está en mi escritorio, iré con este comando:
 
> cd C:\Users\ **$tu-usuario** \Desktop\todo-list-tutorial
## Paso 5
Por último escribiremos el comando de instalación. Este proceso puede tardar varios minutos ¡Puedes tomar un descanso!
> npm install
 
## Paso 6
Usaremos VS Code, por lo tanto escribiremos el comando:
> code .
 
Automáticamente se abrirá en Visual Studio Code, pero deseamos abrirlo en el navegador, así que escribiremos este comando en la consola:
 
> ng serve -o 
 
Este comando está diciendo que se cree un servidor local en nuestro ordenador y el signo **-o** indica que cuando nuestro servidor esté listo, abra automáticamente el navegador. **Ten paciencia, puede demorar.**
 
# Felicidades lo lograste!!