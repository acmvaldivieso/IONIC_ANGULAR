export interface Respuesta {
  viaje: Viaje[];
  credenciales: Credenciales[];
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

export interface Credenciales{
  id: number;
  username: string;
  password: string;
  nombre: string;
  email: string;
}