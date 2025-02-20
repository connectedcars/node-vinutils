import { Make } from '../constants/make'
import { Model, Models } from '../constants/model'

export function getModelFromVin(make: Make, vin: string): Models | null {
  switch (make) {
    case Make.VOLKSWAGEN: {
      if (vin.match(/^WVGZZZ5NZKW/)) {
        return Model[Make.VOLKSWAGEN].TIGUAN
      }
      break
    }
    case Make.VOLKSWAGEN_COMMERCIAL_VEHICLES: {
      // This might match models like Caravelle, Multivan, California, etc., so this entire function need to be prioritized lower than the description matcher
      if (vin.match(/^WV\dZZZ7(H|J)/)) {
        return Model[Make.VOLKSWAGEN_COMMERCIAL_VEHICLES].TRANSPORTER
      }
      break
    }
  }
  return null
}
