export class Tarea {
  detalle: string;
  terminado: boolean;

  constructor(detalle: string, terminado: boolean) {
    this.detalle = detalle;
    this.terminado = terminado;
  }
}
