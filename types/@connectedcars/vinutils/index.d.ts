export const FuelType: {
  DIESEL: string
  ELECTRIC: string
  GASOLINE: string
  HYBRID: string
}
export const Make: {
  ALFA_ROMEO: string
  ASTON_MARTIN: string
  AUDI: string
  BENTLEY: string
  BMW: string
  BUGATTI: string
  BUICK: string
  CADILLAC: string
  CHEVROLET: string
  CHRYSLER: string
  CITROEN: string
  DACIA: string
  DAEWOO: string
  DAF: string
  DAIHATSU: string
  DELOREAN: string
  DODGE: string
  DUCATI: string
  FERRARI: string
  FIAT: string
  FORD: string
  FREIGHTLINER: string
  GENERAL_MOTORS: string
  HARLEY_DAVIDSON: string
  HONDA: string
  HYUNDAI: string
  IKARUS: string
  ISUZU: string
  IVECO: string
  JAGUAR: string
  JEEP: string
  KAWASAKI: string
  KENWORTH: string
  KIA: string
  KOENIGSEGG: string
  LADA: string
  LAMBORGHINI: string
  LANCIA: string
  LAND_ROVER: string
  LINCOLN: string
  LOTUS: string
  MACK: string
  MAN: string
  MASERATI: string
  MAZDA: string
  MCLAREN: string
  MERCEDES_BENZ: string
  MERCURY: string
  MG: string
  MINI: string
  MITSUBISHI: string
  NISSAN: string
  NOVA: string
  OLDSMOBILE: string
  OPEL: string
  PEUGEOT: string
  PLYMOUTH: string
  PONTIAC: string
  PORSCHE: string
  RENAULT: string
  ROLLS_ROYCE: string
  SAAB: string
  SATURN: string
  SCANIA: string
  SEAT: string
  SKODA: string
  SMART: string
  SOLARIS: string
  SSANGYONG: string
  SUBARU: string
  SUZUKI: string
  TESLA: string
  TOYOTA: string
  TRIUMPH: string
  VOLKSWAGEN: string
  VOLVO: string
  WESTERN_STAR: string
  YAMAHA: string
}
export const Model: {
  Audi: {
    A1: string
    A3: string
    A4: string
    A5: string
    A6: string
    A7: string
    A8: string
    Q2: string
    Q3: string
    Q5: string
    Q7: string
    R8: string
    TT: string
  }
  SEAT: {
    ALHAMBRA: string
    ALTEA: string
    ARONA: string
    ATECA: string
    CORDOBA: string
    IBIZA: string
    LEON: string
    MII: string
    TOLEDO: string
  }
  Volkswagen: {
    AMAROK: string
    ARTEON: string
    BEETLE: string
    CADDY: string
    CALIFORNIA: string
    CARAVELLE: string
    CC: string
    CRAFTER: string
    EOS: string
    FOX: string
    GOLF: string
    JETTA: string
    LUPO: string
    MULTIVAN: string
    PASSAT: string
    POLO: string
    SCIROCCO: string
    SHARAN: string
    TIGUAN: string
    TOUAREG: string
    TOURAN: string
    TRANSPORTER: string
    TROC: string
    UP: string
  }
  Škoda: {
    CITIGO: string
    FABIA: string
    KAROQ: string
    KODIAQ: string
    OCTAVIA: string
    RAPID: string
    ROOMSTER: string
    SUPERB: string
    YETI: string
  }
}

export function getEngineSize(vehicle: any): any
export function getFuelType(vehicle: any): any
export function getMake(vehicle: any): any
export function getModel(vehicle: any): any
export function getYear(vehicle: any): any
export function getEngineHorsepower(description: string): number | null
export function validateVIN(vin: any): any
