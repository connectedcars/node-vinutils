const Make = require('../constants/make')
const Model = require('../constants/model')
const FuelType = require('../constants/fuel-type')
const getModel = require('./get-model')

const getFuelTypeFromDescription = description => {
  if (description.match(/(e-golf|e-up!|e-up( |$))/i)) {
    return FuelType.ELECTRIC
  }
  if (description.match(/(gte|e-tron|hybrid)/i)) {
    return FuelType.HYBRID
  }
  if (description.match(/(sdi|tdi)/i)) {
    return FuelType.DIESEL
  }
  if (description.match(/(fsi|mpi|tfsi|tsi)/i)) {
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
 * @returns {string|null}
 */
module.exports = vehicle => {
  let fuelType = null
  if (vehicle.name) {
    fuelType = getFuelTypeFromDescription(vehicle.name)
  }
  if (!fuelType) {
    const model = getModel(vehicle)
    if (
      model === Model[Make.SEAT].MII ||
      model === Model[Make.SKODA].CITIGO ||
      model === Model[Make.VOLKSWAGEN].UP
    ) {
      fuelType = FuelType.GASOLINE
    }
  }
  return fuelType
}
