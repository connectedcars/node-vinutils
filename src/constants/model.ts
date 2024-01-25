import { Make } from './make'

type Values<T> = T[keyof T]

type ModelType = typeof Model

export type Models =
  | Values<ModelType[Make.AUDI]>
  | Values<ModelType[Make.CITROEN]>
  | Values<ModelType[Make.CUPRA]>
  | Values<ModelType[Make.DACIA]>
  | Values<ModelType[Make.FIAT]>
  | Values<ModelType[Make.FORD]>
  | Values<ModelType[Make.GARIA]>
  | Values<ModelType[Make.HONDA]>
  | Values<ModelType[Make.HYUNDAI]>
  | Values<ModelType[Make.IVECO]>
  | Values<ModelType[Make.MAXUS]>
  | Values<ModelType[Make.MAZDA]>
  | Values<ModelType[Make.MERCEDES_BENZ]>
  | Values<ModelType[Make.MINI]>
  | Values<ModelType[Make.NISSAN]>
  | Values<ModelType[Make.OPEL]>
  | Values<ModelType[Make.PEUGEOT]>
  | Values<ModelType[Make.POLESTAR]>
  | Values<ModelType[Make.PORSCHE]>
  | Values<ModelType[Make.RENAULT]>
  | Values<ModelType[Make.SEAT]>
  | Values<ModelType[Make.SKODA]>
  | Values<ModelType[Make.TOYOTA]>
  | Values<ModelType[Make.VOLKSWAGEN]>
  | Values<ModelType[Make.VOLKSWAGEN_COMMERCIAL_VEHICLES]>

