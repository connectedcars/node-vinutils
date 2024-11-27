function getEngineHorsepowerFromDescription(description: string): number | null {
  const match = description.match(/(\d{2}|\d{3})(| )(hk|hp|ps)/)

  if (match) {
    return parseInt(match[1] || match[3])
  }

  return null
}

/**
 * Returns the engine horsepower given the description
 *
 * @param description Description formatted as `102hk,80hk,102hp,80hp`
 */
export function getEngineHorsepower(description: string): number | null {
  let engineSize: number | null = null

  if (description) {
    engineSize = getEngineHorsepowerFromDescription(description.toLowerCase())
  }

  return engineSize
}
