const getEngineSizeFromDescription = description => {
  const match = description.match(/(?:[^\d]|^)(\d[,.]\d)(?:[^\d]|$)/)
  if (match) {
    return match[1].replace(',', '.')
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
module.exports = car => {
  let engineSize = null
  if (car.name) {
    engineSize = getEngineSizeFromDescription(car.name)
  }
  return engineSize
}
