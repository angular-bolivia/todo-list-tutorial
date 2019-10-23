import { Component } from '@angular/core';
import { Tarea } from './Tarea.model';

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

  eliminarTarea(index) {
    this.listaTareas.splice(index, 1);
  }

  marcarTareaComoCompletada(index) {
    const tarea = this.listaTareas[index];
    tarea.terminado = true;
    this.listaTareas[index] = tarea;
  }

}
