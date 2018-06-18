const Make = require('../constants/make')
const validateVIN = require('../validators/validate-vin')

const getMakeFromVIN = vin => {
  switch (vin.substr(0, 3)) {
    case 'TRU':
    case 'WAU':
    case 'WA1':
    case 'WUA':
    case '93U':
    case '93V':
    case '99A':
      return Make.AUDI
    case 'ZHW':
      return Make.LAMBORGHINI
    case 'WP1':
    case 'WP0':
    case 'VP1':
    case 'EP0':
    case 'VP0':
    case 'MP1':
    case '0P0':
      return Make.PORSCHE
    case 'VSS':
      return Make.SEAT
    case 'TMB':
    case 'TMP':
    case 'TM9':
      return Make.SKODA
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
  }
  return null
}
const getMakeFromDescription = description => {
  if (description.match(/audi/i)) {
    return Make.AUDI
  }
  if (description.match(/lamborghini/i)) {
    return Make.LAMBORGHINI
  }
  if (description.match(/porsche/i)) {
    return Make.PORSCHE
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
 * This method retrieves the make of a vehicle from the VIN or description
 * (name).
 *
 * @param {Object} vehicle
 * @param {string} vehicle.vin
 * @param {string} [vehicle.name]
 * @returns {string|null}
 */
module.exports = vehicle => {
  let make = null
  if (validateVIN(vehicle.vin)) {
    make = getMakeFromVIN(vehicle.vin)
  }
  if (!make) {
    if (vehicle.name) {
      make = getMakeFromDescription(vehicle.name)
    }
  }
  return make
}
