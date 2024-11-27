import { FuelType } from '../constants/fuel-type'
import { Make } from '../constants/make'
import { Model } from '../constants/model'
import type { Vehicle } from '../types/vehicle-type'
import { getMake } from './get-make'
import { getModel } from './get-model'

/**
 * This method retrieves the fuel type for a vehicle information such
 * as description and/or vin
 *
 * @param vehicle Vehicle to get fuel type from
 */
function getFuelTypeFromVehicleInfo(vehicle: Vehicle): FuelType | null {
  const description = vehicle.name

  if (description == null) {
    return null
  }

  const make = getMake(vehicle)

  switch (make) {
    case Make.AUDI: {
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
    }

    case Make.VOLKSWAGEN: {
      if (description.match(/gte/i)) {
        return FuelType.HYBRID
      }
      if (description.match(/(e-golf|e-up!|e-up( |$)|id\.[3-7])/i)) {
        return FuelType.ELECTRIC
      }
      break
    }

    case Make.SKODA: {
      if (description.match(/citigoe/i)) {
        return FuelType.ELECTRIC
      }
      if (description.match(/enyaq/i)) {
        return FuelType.ELECTRIC
      }
      if (description.match(/ iv /i)) {
        return FuelType.HYBRID
      }
      break
    }

    case Make.SEAT: {
      if (description.match(/mii electric/i)) {
        return FuelType.ELECTRIC
      }
      break
    }
    case Make.CUPRA: {
      if (description.match(/born|tavascan/i)) {
        return FuelType.ELECTRIC
      }
      break
    }

    default:
      break
  }

  if (description.match(/e-crafter/i)) {
    return FuelType.ELECTRIC
  } else if (description.match(/hybrid/i) && !description.match(/mild hybrid/i)) {
    return FuelType.HYBRID
  } else if (description.match(/(sdi|tdi)/i)) {
    return FuelType.DIESEL
  } else if (description.match(/(fsi|mpi|tfsi|tsi)/i)) {
    return FuelType.GASOLINE
  } else if (description.match(/(tgi)/i)) {
    return FuelType.NATURAL_GAS
  }

  return null
}

function parseRawFuelType(rawFuelType: string): FuelType | null {
  rawFuelType = rawFuelType.trim()
  if (rawFuelType.match(/^diesel$/i)) {
    return FuelType.DIESEL
  }
  if (rawFuelType.match(/^(?:gasoline|benzin)$/i)) {
    return FuelType.GASOLINE
  }
  if (rawFuelType.match(/^electric$/i)) {
    return FuelType.ELECTRIC
  }
  if (rawFuelType.match(/^hybrid$/i)) {
    return FuelType.HYBRID
  }
  if (rawFuelType.match(/^hybrid(?:_| )?diesel$/i)) {
    return FuelType.HYBRID_DIESEL
  }
  if (rawFuelType.match(/^natural(?:_| )?gas$/i)) {
    return FuelType.NATURAL_GAS
  }
  if (rawFuelType.match(/^hydrogen$/i)) {
    return FuelType.HYDROGEN
  }
  return null
}

/**
 * This method retrieves the fuel type for a vehicle from the description
 * (name) or by some predefined rules for specific models.
 *
 * @param vehicle Vehicle to get fuel type from
 */
export function getFuelType(vehicle: Vehicle): FuelType | null {
  let fuelType: FuelType | null = null

  if (vehicle.fuelType) {
    const parsedFuelType = parseRawFuelType(vehicle.fuelType)
    if (parsedFuelType) {
      fuelType = parsedFuelType
    }
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
