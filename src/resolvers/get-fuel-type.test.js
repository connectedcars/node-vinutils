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
  { vin: '', name: 'VW ID.3 1st Max 204HK AUT1 Performance', result: FuelType.ELECTRIC },
  { vin: '', name: 'VW Golf Life 1,5eTSI 150HK DSG7 Mild hybrid', result: FuelType.GASOLINE },
  { vin: '', name: 'VW Golf Style eHybrid 1,4TSI 204HK DSG6', result: FuelType.HYBRID },
  { vin: '', name: 'SEAT Ny Leon 5D e-HYB 1,4 TSI 204 HK e-HYBRID', result: FuelType.HYBRID },
  { vin: '', name: 'VW Passat Var GTE Hybrid 1,4TSI 218HK DSG6', result: FuelType.HYBRID },
  { vin: '', name: 'SEAT Ny Leon SP Xcellence 1,5 eTSI 150 HK DSG', result: FuelType.GASOLINE },
  { vin: '', name: 'SKODA OCTAVIA A8 COMBI Style 1ED 1,0 eTSI 110', result: FuelType.GASOLINE },
  { vin: '', name: 'Audi Q7 e-tron 3,0 TDI qua 258 HK tip', result: FuelType.HYBRID_DIESEL },
  { vin: '', name: 'Audi Q7 SUV e-tron 3,0 TDI 374 hk 275 kW E-tr', result: FuelType.HYBRID_DIESEL },
  { vin: '', name: 'Audi Q7 SUV TdI 3,0 E-tRoN 374 hk 275 kW E-tr', result: FuelType.HYBRID_DIESEL },
  { vin: '', name: 'VW ID.4 1st 204HK AUT1 Performance', result: FuelType.ELECTRIC },
  { vin: '', name: 'VW e-Crafter L3 Kassevogn EL 136HK AUT1G', result: FuelType.ELECTRIC },
  { vin: '', name: 'AUDI A6 ALLROAD 3,0 TFSIe 333 HK 245 KW QUATTR', result: FuelType.HYBRID }
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
