# Tutorial Lista de Tareas - ngGirls Bolivia

En este tutorial, te llevaremos de viaje a las entrañas de la tecnología web, para que veas todas las piezas que se necesitan para construir una web funcional.

Como pasa con todas las cosas nuevas va a ser una aventura, diviértete, una vez que te has decidido a empezar, te va a ir fenomenal :)

## Transformando nuestra aplicación a una PWA

En este punto le daremos a nuestra app unas cuantas vitaminas para hacerla evolucionar. 
Pero antes de eso tenemos que entender ciertos conceptos esenciales:


## ¿Que es una PWA?

![][what-is]

Una **progressive web app** (o **aplicación web progresiva**) son un tipo de aplicaciones que se podrían definir como: **“Página web que se aprovecha de las tecnologías webs a las cuales tiene acceso para proponer una experiencia móvil similar a una aplicación nativa”**. Al final, una Progressive Web App, es una nueva generación de aplicaciones que están a medio camino entre una web y una app, ya que tienen lo mejor de los dos mundos.

### Una PWA es “Fast”
Responde rápidamente a las interacciones del usuario con animaciones suaves como la seda y sin desplazamiento irregular.

### Una PWA es “Integrated”
Se mantiene accesible desde la pantalla de inicio, como una aplicación nativa, pero sin ocupar espacio ni recursos del dispositivo.

### Una PWA es “Reliable”
Carga al instante y nunca muestra el "dinosaurio", incluso en condiciones de red inciertas.

### Una PWA es “Engaging”
Se siente como una aplicación natural en el dispositivo, con una experiencia de usuario inmersiva.


## Por tanto una PWA es... FIRE
![][fire]


## Como funciona una PWA
Las parte que trabajan son:

![PWA parts][pwa-parts]

### Service Worker
Es un Web Worker de JavaScript que actúa como **proxy** entre la **aplicación y la red**. Interceptan los "requests" de la red y guardan la información en caché. Se usan para cargar información de manera offline.

### Push Notifications
La API Push brinda a las aplicaciones web la capacidad de **recibir mensajes de notificación** push enviados desde un servidor. Esto funciona de la mano con el Service Worker.

### Manifest.json
Uno de los elementos más importantes es el **manifesto** de la aplicación. Es un **archivo muy sencillo** (**formato JSON**) que te permite controlar cómo se verá tu aplicación en las áreas donde normalmente los usuarios tienen aplicaciones nativas.
![Manifest exmaple][manifest-example]

### HTTPS
Las APIs modernas, no funcionan en **HTTP**, solo funcionan en **HTTPs**. **¿Cuál es la diferencia?** La conexión de una página vía https, se hace mediante un canal seguro, donde la información no puede ser comprometida.

Por mencionar un par, las APIs de ServiceWorker, Geolocalización, LocalStorage, getUserMedia... no funcionan si no se ejecutan en un sitio con HTTPs, **la única excepción es localhost**, de modo que puedes **desarrollar sin HTTPs**.


## Ejemplo de una PWA
Si te interesarón las PWA y eres una m@estra pokemon está PWA es para ti:

https://pokedex.org/

![PWA exmaple][pwa-example]

Como se puede apreciar es una app web, que nos permite instalarla (en este caso en nuestro celular) la cual simula una aplicación nativa.

## Transformando a nuestra app a una PWA
Ya teniendo una idea de que tan genial es una PWA, transformaremos la nuestra con el siguiente comando: 

![PWA command][pwa-command]

Lo que genera y actualiza una serie de archivos.
![PWA command executed][pwa-command-executed]

Con esto ya tendras tu app transformada.
![Poke evolution][poke-evolution]


## Fuentes
[https://developers.google.com/web/progressive-web-apps](https://developers.google.com/web/progressive-web-apps)

[https://developers.google.com/web/fundamentals/web-app-manifest/?hl=es](https://developers.google.com/web/fundamentals/web-app-manifest/?hl=es)

[https://seocom.agency/es/blog/introduccion-pwa/](https://seocom.agency/es/blog/introduccion-pwa/)

<!-- RECURSOS -->

<!-- Imagenes -->
[manifest-example]:  ./recursos-readme/c4-manifest.png "Manifest exmaple"
[pwa-command]:  ./recursos-readme/c4-pwa-command.png "PWA command"
[pwa-command-executed]:  ./recursos-readme/c4-pwa-command-executed.png "PWA command executed"
[pwa-example]:  ./recursos-readme/c4-pwa-example.png "PWA example"
[pwa-parts]:  ./recursos-readme/c4-pwa-parts.jpg "PWA parts"

<!-- Gifs -->
[what-is]:  https://media.giphy.com/media/9DjUxx62m3Bo5SvHaL/giphy.gif
[fire]: https://media.giphy.com/media/3KVcFEmdDl9NYaFTtx/giphy.gif
[poke-evolution]: http://giphygifs.s3.amazonaws.com/media/pjsAgS0ZpaFvW/giphy.gif
