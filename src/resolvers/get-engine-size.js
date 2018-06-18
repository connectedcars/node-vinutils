const getEngineSizeFromDescription = description => {
  const match = description.match(/(?:[^\d]|^)(\d[,.]\d)(?:[^\d]|$)/)
  if (match) {
    return match[1].replace(',', '.')
  }
  return null
}

/**
 * This method retrieves the engine size for a vehicle from the description
 * (name).
 *
 * @param {Object} vehicle
 * @param {string} vehicle.vin
 * @param {string} [vehicle.name]
 * @returns {string|null} Formatted as `1.4`
 */
module.exports = vehicle => {
  let engineSize = null
  if (vehicle.name) {
    engineSize = getEngineSizeFromDescription(vehicle.name)
  }
  return engineSize
}
