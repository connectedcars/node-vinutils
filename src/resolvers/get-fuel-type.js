const Make = require('../constants/make')
const Model = require('../constants/model')
const FuelType = require('../constants/fuel-type')
const getModel = require('./get-model')
const getMake = require('./get-make')

/**
 * This method retrieves the fuel type for a vehicle information such
 * as description and/or vin
 *
 * @param {Object} vehicle
 * @param {string} vehicle.vin
 * @param {string} vehicle.name
 * @returns {Fuels|null}
 */
const getFuelTypeFromVehicleInfo = vehicle => {
  const description = vehicle.name
  const make = getMake(vehicle)
  switch (make) {
    case Make.AUDI:
      if (description.match(/e-tron/i) && description.match(/tdi/i)) {
        return FuelType.HYBRID_DIESEL
      }
      // Some of the following regexes uses negative look-behinds to account for
      // malicious input that will cause them to perform poorly.
      //
      // https://codeql.github.com/codeql-query-help/javascript/js-polynomial-redos/
      if (description.match(/((?<!(a3))a3.+e-tron|(?<!(q7))q7.+e-tron|tfsi ?e)/i)) {
        return FuelType.HYBRID
      }
      if (description.match(/e-tron/i)) {
        return FuelType.ELECTRIC
      }
      break
    case Make.VOLKSWAGEN:
      if (description.match(/gte/i)) {
        return FuelType.HYBRID
      }
      if (description.match(/(e-golf|e-up!|e-up( |$)|id\.[3-5])/i)) {
        return FuelType.ELECTRIC
      }
      break
    case Make.SKODA:
      if (description.match(/citigoe/i)) {
        return FuelType.ELECTRIC
      }
      break
    case Make.SEAT:
      if (description.match(/mii electric/i)) {
        return FuelType.ELECTRIC
      }
      break
    default:
      break
  }
  if (description.match(/e-crafter/i)) {
    return FuelType.ELECTRIC
  }
  if (description.match(/hybrid/i) && !description.match(/mild hybrid/i)) {
    return FuelType.HYBRID
  }
  if (description.match(/(sdi|tdi)/i)) {
    return FuelType.DIESEL
  }
  if (description.match(/(fsi|mpi|tfsi|tsi)/i)) {
    return FuelType.GASOLINE
  }
  if (description.match(/(tgi)/i)) {
    return FuelType.NATURAL_GAS
  }
  return null
}

const mapFuelTypeVariation = invalidFuelType => {
  if (invalidFuelType.match(/(benzin)/i)) {
    return FuelType.GASOLINE
  }
  return null
}

/**
 * This method retrieves the fuel type for a vehicle from the description (name)
 * or by some predefined rules for specific models.
 *
 * @param {Object} vehicle
 * @param {string} vehicle.vin
 * @param {string} [vehicle.name]
 * @returns {Fuels|null}
 */
module.exports = vehicle => {
  let fuelType = null

  if (vehicle.fuelType && !Object.values(FuelType).includes(vehicle.fuelType)) {
    fuelType = mapFuelTypeVariation(vehicle.fuelType)
  }

  if (!fuelType && vehicle.name) {
    fuelType = getFuelTypeFromVehicleInfo(vehicle)
  }
  if (!fuelType) {
    const model = getModel(vehicle)
    if (model === Model[Make.SEAT].MII || model === Model[Make.SKODA].CITIGO || model === Model[Make.VOLKSWAGEN].UP) {
      fuelType = FuelType.GASOLINE
    }
  }
  return fuelType
}
