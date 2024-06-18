export class Tarea {
  constructor(nombre) {
    this.codigo = window.self.crypto.randomUUID();
    this.nombre = nombre;
  }
}
