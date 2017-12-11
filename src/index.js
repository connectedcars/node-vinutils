const Make = {
  AUDI: 'Audi',
  SEAT: 'SEAT',
  SKODA: 'Škoda',
  VOLKSWAGEN: 'Volkswagen'
}

const Model = {
  [Make.AUDI]: {
    A1: 'A1',
    A3: 'A3',
    A4: 'A4',
    A5: 'A5',
    A6: 'A6',
    A7: 'A7',
    A8: 'A8',
    Q2: 'Q2',
    Q3: 'Q3',
    Q5: 'Q5',
    Q7: 'Q7',
    R8: 'R8',
    TT: 'TT'
  },
  [Make.SEAT]: {
    ALHAMBRA: 'Alhambra',
    ALTEA: 'Altea',
    ARONA: 'Arona',
    ATECA: 'Ateca',
    CORDOBA: 'Cordoba',
    IBIZA: 'Ibiza',
    LEON: 'Leon',
    MII: 'Mii',
    TOLEDO: 'Toledo'
  },
  [Make.SKODA]: {
    CITIGO: 'Citigo',
    FABIA: 'Fabia',
    KAROQ: 'Karoq',
    KODIAQ: 'Kodiaq',
    OCTAVIA: 'Octavia',
    RAPID: 'Rapid',
    ROOMSTER: 'Roomster',
    SUPERB: 'Superb',
    YETI: 'Yeti'
  },
  [Make.VOLKSWAGEN]: {
    AMAROK: 'Amarok',
    ARTEON: 'Arteon',
    BEETLE: 'Beetle',
    CADDY: 'Caddy',
    CALIFORNIA: 'California',
    CARAVELLE: 'Caravelle',
    CC: 'CC',
    CRAFTER: 'Crafter',
    EOS: 'Eos',
    FOX: 'Fox',
    GOLF: 'Golf',
    JETTA: 'Jetta',
    LUPO: 'Lupo',
    PASSAT: 'Passat',
    POLO: 'Polo',
    MULTIVAN: 'Multivan',
    SCIROCCO: 'Scirocco',
    SHARAN: 'Sharan',
    TROC: 'T-Roc',
    TIGUAN: 'Tiguan',
    TOUAREG: 'Touareg',
    TOURAN: 'Touran',
    TRANSPORTER: 'Transporter',
    UP: 'up!'
  }
}

const FuelType = {
  DIESEL: 'Diesel',
  GASOLINE: 'Gasoline',
  ELECTRIC: 'Electric',
  HYBRID: 'Hybrid'
}

const validateVIN = vin => {
  const regex = /^[ABCDEFGHJKLMNPRSTUVWXYZ0-9]{9}[ABCDEFGHJKLMNPRSTVWXY1-9]{1}[ABCDEFGHJKLMNPRSTUVWXYZ0-9]{7}$/i
  return regex.test(vin)
}

const getMake = car => {
  if (validateVIN(car.vin)) {
    switch (car.vin.substr(0, 3)) {
      case 'AAV':
      case 'LFV':
      case 'LSV':
      case 'MEX':
      case 'VWV':
      case 'WVG':
      case 'WVW':
      case 'WV1':
      case 'WV2':
      case 'WV3':
      case 'XW8':
      case 'YBW':
      case '1VW':
      case '2V4':
      case '2V8':
      case '3VW':
      case '8AW':
      case '9BW':
        return Make.VOLKSWAGEN
      case 'TMB':
      case 'TMP':
      case 'TM9':
        return Make.SKODA
      case 'TRU':
      case 'WAU':
      case 'WA1':
      case 'WUA':
      case '93U':
      case '93V':
      case '99A':
        return Make.AUDI
      case 'VSS':
        return Make.SEAT
    }
  }
  if (car.name) {
    if (car.name.match(/audi/i)) {
      return Make.AUDI
    }
    if (car.name.match(/seat/i)) {
      return Make.SEAT
    }
    if (car.name.match(/(škoda|skoda)/i)) {
      return Make.SKODA
    }
    if (car.name.match(/(volkswagen|vw)/i)) {
      return Make.VOLKSWAGEN
    }
  }
  return null
}

