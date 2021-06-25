const Make = require('../constants/make')
const Model = require('../constants/model')
const FuelType = require('../constants/fuel-type')
const getModel = require('./get-model')

const getFuelTypeFromDescription = description => {
  if (description.match(/e-tron/i) && description.match(/tdi/i)) {
    return FuelType.HYBRID_DIESEL
  }
  if (
    description.match(/(gte|a3.+e-tron|q7.+e-tron|tfsi e)/i) ||
    (description.match(/hybrid/i) && !description.match(/mild hybrid/i))
  ) {
    return FuelType.HYBRID
  }
  if (description.match(/(e-golf|citigoe|mii electric|e-up!|e-up( |$)|e-tron|id\.3)/i)) {
    return FuelType.ELECTRIC
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
    fuelType = getFuelTypeFromDescription(vehicle.name)
  }
  if (!fuelType) {
    const model = getModel(vehicle)
    if (model === Model[Make.SEAT].MII || model === Model[Make.SKODA].CITIGO || model === Model[Make.VOLKSWAGEN].UP) {
      fuelType = FuelType.GASOLINE
    }
  }
  return fuelType
}
