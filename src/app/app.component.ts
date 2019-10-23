import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nuevaTarea = '';
  listaTareas = [];

  crearTarea() {
    this.listaTareas.push(this.nuevaTarea);
    console.log(this.listaTareas);
    this.nuevaTarea = '';
  }

  eliminarTarea(index) {
    console.log(index);
    this.listaTareas.splice(index, 1);
    console.log(this.listaTareas);
  }

  editar(index) {
    this.listaTareas[index] = 'Texto editado';
  }

}
