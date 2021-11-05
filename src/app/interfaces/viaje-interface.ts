export interface Respuesta {
  viaje: Viaje[];
}

export interface Viaje {
  id: number;
  conductor: string;
  resumen: string;
  destino: string;
  ruta: string;
  origen: string;
  celular: string;
  valor: string;
  patente: string;
  carrera: string;
  imagen: string;
}