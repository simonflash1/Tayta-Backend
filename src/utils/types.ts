export interface IProduct {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  unidadMedida: 'unidad' | 'kg' | 'litro';
  precioPorUnidad: number;
}

export enum rolUsuario {
  ADMIN = 'admin',
  DEPARTAMENTO = 'departamento',
  MUNICIPALIDAD = 'municipalidad',
  PRODUCTOR = 'productor',
}

export interface IUser {
  id?: string;
  rol: rolUsuario;
  idPais: number;
  idDepartamento?: number;
  idMunicipalidad?: number;
  email?: string;

  nombreEntidad?: string;

  username?: string;
  password?: string;

  nombres?: string;
  apellidoPaterno?: string;
  apellidoMaterno?: string;
  dni?: string;
  domicilio?: string;
  telefono?: string;
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

export interface Negocio {
  id?: number;
  idProductor: number;
  nombreNegocio: string;
  categoria: string;
}

export interface IProduct {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  unidadMedida: 'unidad' | 'kg' | 'litro';
  precioPorUnidad: number;
}