const getModel = car => {
  if (car.name) {
    if (car.name.match(/(audi a1|(^a1( |$))|audi s1|(^s1( |$)))/i)) {
      return Model[Make.AUDI].A1
    }
    if (car.name.match(/(audi a3|(^a3( |$))|audi s3|(^s3( |$))|audi rs3|(^rs3( |$)))/i)) {
      return Model[Make.AUDI].A3
    }
    if (car.name.match(/(audi a4|(^a4( |$))|audi s4|(^s4( |$))|audi rs4|(^rs4( |$)))/i)) {
      return Model[Make.AUDI].A4
    }
    if (car.name.match(/(audi a5|(^a5( |$))|audi s5|(^s5( |$))|audi rs5|(^rs5( |$)))/i)) {
      return Model[Make.AUDI].A5
    }
    if (car.name.match(/(audi a6|(^a6( |$))|audi s6|(^s6( |$))|audi rs6|(^rs6( |$)))/i)) {
      return Model[Make.AUDI].A6
    }
    if (car.name.match(/(audi a7|(^a7( |$))|audi s7|(^s7( |$))|audi rs7|(^rs7( |$)))/i)) {
      return Model[Make.AUDI].A7
    }
    if (car.name.match(/(audi a8|(^a8( |$))|audi s8|(^s8( |$)))/i)) {
      return Model[Make.AUDI].A8
    }
    if (car.name.match(/(audi q2|(^q2( |$)))/i)) {
      return Model[Make.AUDI].Q2
    }
    if (car.name.match(/(audi q3|(^q3( |$)))/i)) {
      return Model[Make.AUDI].Q3
    }
    if (car.name.match(/(audi q5|(^q5( |$))|audi sq5|(^sq5( |$)))/i)) {
      return Model[Make.AUDI].Q5
    }
    if (car.name.match(/(audi q7|(^q7( |$))|audi sq7|(^sq7( |$)))/i)) {
      return Model[Make.AUDI].Q7
    }
    if (car.name.match(/(audi r8|(^r8( |$)))/i)) {
      return Model[Make.AUDI].R8
    }
    if (car.name.match(/(audi tt|(^tt( |$)))/i)) {
      return Model[Make.AUDI].TT
    }
    if (car.name.match(/alhambra/i)) {
      return Model[Make.SEAT].ALHAMBRA
    }
    if (car.name.match(/altea/i)) {
      return Model[Make.SEAT].ALTEA
    }
    if (car.name.match(/arona/i)) {
      return Model[Make.SEAT].ARONA
    }
    if (car.name.match(/ateca/i)) {
      return Model[Make.SEAT].ATECA
    }
    if (car.name.match(/cordoba/i)) {
      return Model[Make.SEAT].CORDOBA
    }
    if (car.name.match(/ibiza/i)) {
      return Model[Make.SEAT].IBIZA
    }
    if (car.name.match(/leon/i)) {
      return Model[Make.SEAT].LEON
    }
    if (car.name.match(/mii/i)) {
      return Model[Make.SEAT].MII
    }
    if (car.name.match(/toledo/i)) {
      return Model[Make.SEAT].TOLEDO
    }
    if (car.name.match(/citigo/i)) {
      return Model[Make.SKODA].CITIGO
    }
    if (car.name.match(/fabia/i)) {
      return Model[Make.SKODA].FABIA
    }
    if (car.name.match(/karoq/i)) {
      return Model[Make.SKODA].KAROQ
    }
    if (car.name.match(/kodiaq/i)) {
      return Model[Make.SKODA].KODIAQ
    }
    if (car.name.match(/octavia/i)) {
      return Model[Make.SKODA].OCTAVIA
    }
    if (car.name.match(/rapid/i)) {
      return Model[Make.SKODA].RAPID
    }
    if (car.name.match(/roomster/i)) {
      return Model[Make.SKODA].ROOMSTER
    }
    if (car.name.match(/superb/i)) {
      return Model[Make.SKODA].SUPERB
    }
    if (car.name.match(/yeti/i)) {
      return Model[Make.SKODA].YETI
    }
    if (car.name.match(/amarok/i)) {
      return Model[Make.VOLKSWAGEN].AMAROK
    }
    if (car.name.match(/arteon/i)) {
      return Model[Make.VOLKSWAGEN].ARTEON
    }
    if (car.name.match(/beetle/i)) {
      return Model[Make.VOLKSWAGEN].BEETLE
    }
    if (car.name.match(/caddy/i)) {
      return Model[Make.VOLKSWAGEN].CADDY
    }
    if (car.name.match(/california/i)) {
      return Model[Make.VOLKSWAGEN].CALIFORNIA
    }
    if (car.name.match(/caravelle/i)) {
      return Model[Make.VOLKSWAGEN].CARAVELLE
    }
    if (car.name.match(/( |^)cc( |$)/i)) {
      return Model[Make.VOLKSWAGEN].CC
    }
    if (car.name.match(/crafter/i)) {
      return Model[Make.VOLKSWAGEN].CRAFTER
    }
    if (car.name.match(/eos/i)) {
      return Model[Make.VOLKSWAGEN].EOS
    }
    if (car.name.match(/fox/i)) {
      return Model[Make.VOLKSWAGEN].FOX
    }
    if (car.name.match(/golf/i)) {
      return Model[Make.VOLKSWAGEN].GOLF
    }
    if (car.name.match(/jetta/i)) {
      return Model[Make.VOLKSWAGEN].JETTA
    }
    if (car.name.match(/lupo/i)) {
      return Model[Make.VOLKSWAGEN].LUPO
    }
    if (car.name.match(/multivan/i)) {
      return Model[Make.VOLKSWAGEN].MULTIVAN
    }
    if (car.name.match(/passat/i)) {
      return Model[Make.VOLKSWAGEN].PASSAT
    }
    if (car.name.match(/polo/i)) {
      return Model[Make.VOLKSWAGEN].POLO
    }
    if (car.name.match(/scirocco/i)) {
      return Model[Make.VOLKSWAGEN].SCIROCCO
    }
    if (car.name.match(/sharan/i)) {
      return Model[Make.VOLKSWAGEN].SHARAN
    }
    if (car.name.match(/(troc|t-roc|t roc)/i)) {
      return Model[Make.VOLKSWAGEN].TROC
    }
    if (car.name.match(/tiguan/i)) {
      return Model[Make.VOLKSWAGEN].TIGUAN
    }
    if (car.name.match(/touareg/i)) {
      return Model[Make.VOLKSWAGEN].TOUAREG
    }
    if (car.name.match(/touran/i)) {
      return Model[Make.VOLKSWAGEN].TOURAN
    }
    if (car.name.match(/(kassevogn|transporter)/i)) {
      return Model[Make.VOLKSWAGEN].TRANSPORTER
    }
    if (car.name.match(/(up!|up( |$))/i)) {
      return Model[Make.VOLKSWAGEN].UP
    }
  }
  return null
}

