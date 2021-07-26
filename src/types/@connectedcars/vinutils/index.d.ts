type FuelType = {
  DIESEL: 'diesel',
  GASOLINE: 'gasoline',
  ELECTRIC: 'electric',
  HYBRID: 'hybrid',
  HYBRID_DIESEL: 'hybrid_disel',
  NATURAL_GAS: 'natural_gas',
  HYDROGEN: 'hydrogen'
}
type MakeType = {
  ALFA_ROMEO: 'Alfa Romeo'
  ASTON_MARTIN: 'Aston Martin'
  AUDI: 'Audi'
  BMW: 'BMW'
  BENTLEY: 'Bentley'
  BUGATTI: 'Bugatti'
  BUICK: 'Buick'
  CADILLAC: 'Cadillac'
  CHEVROLET: 'Chevrolet'
  CHRYSLER: 'Chrysler'
  CITROEN: 'Citroën'
  DACIA: 'Dacia'
  DAF: 'DAF'
  DAEWOO: 'Daewoo'
  DAIHATSU: 'Daihatsu'
  DELOREAN: 'DeLorean'
  DODGE: 'Dodge'
  DUCATI: 'Ducati'
  FERRARI: 'Ferrari'
  FIAT: 'Fiat'
  FORD: 'Ford'
  FREIGHTLINER: 'Freightliner'
  GENERAL_MOTORS: 'General Motors'
  HARLEY_DAVIDSON: 'Harley Davidson'
  HONDA: 'Honda'
  HYUNDAI: 'Hyundai'
  IKARUS: 'Ikarus'
  ISUZU: 'Isuzu'
  IVECO: 'Iveco'
  JAGUAR: 'Jaguar'
  JEEP: 'Jeep'
  KAWASAKI: 'Kawasaki'
  KENWORTH: 'Kenworth'
  KIA: 'Kia'
  KOENIGSEGG: 'Koenigsegg'
  LADA: 'Lada'
  LAMBORGHINI: 'Lamborghini'
  LANCIA: 'Lancia'
  LAND_ROVER: 'Land Rover'
  LINCOLN: 'Lincoln'
  LOTUS: 'Lotus'
  MAN: 'MAN'
  MG: 'MG'
  MINI: 'MINI'
  MACK: 'Mack'
  MASERATI: 'Maserati'
  MAZDA: 'Mazda'
  MCLAREN: 'McLaren'
  MERCEDES_BENZ: 'Mercedes-Benz'
  MERCURY: 'Mercury'
  MITSUBISHI: 'Mitsubishi'
  NISSAN: 'Nissan'
  NOVA: 'Nova'
  OLDSMOBILE: 'Oldsmobile'
  OPEL: 'Opel'
  PEUGEOT: 'Peugeot'
  PLYMOUTH: 'Plymouth'
  PONTIAC: 'Pontiac'
  PORSCHE: 'Porsche'
  RENAULT: 'Renault'
  ROLLS_ROYCE: 'Rolls Royce'
  SAAB: 'Saab'
  SATURN: 'Saturn'
  SCANIA: 'Scania'
  SEAT: 'SEAT'
  SKODA: 'Škoda'
  SMART: 'smart'
  SOLARIS: 'Solaris'
  SSANGYONG: 'SsangYong'
  SUBARU: 'Subaru'
  SUZUKI: 'Suzuki'
  TESLA: 'Tesla'
  TOYOTA: 'Toyota'
  TRIUMPH: 'Triumph'
  VOLKSWAGEN: 'Volkswagen'
  VOLVO: 'Volvo'
  YAMAHA: 'Yamaha'
  WESTERN_STAR: 'Western Star'
}
type ModelType = {
  ['Audi']: {
    A1: 'A1'
    A3: 'A3'
    A4: 'A4'
    A5: 'A5'
    A6: 'A6'
    A7: 'A7'
    A8: 'A8'
    Q2: 'Q2'
    Q3: 'Q3'
    Q4: 'Q4'
    Q5: 'Q5'
    Q7: 'Q7'
    Q8: 'Q8'
    R8: 'R8'
    TT: 'TT'
    ETRON: 'e-tron'
  }
  ['Citroën']: {
    BERLINGO: 'Berlingo'
    JUMPER: 'Jumper'
    JUMPY: 'Jumpy'
  }
  ['Dacia']: {
    DOKKER: 'Dokker'
  }
  ['Fiat']: {
    DUCATO: 'Ducato'
    DOBLO: 'Doblò'
  }
  ['Ford']: {
    C_MAX: 'C-MAX'
    MONDEO: 'Mondeo'
    TRANSIT: 'Transit'
  }
  ['Iveco']: {
    DAILY: 'Daily'
  }
  ['Mercedes-Benz']: {
    SPRINTER: 'Sprinter'
    VITO: 'Vito'
  }
  ['Nissan']: {
    NV400: 'NV400'
  }
  ['Opel']: {
    VIVARO: 'Vivaro'
    ZAFIRA: 'Zafira'
  }
  ['Peugeot']: {
    EXPERT: 'Expert'
    PARTNER: 'Partner'
  }
  ['Renault']: {
    KANGOO: 'Kangoo'
    MASTER: 'Master',
    TRAFIC: 'Trafic'
  }
  ['SEAT']: {
    ALHAMBRA: 'Alhambra'
    ALTEA: 'Altea'
    ARONA: 'Arona'
    ATECA: 'Ateca'
    CORDOBA: 'Cordoba'
    IBIZA: 'Ibiza'
    LEON: 'Leon'
    MII: 'Mii'
    TARRACO: 'Tarraco'
    TOLEDO: 'Toledo'
  }
  ['Škoda']: {
    CITIGO: 'Citigo'
    FABIA: 'Fabia'
    KAMIQ: 'Kamiq'
    KAROQ: 'Karoq'
    KODIAQ: 'Kodiaq'
    OCTAVIA: 'Octavia'
    RAPID: 'Rapid'
    ROOMSTER: 'Roomster'
    SCALA: 'Scala'
    SUPERB: 'Superb'
    YETI: 'Yeti'
  }
  ['Toyota']: {
    HIACE: 'Hiace'
  }
  ['Volkswagen']: {
    AMAROK: 'Amarok'
    ARTEON: 'Arteon'
    BEETLE: 'Beetle'
    BORA: 'Bora'
    CADDY: 'Caddy'
    CALIFORNIA: 'California'
    CARAVELLE: 'Caravelle'
    CC: 'CC'
    CRAFTER: 'Crafter'
    EOS: 'Eos'
    FOX: 'Fox'
    GOLF: 'Golf'
    GRAND_CALIFORNIA: 'Grand California'
    'ID.3': 'ID.3'
    'ID.4': 'ID.4'
    JETTA: 'Jetta'
    LUPO: 'Lupo'
    PASSAT: 'Passat'
    PHAETON: 'Phaeton'
    POLO: 'Polo'
    MULTIVAN: 'Multivan'
    SCIROCCO: 'Scirocco'
    SHARAN: 'Sharan'
    TCROSS: 'T-Cross'
    TROC: 'T-Roc'
    TIGUAN: 'Tiguan'
    TOUAREG: 'Touareg'
    TOURAN: 'Touran'
    TRANSPORTER: 'Transporter'
    UP: 'up!'
  }
}

