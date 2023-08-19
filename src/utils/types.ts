export interface IProduct {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  unidadMedida: 'unidad' | 'kg' | 'litro';
  precioPorUnidad: number;
}

export interface IUser {
  id?: number;
  rol: 'admin' | 'municipalidad';
  username: string;
  password: string;
  nombreMunicipio: string;
  departamento: string;
  provincia: string;
  distrito: string;
}

export interface ISeller {
  id?: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno?: string;
  dni: string;
  domicilio: string;
  telefono: string;
  municipioId: number;
}
