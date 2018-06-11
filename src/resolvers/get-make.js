const Make = require('../constants/make')
const validateVIN = require('../validators/validate-vin')

const getMakeFromVIN = vin => {
  switch (vin.substr(0, 3)) {
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
  return null
}
const getMakeFromDescription = description => {
  if (description.match(/audi/i)) {
    return Make.AUDI
  }
  if (description.match(/seat/i)) {
    return Make.SEAT
  }
  if (description.match(/(škoda|skoda)/i)) {
    return Make.SKODA
  }
  if (description.match(/(volkswagen|vw)/i)) {
    return Make.VOLKSWAGEN
  }
  return null
}

/**
 * This method retrieves the make of a car from the vehicle VIN or description
 * (name).
 *
 * @param {{ vin: string, name: string }} car
 * @returns {string|null}
 */
module.exports = car => {
  let make = null
  if (validateVIN(car.vin)) {
    make = getMakeFromVIN(car.vin)
  }
  if (!make) {
    if (car.name) {
      make = getMakeFromDescription(car.name)
    }
  }
  return make
}
