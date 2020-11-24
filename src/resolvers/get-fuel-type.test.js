const expect = require('unexpected')
const getFuelType = require('./get-fuel-type')
const FuelType = require('../constants/fuel-type')

const cases = [
  {
    vin: 'WVWAAAAAAAA123456',
    name: 'VW Touran CL 1,4TSI 150HK DSG7 BMT 110kW',
    result: FuelType.GASOLINE,
    fuelType: 'benzin'
  },
  {
    vin: 'WVWAAAAAAAA123457',
    name: 'VW Touran CL 1,4TSI 150HK DSG7 BMT 110kW',
    result: FuelType.GASOLINE,
    fuelType: 'Gasoline'
  },
  { vin: 'WVWAAAAAAAA123458', name: 'gte', result: FuelType.HYBRID },
  { vin: 'WV1ZZZ2KZLX086718', name: 'tgi', result: FuelType.NATURAL_GAS }
]

describe('get-fuel-type', () => {
  describe('getFuelType', () => {
    for (const { vin, name, result, fuelType } of cases) {
      it(`resolves fuel type for ${name} (${fuelType})`, () => {
        expect(getFuelType({ vin, name, result, fuelType }), 'to equal', result)
      })
    }
  })
})
