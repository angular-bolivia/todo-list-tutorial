export class Tarea {
  detalle: string;
  completada: boolean;

  constructor(detalle: string, completada: boolean) {
    this.detalle = detalle;
    this.completada = completada;
  }
}
