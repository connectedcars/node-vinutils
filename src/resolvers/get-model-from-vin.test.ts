import { Make } from '../constants/make'
import { Models } from '../constants/model'
import { getModelFromVin } from './get-model-from-vin'

type Testcase = {
  vin: string
  make: Make
  result: Models | null
}

const cases: Testcase[] = [
  {
    vin: 'WV1ZZZ7HZPH000000',
    make: Make.VOLKSWAGEN_COMMERCIAL_VEHICLES,
    result: 'Transporter'
  },
  {
    vin: 'WV1ZZZ7HZPH000001',
    make: Make.VOLKSWAGEN_COMMERCIAL_VEHICLES,
    result: 'Transporter'
  },
  {
    vin: 'WV1ZZZ7HZPH000003',
    make: Make.VOLKSWAGEN_COMMERCIAL_VEHICLES,
    result: 'Transporter'
  },
  // WRONG VIN
  {
    vin: 'WV2ZZZ7HZPH000002',
    make: Make.VOLKSWAGEN_COMMERCIAL_VEHICLES,
    result: null
  },
  // WRONG MAKE
  {
    vin: 'WV1ZZZ7HZPH000000',
    make: Make.VOLKSWAGEN,
    result: null
  }
]
describe('get-model-from-vin', () => {
  describe('getModelFromVin', () => {
    for (const { vin, result, make } of cases) {
      it(`resolves model for ${result} (${vin})`, () => {
        expect(getModelFromVin(make, vin)).toEqual(result)
      })
    }
  })
})