export const Make: MakeType
export const Model: ModelType
export const FuelType: FuelType

export type Makes = MakeType[keyof MakeType]
type ValueOf<T> = T[keyof T]
export type Models =
| ValueOf<ModelType['Audi']>
| ValueOf<ModelType['Citroën']>
| ValueOf<ModelType['Dacia']>
| ValueOf<ModelType['Fiat']>
| ValueOf<ModelType['Ford']>
| ValueOf<ModelType['Iveco']>
| ValueOf<ModelType['Mercedes-Benz']>
| ValueOf<ModelType['Nissan']>
| ValueOf<ModelType['Opel']>
| ValueOf<ModelType['Peugeot']>
| ValueOf<ModelType['Renault']>
| ValueOf<ModelType['SEAT']>
| ValueOf<ModelType['Škoda']>
| ValueOf<ModelType['Toyota']>
| ValueOf<ModelType['Volkswagen']>
export type Fuels = FuelType[keyof FuelType]

export function getEngineSize(vehicle: any): any
export function getFuelType(vehicle: any): Fuels | null
export function getMake(vehicle: any): Makes | null
export function getModel(vehicle: any): Models | null
export function getYear(vehicle: any): any
export function getEngineHorsepower(description: string): number | null
export function validateVIN(vin: any): any