/**
 * This method retrieves the engine size for a car from the vehicle description 
 * (name).
 * 
 * @param {{ name: string }} car
 * @returns {string|null} Formatted as `1.4`
 */
const getEngineSize = car => {
  if (car.name) {
    const match = car.name.match(/(?:[^\d]|^)(\d[,.]\d)(?:[^\d]|$)/)
    if (match) {
      return match[1].replace(',', '.')
    }
  }
  return null
}

/**
 * This method retrieves the fuel type for a car from the vehicle description 
 * (name) or by some predefined rules for specific models.
 * 
 * @param {{ vin: string, name: string }} car
 * @returns {'Gasoline'|'Diesel'|null}
 */
const getFuelType = car => {
  if (car.name) {
    if (car.name.match(/(e-golf|e-up!|e-up( |$))/i)) {
      return FuelType.ELECTRIC
    }
    if (car.name.match(/(gte|e-tron|hybrid)/i)) {
      return FuelType.HYBRID
    }
    if (car.name.match(/(sdi|tdi)/i)) {
      return FuelType.DIESEL
    }
    if (car.name.match(/(fsi|mpi|tfsi|tsi)/i)) {
      return FuelType.GASOLINE
    }
  }
  const model = getModel(car)
  if (
    model === Model[Make.SEAT].MII ||
    model === Model[Make.SKODA].CITIGO ||
    model === Model[Make.VOLKSWAGEN].UP
  ) {
    return FuelType.GASOLINE
  }
  return null
}

/**
 * This method retrieves the year for a car from the VIN.
 * Year from VIN uses the 10th character according to the specification, but 
 * resolves ambiguity to the range 2000-2029.
 * 
 * @param {{ vin: string }} car
 * @returns {integer|null} Formatted with four digits
 */
const getYear = car => {
  if (validateVIN(car.vin)) {
    switch (car.vin.substr(9, 1).toUpperCase()) {
      case 'Y':
        return 2000
      case '1':
        return 2001
      case '2':
        return 2002
      case '3':
        return 2003
      case '4':
        return 2004
      case '5':
        return 2005
      case '6':
        return 2006
      case '7':
        return 2007
      case '8':
        return 2008
      case '9':
        return 2009
      case 'A':
        return 2010
      case 'B':
        return 2011
      case 'C':
        return 2012
      case 'D':
        return 2013
      case 'E':
        return 2014
      case 'F':
        return 2015
      case 'G':
        return 2016
      case 'H':
        return 2017
      case 'J':
        return 2018
      case 'K':
        return 2019
      case 'L':
        return 2020
      case 'M':
        return 2021
      case 'N':
        return 2022
      case 'P':
        return 2023
      case 'R':
        return 2024
      case 'S':
        return 2025
      case 'T':
        return 2026
      case 'V':
        return 2027
      case 'W':
        return 2028
      case 'X':
        return 2029
    }
  }
  return null
}

module.exports = {
  Make,
  Model,
  FuelType,
  getMake,
  getModel,
  getEngineSize,
  getFuelType,
  getYear
}