export const Model = {
  [Make.AUDI]: {
    A1: 'A1',
    A2: 'A2',
    A3: 'A3',
    A4: 'A4',
    A5: 'A5',
    A6: 'A6',
    A7: 'A7',
    A8: 'A8',
    Q2: 'Q2',
    Q3: 'Q3',
    Q4_ETRON: 'Q4 e-tron',
    Q5: 'Q5',
    Q6_ETRON: 'Q6 e-tron',
    Q7: 'Q7',
    Q8: 'Q8',
    Q8_ETRON: 'Q8 e-tron',
    R8: 'R8',
    TT: 'TT',
    ETRON: 'e-tron',
    ETRON_GT: 'e-tron GT'
  },
  [Make.BMW]: {
    I3: 'i3',
    I4: 'i4',
    I5: 'i5',
    I7: 'i7',
    IX: 'iX',
    IX1: 'iX1',
    IX2: 'iX2',
    IX3: 'iX3',
    '3': '3'
  },
  [Make.CITROEN]: {
    BERLINGO: 'Berlingo',
    C3: 'C3',
    JUMPER: 'Jumper',
    JUMPY: 'Jumpy'
  },
  [Make.CUPRA]: {
    ATECA: 'Ateca',
    BORN: 'Born',
    FORMENTOR: 'Formentor',
    LEON: 'Leon',
    TAVASCAN: 'Tavascan'
  },
  [Make.DACIA]: {
    DOKKER: 'Dokker',
    DUSTER: 'Duster',
    SANDERO: 'Sandero',
    SPRING: 'Spring'
  },
  [Make.FIAT]: {
    DUCATO: 'Ducato',
    DOBLO: 'Doblò',
    FIORINO: 'Fiorino'
  },
  [Make.FORD]: {
    C_MAX: 'C-MAX',
    MONDEO: 'Mondeo',
    TRANSIT: 'Transit',
    FOCUS: 'Focus',
    S_MAX: 'S-MAX',
    FIESTA: 'Fiesta',
    MUSTANG_MACH_E: 'Mustang Mach-E'
  },
  [Make.GARIA]: {
    UTILITY_CITY: 'Utility City'
  },
  [Make.HONDA]: {
    HR_V: 'HR-V'
  },
  [Make.HYUNDAI]: {
    IONIQ5: 'IONIQ 5'
  },
  [Make.IVECO]: {
    DAILY: 'Daily'
  },
  [Make.KIA]: {
    CEED: 'Ceed',
    EV6: 'EV6',
    EV9: 'EV9',
    NIRO: 'NIRO'
  },
  [Make.LAMBORGHINI]: {
    REVUELTO: 'Revuelto'
  },
  [Make.LEXUS]: {
    RZ: 'RZ',
    UX: 'UX',
    ES: 'ES',
    NX: 'NX',
    LBX: 'LBX',
    LS: 'LS',
    LC_CV: 'LC CV',
    LC: 'LC'
  },
  [Make.MAXUS]: {
    EUNIQ5: 'Euniq5'
  },
  [Make.MAZDA]: {
    2: '2',
    3: '3',
    CX5: 'CX-5'
  },
  [Make.MERCEDES_BENZ]: {
    SPRINTER: 'Sprinter',
    VITO: 'Vito',
    TRUCK: 'Truck',
    EQB: 'EQB',
    CITAN: 'Citan',
    EQV: 'EQV',
    EQC: 'EQC',
    E: 'E',
    GLB: 'GLB',
    GLE: 'GLE'
  },
  [Make.MINI]: {
    COOPER: 'Cooper'
  },
  [Make.NISSAN]: {
    NV400: 'NV400',
    ENV200: 'e-NV200',
    LEAF: 'Leaf',
    NAVARA: 'Navara',
    SYLPHY: 'Sylphy'
  },
  [Make.OPEL]: {
    ASTRA: 'Astra',
    COMBO: 'Combo',
    VIVARO: 'Vivaro',
    ZAFIRA: 'Zafira',
    MOVANO: 'Movano'
  },
  [Make.OTHER]: {
    TRUCK: 'Truck',
    TRAILER: 'Trailer',
    OTHER: 'Other'
  },
  [Make.PEUGEOT]: {
    EXPERT: 'Expert',
    PARTNER: 'Partner'
  },
  [Make.POLESTAR]: {
    1: '1',
    2: '2',
    3: '3'
  },
  [Make.PORSCHE]: {
    BOXSTER: 'Boxster',
    MACAN: 'Macan',
    PANAMERA: 'Panamera',
    TAYCAN: 'Taycan'
  },
  [Make.RENAULT]: {
    KANGOO: 'Kangoo',
    MASTER: 'Master',
    TRAFIC: 'Trafic',
    ZOE: 'Zoe'
  },
  [Make.SCANIA]: {
    TRUCK: 'Truck'
  },
  [Make.SEAT]: {
    ALHAMBRA: 'Alhambra',
    ALTEA: 'Altea',
    ARONA: 'Arona',
    ATECA: 'Ateca',
    CORDOBA: 'Cordoba',
    FORMENTOR: 'Formentor',
    IBIZA: 'Ibiza',
    LEON: 'Leon',
    MII: 'Mii',
    TARRACO: 'Tarraco',
    TOLEDO: 'Toledo',
    BORN: 'Born'
  },
  [Make.SKODA]: {
    CITIGO: 'Citigo',
    ENYAQ: 'Enyaq',
    FABIA: 'Fabia',
    KAMIQ: 'Kamiq',
    KAROQ: 'Karoq',
    KODIAQ: 'Kodiaq',
    OCTAVIA: 'Octavia',
    RAPID: 'Rapid',
    ROOMSTER: 'Roomster',
    SCALA: 'Scala',
    SUPERB: 'Superb',
    YETI: 'Yeti'
  },
  [Make.TESLA]: {
    MODEL_3: 'Model 3',
    MODEL_Y: 'Model Y'
  },
  [Make.TOYOTA]: {
    HIACE: 'Hiace',
    AURIS: 'Auris',
    HILUX: 'Hilux',
    PROACE_ELECTRIC: 'Proace Electric',
    DYNA: 'Dyna',
    COROLLA: 'Corolla',
    YARIS: 'Yaris',
    PROACE: 'Proace',
    SPORTSVAN: 'Sportsvan',
    AYGO_X: 'Aygo X',
    BZ4X: 'bZ4X',
    C_HR: 'C-HR',
    LAND_CRUISER: 'Land Cruiser',
    RAV4: 'RAV4'
  },
  [Make.VOLKSWAGEN]: {
    AMAROK: 'Amarok',
    ARTEON: 'Arteon',
    BEETLE: 'Beetle',
    BORA: 'Bora',
    CADDY: 'Caddy',
    CALIFORNIA: 'California',
    CARAVELLE: 'Caravelle',
    CC: 'CC',
    CRAFTER: 'Crafter',
    EOS: 'Eos',
    FOX: 'Fox',
    GOLF: 'Golf',
    GRAND_CALIFORNIA: 'Grand California',
    'ID.3': 'ID.3',
    'ID.4': 'ID.4',
    'ID.5': 'ID.5',
    'ID.7': 'ID.7',
    'ID.Buzz': 'ID.Buzz',
    JETTA: 'Jetta',
    LUPO: 'Lupo',
    PASSAT: 'Passat',
    PHAETON: 'Phaeton',
    POLO: 'Polo',
    MULTIVAN: 'Multivan',
    SCIROCCO: 'Scirocco',
    SHARAN: 'Sharan',
    TAOS: 'Taos',
    TERAMONT: 'Teramont',
    TCROSS: 'T-Cross',
    TROC: 'T-Roc',
    TIGUAN: 'Tiguan',
    TOUAREG: 'Touareg',
    TOURAN: 'Touran',
    TRANSPORTER: 'Transporter',
    UP: 'up!',
    TAIGO: 'Taigo',
    GOL_SAVEIRO: 'Gol-Saveiro',
    CROSS_SPORT: 'Cross Sport',
    CROSS_FOX: 'CrossFox',
    GOL: 'Gol',
    NIVUS: 'Nivus',
    SAVEIRO: 'Saveiro',
    TAIGUN: 'Taigun',
    VENTO: 'Vento',
    VIRTUS: 'Virtus'
  },
  [Make.VOLKSWAGEN_COMMERCIAL_VEHICLES]: {
    AMAROK: 'Amarok',
    CADDY: 'Caddy',
    CALIFORNIA: 'California',
    CARAVELLE: 'Caravelle',
    CRAFTER: 'Crafter',
    GRAND_CALIFORNIA: 'Grand California',
    'ID.Buzz': 'ID.Buzz',
    MULTIVAN: 'Multivan',
    TRANSPORTER: 'Transporter'
  },
  [Make.VOLVO]: {
    TRUCK: 'Truck',
    S60: 'S60',
    V60: 'V60',
    S90: 'S90',
    V90: 'V90',
    XC40: 'XC40'
  },
  [Make.MAN]: {
    TGE: 'TGE',
    TRUCK: 'Truck'
  }
} as const
