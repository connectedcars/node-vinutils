export enum FuelType {
  DIESEL = 'diesel',
  GASOLINE = 'gasoline',
  ELECTRIC = 'electric',
  HYBRID = 'hybrid',
  HYBRID_DIESEL = 'hybrid_diesel',
  NATURAL_GAS = 'natural_gas',
  HYDROGEN = 'hydrogen'
}

export type Fuels = `${FuelType}`
