export const animales = [
  'perro',
  'gato',
  'liebre',
] as const

export const nombres = [
  'Ariel',
  'Marcos',
  'Susana',
  'Jorge',
] as const

export type Animal = typeof nombres[number]
export type Nombre = typeof animales[number]

