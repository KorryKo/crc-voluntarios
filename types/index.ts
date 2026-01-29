export type EstadoPerro = "disponible" | "adoptado" | "en proceso";

export type Sexo = "macho" | "hembra";

export type Tamaño = "pequeño" | "mediano" | "grande";

export interface Dog {
  id: number;
  nombre: string;
  edad: string;
  sexo: Sexo;
  tamaño: Tamaño;
  foto: string;
  descripcion: string;
  estado: EstadoPerro;
}
