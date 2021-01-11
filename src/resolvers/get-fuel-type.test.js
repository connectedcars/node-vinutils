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
  { vin: 'WV1ZZZ2KZLX086718', name: 'tgi', result: FuelType.NATURAL_GAS },
  { vin: '', name: 'Audi A3 SB PRE 40 TFSI e 204 HK S tro', result: FuelType.HYBRID },
  { vin: '', name: 'Audi A6 Limo Sport PRE 50 TFSI e qua 299 HK S', result: FuelType.HYBRID },
  { vin: '', name: 'Audi A6 Avant 55 TFSI e 367 hk quattro S tronic S line', result: FuelType.HYBRID },
  { vin: '', name: 'AUDI A6 AVANT 3,0 TDI 204 HK 150 KW 8 TRINS M', result: FuelType.DIESEL },
  { vin: '', name: 'AUDI A6 ALLROAD 3,0 TFSI 333 HK 245 KW QUATTR', result: FuelType.GASOLINE },
  { vin: '', name: 'VW ID.3 1st Max 204HK AUT1 Performance', result: FuelType.ELECTRIC }
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
