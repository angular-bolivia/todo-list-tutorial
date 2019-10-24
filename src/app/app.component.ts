import { Component } from '@angular/core';
import { Tarea } from './tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nuevaTarea = '';
  listaTareas: Tarea[] = [];

  crearTarea() {
    const tarea = new Tarea(this.nuevaTarea, false);
    this.listaTareas.push(tarea);
    console.log(this.listaTareas);
    this.nuevaTarea = '';
  }

  eliminarTarea(indice) {
    this.listaTareas.splice(indice, 1);
  }

  marcarTareaComoCompletada(tarea) {
    tarea.completada = !tarea.completada;
  }
}
