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
