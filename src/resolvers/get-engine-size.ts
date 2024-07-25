import { Vehicle } from '../types/vehicle-type'

function getEngineSizeFromDescription(description: string): string | null {
  const match = description.match(/(?:[^\d]|^)(\d[,.]\d)(?:[^\d]|$)/)

  if (match) {
    return match[1].replaceAll(',', '.')
  }

  return null
}

/**
 * This method retrieves the engine size for a vehicle from the description
 * (name).
 *
 * @param vehicle Vehicle to get engine size for
 * @returns Formatted as `1.4`
 */
export function getEngineSize(vehicle: Vehicle): string | null {
  let engineSize = null

  if (vehicle.name) {
    engineSize = getEngineSizeFromDescription(vehicle.name)
  }

  return engineSize
}
