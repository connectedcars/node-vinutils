const expect = require('unexpected')
const getModel = require('./get-model')

const cases = [
  { name: 'VW Touran CL 1,4TSI 150HK DSG7 BMT 110kW', result: 'Touran' },
  { name: 'MOVE UP! 1,0MPI 60HK 5G BMT ', result: 'up!' },
  { name: 'SKODA Octavia HB Style 1,4 TSI 150 HK DSG', result: 'Octavia' },
  { name: 'VW PASSAT VAR COMF. 1,6TDI 105HK 6G', result: 'Passat' },
  { name: 'VW POLO COMF 1,6TDI 90HK 5G BMT 66KW', result: 'Polo' },
  { name: 'VW move up 1,0MPI 60HK 5G BMT', result: 'up!' },
  { name: 'TOLEDO STYLE 1,2 TSI 105HK 6 G', result: 'Toledo' },
  { name: 'SKODA Superb Combi Style 2,0 TDI 150 hk DSG', result: 'Superb' },
  { name: 'Tiguan', result: 'Tiguan' },
  { name: 'VW Golf Var Allstar 1,4TSI 125HK 6G BMT', result: 'Golf' },
  { name: 'Golf ', result: 'Golf' },
  { name: 'VW Sharan HL 2,0TDI 184hk DSG6 BMT SCR 135k', result: 'Sharan' },
  { name: 'a4', result: 'A4' },
  { name: 'NotA4', result: null },
  { name: 'Audi A3', result: 'A3' },
  { name: 'Audi S3', result: 'A3' },
  { name: 'Audi RS5', result: 'A5' },
  { name: 'Audi Q7', result: 'Q7' },
  { name: 'Audi SQ7', result: 'Q7' },
  { name: 'up!', result: 'up!' },
  { name: 'Volkswagen CC', result: 'CC' },
  { name: 'California', result: 'California' },
  { name: 'Grand California', result: 'Grand California' },
  { name: 'Bogus CCS', result: null },
  { name: 'bogus', result: null },
  { name: undefined, result: null },
  { name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI', result: 'Transporter' },
  { name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI', result: 'Transporter' },
  { name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI', result: 'Transporter' },
  { name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI', result: 'Transporter' },
  { name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI', result: 'Transporter' },
  { name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI', result: 'Transporter' },
  { name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI', result: 'Transporter' },
  { name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI', result: 'Transporter' },
  { name: 'VW T6 Lang Enka 2,0TDI 102hk 5G', result: 'Transporter' },
  { name: 'VW T5 CHASSIS LANG 2,0 TDI 140 HK BMT 6G', result: 'Transporter' },
  { name: 'VW T6 Kort Enka 2,0TDI 84hk 5G', result: 'Transporter' },
  { name: 'VW Crafter 35 Enka 4325mm 2,0 TDI 136 hk', result: 'Crafter' },
  { name: 'VW T6 Lang Enka 2,0TDI 102hk 5G', result: 'Transporter' },
  { name: 'VW Crafter 35 Enka 4325mm 2,0 TDI 136 hk', result: 'Crafter' },
  { name: 'VW T6 Kort Enka 2,0TDI 84hk 5G', result: 'Transporter' },
  { name: 'VW T6 Lang Enka 2,0TDI 102hk 5G', result: 'Transporter' },
  { name: 'VW T5 CHASSIS LANG 2,0 TDI 140 HK BMT DSG7', result: 'Transporter' },
  { name: 'VW T5 CHASSIS LANG 2,0 TDI 140 HK BMT DSG7', result: 'Transporter' },
  { name: 'VW T6 Lang Enka 2,0TDI 102hk 5G', result: 'Transporter' },
  { name: 'Citroen Jumper', result: null },
  { name: 'Ford Transit', result: null },
  { name: 'Fiat Doblo', result: null },
  { name: 'Fiat Ducato', result: null },
  { name: 'Mitsubishi Canter', result: null },
  { name: 'VW Crafter 35 Enka 4325mm 2,0 TDI 136 hk', result: 'Crafter' },
  { name: 'Ford Transit', result: null },
  { name: 'Nissan NV400', result: null },
  { name: 'Fiat Ducato', result: null }
]

describe('get-model', () => {
  describe('getModel', () => {
    for (const { name, result } of cases) {
      it(`resolves model for ${name}`, () => {
        expect(getModel({ vin: '', name }), 'to equal', result)
      })
    }
  })
})
