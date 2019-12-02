const getEngineHorsepowerFromDescription = description => {
  const match = description.match(/(\d{2}|\d{3})(| )hk|(\d{2}|\d{3})(| )hp/)
  if (match) {
    return parseInt(match[1] || match[2])
  }
  return null
}

/**
 * Returns the engine horsepower given the description
 * @param {string} description description formatted as `102hk,80hk,102hp,80hp`
 */
module.exports = description => {
  let engineSize = null
  if (description) {
    engineSize = getEngineHorsepowerFromDescription(description.toLowerCase())
  }
  return engineSize
}
