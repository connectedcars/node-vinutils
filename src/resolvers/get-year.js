const validateVIN = require('../validators/validate-vin')

const yearMap = {
  A: 1980,
  B: 1981,
  C: 1982,
  D: 1983,
  E: 1984,
  F: 1985,
  G: 1986,
  H: 1987,
  J: 1988,
  K: 1989,
  L: 1990,
  M: 1991,
  N: 1992,
  P: 1993,
  R: 1994,
  S: 1995,
  T: 1996,
  V: 1997,
  W: 1998,
  X: 1999,
  Y: 2000,
  '1': 2001,
  '2': 2002,
  '3': 2003,
  '4': 2004,
  '5': 2005,
  '6': 2006,
  '7': 2007,
  '8': 2008,
  '9': 2009
}

const getYearFromVIN = vin => {
  let model = vin.substr(3, 5)
  let char = vin.substr(9, 1).toUpperCase()
  let useNew = /^[A-Z]$/.test(vin.substr(6, 1))
  switch (vin.substr(0, 3)) {
    case '3VW':
      switch (model) {
        case 'CD61K':
          useNew = true
          break
      }
      break
    case 'TMB':
      switch (model) {
        case 'AB73T':
          useNew = /^[A-Y1-8]$/.test(char)
          break
        case 'AD73T':
          useNew = /^[A-Y1-8]$/.test(char)
          break
        case 'AE73T':
          useNew = /^[A-Y1-8]$/.test(char)
          break
        case 'AF93T':
          useNew = /^[A-Y1-8]$/.test(char)
          break
        case 'BE61Z':
          useNew = /^[A-Y1-5]$/.test(char)
          break
        case 'CC73T':
          useNew = /^[A-Y1-8]$/.test(char)
          break
        case 'CS21Z':
          useNew = /^[A-Y1-7]$/.test(char)
          break
        case 'GE61Z':
          useNew = /^[A-Y1-5]$/.test(char)
          break
        case 'GF65J':
          useNew = /^[A-Y1-7]$/.test(char)
          break
        case 'GJ61Z':
          useNew = /^[A-Y1-8]$/.test(char)
          break
        case 'GS61Z':
          useNew = /^[A-Y1-5]$/.test(char)
          break
        case 'HE61Z':
          useNew = /^[A-Y1-5]$/.test(char)
          break
        case 'HJ61Z':
          useNew = /^[A-Y1-8]$/.test(char)
          break
        case 'MC65J':
          useNew = /^[A-Y1-7]$/.test(char)
          break
        case 'UH61Z':
          useNew = /^[A-Y1-7]$/.test(char)
          break
        case 'AA73T':
        case 'AB93T':
        case 'AF73T':
        case 'AH73T':
        case 'AJ73T':
        case 'AJ93T':
        case 'BJ61Z':
        case 'BM61Z':
        case 'BT61Z':
        case 'CF73T':
        case 'CJ61Z':
        case 'CK61Z':
        case 'CM61Z':
        case 'CT21Z':
        case 'CT61Z':
        case 'DG41U':
        case 'DM61Z':
        case 'EA25J':
        case 'EA65J':
        case 'EH25J':
        case 'EH65J':
        case 'EJ65J':
        case 'EK65J':
        case 'EL65J':
        case 'EM25J':
        case 'EM65J':
        case 'EN65J':
        case 'FK61Z':
        case 'GK61Z':
        case 'GM61Z':
        case 'GT61Z':
        case 'HK61Z':
        case 'HM61Z':
        case 'HT61Z':
        case 'HX61Z':
        case 'JA65J':
        case 'JA73T':
        case 'JB73T':
        case 'JB93T':
        case 'JC25J':
        case 'JC75L':
        case 'JD75L':
        case 'JE73T':
        case 'JE93T':
        case 'JF73T':
        case 'JF75L':
        case 'JF93T':
        case 'JH65J':
        case 'JH73T':
        case 'JH93T':
        case 'JJ65J':
        case 'JJ73T':
        case 'JJ75L':
        case 'JJ93T':
        case 'JJ95L':
        case 'JK65J':
        case 'JL65J':
        case 'JM25J':
        case 'JM61Z':
        case 'JM65J':
        case 'JN65J':
        case 'JT61Z':
        case 'JT75L':
        case 'LB75L':
        case 'LC73T':
        case 'LC75L':
        case 'LC93T':
        case 'LD75L':
        case 'LE75L':
        case 'LE95L':
        case 'LF73T':
        case 'LF93T':
        case 'NH65J':
        case 'NK65J':
        case 'NL65J':
        case 'NM65J':
        case 'NN65J':
          useNew = true
          break
      }
      break
    case 'TRU':
      switch (model) {
        case 'ZZZ8J':
          useNew = /^[A-Y1-6]$/.test(char)
          break
        case 'ZZZ8P':
          useNew = /^[A-Y1-7]$/.test(char)
          break
      }
      break
    case 'VSS':
      switch (model) {
        case 'ZZZ1P':
          useNew = /^[A-Y1-5]$/.test(char)
          break
        case 'ZZZ5P':
          useNew = /^[A-Y1-4]$/.test(char)
          break
        case 'ZZZ6J':
          useNew = /^[A-Y1-8]$/.test(char)
          break
        case 'ZZZ3R':
        case 'ZZZ5F':
        case 'ZZZ7N':
          useNew = true
          break
      }
      break
    case 'VWV':
      switch (model) {
        case 'ZZZ6R':
          useNew = true
          break
      }
      break
    case 'WAU':
      switch (model) {
        case 'ZZZ4E':
          useNew = /^[A-Y1-2]$/.test(char)
          break
        case 'ZZZ4F':
          useNew = /^[A-Y1-4]$/.test(char)
          break
        case 'ZZZ4L':
          useNew = /^[A-Y1-6]$/.test(char)
          break
        case 'ZZZ8K':
          useNew = /^[A-Y1-7]$/.test(char)
          break
        case 'ZZZ8P':
          useNew = /^[A-Y]$/.test(char)
          break
        case 'ZZZ8R':
          useNew = /^[A-Y1-8]$/.test(char)
          break
        case 'ZZZ8T':
          useNew = /^[A-Y1-7]$/.test(char)
          break
        case 'ZZZBE':
          useNew = /^[A-Y1-4]$/.test(char)
          break
        case 'ZZZ4G':
        case 'ZZZ4H':
        case 'ZZZ4M':
        case 'ZZZ8F':
        case 'ZZZ8U':
        case 'ZZZ8V':
        case 'ZZZ8X':
          useNew = true
          break
      }
      break
    case 'WP0':
      switch (model) {
        case 'ZZZ98':
          useNew = /^[A-T]$/.test(char)
          break
        case 'ZZZ99':
          useNew = /^[A-Q]$/.test(char)
          break
        case 'ZZZ97':
          useNew = true
          break
      }
      break
    case 'WP1':
      switch (model) {
        case 'ZZZ92':
          useNew = /^[A-Y1-7]$/.test(char)
          break
        case 'ZZZ9P':
          useNew = /^[A-Y1-2]$/.test(char)
          break
        case 'ZZZ95':
        case 'ZZZ9Y':
          useNew = true
          break
      }
      break
    case 'WUA':
      switch (model) {
        case 'ZZZ42':
          useNew = /^[A-Y1-7]$/.test(char)
          break
        case 'ZZZ4F':
          useNew = /^[A-Y1-7]$/.test(char)
          break
        case 'ZZZ4L':
          useNew = /^[A-Y1-8]$/.test(char)
          break
        case 'ZZZ8P':
          useNew = /^[A-Y1-6]$/.test(char)
          break
        case 'ZZZ4G':
        case 'ZZZ4H':
        case 'ZZZ8F':
        case 'ZZZ8K':
        case 'ZZZ8T':
        case 'ZZZ8U':
        case 'ZZZ8V':
          useNew = true
          break
      }
      break
    case 'WV1':
      switch (model) {
        case 'ZZZ2E':
          useNew = /^[A-Y1-6]$/.test(char)
          break
        case 'ZZZ2F':
          useNew = /^[A-Y1-6]$/.test(char)
          break
        case 'ZZZ2K':
          useNew = /^[A-Y1-3]$/.test(char)
          break
        case 'ZZZ7H':
          useNew = /^[A-Y1-3]$/.test(char)
          break
        case 'ZZZ7J':
          useNew = /^[A-Y1-3]$/.test(char)
          break
        case 'ZZZ2H':
          useNew = true
          break
      }
      break
    case 'WV2':
      switch (model) {
        case 'ZZZ2K':
          useNew = /^[A-Y1-4]$/.test(char)
          break
        case 'ZZZ7H':
          useNew = /^[A-Y1-3]$/.test(char)
          break
      }
      break
    case 'WV3':
      switch (model) {
        case 'ZZZ7J':
          useNew = /^[A-Y1-4]$/.test(char)
          break
      }
      break
    case 'WVG':
      switch (model) {
        case 'ZZZ1T':
          useNew = /^[A-Y1-2]$/.test(char)
          break
        case 'ZZZ5N':
          useNew = /^[A-Y1-7]$/.test(char)
          break
        case 'ZZZ7L':
          useNew = /^[A-Y1-2]$/.test(char)
          break
        case 'ZZZ7P':
          useNew = true
          break
      }
      break
    case 'WVW':
      switch (model) {
        case 'ZZZ13':
          useNew = /^[A-Y1-8]$/.test(char)
          break
        case 'ZZZ1F':
          useNew = /^[A-Y1-6]$/.test(char)
          break
        case 'ZZZ1K':
          useNew = /^[A-Y1-3]$/.test(char)
          break
        case 'ZZZ1Y':
          useNew = /^[A-Y1-2]$/.test(char)
          break
        case 'ZZZ3C':
          useNew = /^[A-Y1-5]$/.test(char)
          break
        case 'ZZZ3D':
          useNew = /^[A-Y1-2]$/.test(char)
          break
        case 'ZZZ5Z':
          useNew = /^[A-Y1-5]$/.test(char)
          break
        case 'ZZZ16':
        case 'ZZZ1T':
        case 'ZZZ3H':
        case 'ZZZ6R':
        case 'ZZZ7N':
          useNew = true
          break
      }
      break
    case 'ZHW':
      switch (model) {
        case 'EC147':
        case 'GE51U':
        case 'GE61U':
        case 'GE62Z':
        case 'GE81J':
          useNew = true
          break
      }
      break
  }
  let year = yearMap[char] || null
  if (year && useNew) {
    year += 30
  }
  return year
}

/**
 * This method retrieves the year for a vehicle from the VIN.
 * Year from VIN uses the 10th character according to the specification with 7th
 * character to determine whether it's in the 1980-2009 or 2010-2039 range. This
 * method has overrides for a bunch of different models not following the 7th
 * character specification.
 *
 * @param {Object} vehicle
 * @param {string} vehicle.vin
 * @returns {number|null} Formatted with four digits
 */
module.exports = vehicle => {
  let year = null
  if (validateVIN(vehicle.vin)) {
    year = getYearFromVIN(vehicle.vin)
  }
  return year
}
