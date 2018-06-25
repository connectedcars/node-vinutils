const expect = require('unexpected')
const fs = require('fs')
const validateVIN = require('./validate-vin')

const fixture = JSON.parse(fs.readFileSync('./fixtures/vin.json', 'utf8'))

const skippedVINs = [
  'JN1TENT30Z0111634',
  'UJGCHA323IV000145',
  'UJGCHA323IV000146',
  'UJGCHA323IV000147',
  'UJGCHA323IV000148',
  'UJGCHA323IV000149',
  'UJGCHB323IV000177',
  'UJGCHB323IV000179',
  'WAUZZZ8E8ZA114145',
  'WF0ZXXTTGZEG47536',
  'WF0ZXXTTGZES73825',
  'WF0ZXXTTGZEU41281',
  'WVWZZZIKZAM632270'
]

describe('validators/validate-vin', () => {
  describe('validateVIN', () => {
    for (const vin of fixture) {
      if (/O/.test(vin)) {
        xit(`gets valid VIN from ${vin}`)
        continue
      }
      if (skippedVINs.includes(vin)) {
        xit(`gets valid VIN from ${vin}`)
        continue
      }
      it(`gets valid VIN from ${vin}`, () => {
        expect(validateVIN(vin), 'to be', true)
      })
    }
  })
})
