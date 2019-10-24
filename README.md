# Tutorial Lista de Tareas - ngGirls Bolivia

En este tutorial, te llevaremos de viaje a las entrañas de la tecnología web, para que veas todas las piezas que se necesitan para construir una web funcional.

Como pasa con todas las cosas nuevas va a ser una aventura, diviértete, una vez que te has decidido a empezar, te va a ir fenomenal :)

## Primera parte

Puedes encontrar la primera parte de este tutorial [aquí](https://ng-girls-bolivia.gitbook.io/workshop/).

## Tercera Parte: Instalación del entorno

Ya tenemos nuestro proyecto creado, pero si deseamos acceder a él debemos tener una conexión a internet. Es en ese momento donde nos preguntamos cómo crear nuestros proyectos sin la necesidad de stackblitz. La solución es Node.js y Angular CLI.

## ¿Node.js y Angular CLI?

Node.js es un "entorno de ejecución para JavaScript", es decir para ejecutar JavaScript los desarrolladores necesitaban siempre un navegador como Chrome, Firefox entre otros, pero Node.js nos ofrece poderlo ejecutar por ejemplo en un servidor o en tu misma computadora. Cuando descargamos Node.js en nuestro ordenador viene con un gestor de paquetes llamado NPM (Node Package Manager) el cual te permite descargar librerías en cualquier proyecto Javascript.

Angular CLI  es una librería JavaScript, su nombre viene de la siglas Command Line Interface (Interfaz de línea de comandos), es decir, usaremos la consola para generar y construir los proyectos Angular.

> No le temas a la consola, a medida que pase el tiempo tendrás más confianza y entenderás todos los mensajes en blanco y negro que te aparecerán.

Como lo mencionamos anteriormente, Node.js nos permite descargar librerías. Una de ellas es Angular CLI, entonces procederemos a la instalación.

## Instalación de Node.js

El primer paso para instalar Angular en nuestro entorno es poder instalar Node.js.

## Paso 1
Debemos ir a la pagina de Node.js: [pagina de node](https://nodejs.org/es/) y le daremos click en descargar la última versión.

![](../todo-list-tutorial/recursos-readme/node.png)
## Paso 2
Se nos descargará un ejecutable, lo abriremos, en todos los pasos hacemos click en "siguiente" y ya estará listo.

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

Para la instalacion iremos a la [pagina oficial de VS Code](code.visualstudio.com) y le daremos en descargar

![](../todo-list-tutorial/recursos-readme/vs-code.png)

Instalaremos como cualquier otro programa.

# Es momento de reiniciar tu computadora.
es buena idea reiniciar tu computador

## Descargando nuestro proyecto

## Paso 1
Para descargar nuestro proyecto debemos ir a la [página](https://github.com/angular-bolivia/todo-list-tutorial.git).

![](recursos-readme/github-angular.png)

## Paso 2
Le daremos click en el botón verde "Clone or download" y luego "Download ZIP".
![](../todo-list-tutorial/recursos-readme/angular&#32;zip.png)

## Paso 3
se descargara un zip, lo pondremos en una carpeta de tu preferencia y por ultimo lo descomprimimos
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

Automáticamente se abrirá en Visual Studio Code, pero deseamos abrirlo en el navegado, así que escribiremos este comando en la consola:

> ng serve -o 

Este comando está diciendo que se cree un servidor local en nuestro ordenador y el signo **-o** indica que cuando nuestro servidor esté listo, abra automáticamente el navegador. **Ten paciencia, puede demorar.**

# Felicidades lo lograste!!
