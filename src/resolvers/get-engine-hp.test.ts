import { getEngineHorsepower } from './get-engine-hp'

const cases = [
  { description: 'CADDY TRENDL EU6 TSI 84HK', result: 84 },
  { description: 'CADDY TRENDL EU6 TSI 125HK DSG', result: 125 },
  { description: 'CADDY TRENDL 1,0 TSI 84 HK', result: 84 },
  { description: 'CADDY SKÅP EU6 TSI 84HK', result: 84 },
  { description: 'CADDY SKÅP 1,2 TSI 84HK', result: 84 },
  { description: 'Caddy Maxi Trendline 1,0 TSI 102hk man', result: 102 },
  { description: 'CADDY CONCEPTL TSI 84HK', result: 84 },
  { description: 'TRP PROLINE SKÅP 102HK 340', result: 102 },
  { description: 'TRP PROLINE SKÅP 102HK 300', result: 102 },
  { description: 'TRP PROLINE P-U EH 102HK 340', result: 102 },
  { description: 'TRP PROLINE P-U EH 102HK 300', result: 102 },
  { description: 'TRP PROLINE P-U DH 102HK 340', result: 102 },
  { description: 'TRP KOM 150HK TDI DSG', result: 150 },
  { description: 'Transporter T6 2.0 TDI BMT Skåp (150hk)', result: 150 },
  { description: 'Transporter T6 2.0 TDI BMT 4MOTION (204hk)', result: 204 },
  { description: 'Transporter T6 2.0 TDI BMT (150hk)', result: 150 },
  { description: 'Transporter T5 2.0 TDI Pickup (140hk)', result: 140 },
  { description: 'Transporter skåp', result: null },
  { description: 'TRP PROLINE P-U EH 102HP 300', result: 102 },
  { description: 'TRP PROLINE P-U DH 102 HP 340', result: 102 }
]

describe('get-engine-hp', () => {
  describe('getEngineHorsepower', () => {
    for (const { description, result } of cases) {
      it(`resolves engine for ${description} (${result})`, () => {
        expect(getEngineHorsepower(description)).toEqual(result)
      })
    }
  })
})
