export type EstadoPerro = "disponible" | "adoptado";

export type Sexo = "macho" | "hembra";

export type Tamaño = "pequeño" | "mediano" | "grande";

export interface Dog {
  id: number;
  nombre: string;
  fechaNacimiento: Date;
  sexo: Sexo;
  tamaño: Tamaño;
  foto: string;
  descripcion: string;
  estado: EstadoPerro;
}
