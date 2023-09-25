import { Make } from '../constants/make'
import { Model, Models } from '../constants/model'

export function getModelFromVin(make: Make, vin: string): Models | null {
  if (make === Make.VOLKSWAGEN_COMMERCIAL_VEHICLES) {
    if (vin.match(/^WV1ZZZ7HZPH/)) {
      return Model[Make.VOLKSWAGEN_COMMERCIAL_VEHICLES].TRANSPORTER
    }
  }
  return null
}
