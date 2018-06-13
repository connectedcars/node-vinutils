const expect = require('unexpected')
const fs = require('fs')
const getMake = require('./get-make')

const fixture = JSON.parse(
  fs.readFileSync('./fixtures/vin-to-make.json', 'utf8')
)

const skippedVINs = [
  'WAUZZZ8DZYA118007',
  'TMBMNC15AGU404302',
  'WAUZZZ8K09A060002',
  'WP0ZZZ92ZEN401457',
  'WAUZZZ3BZXP481028',
  'LFVE3BLA2YA000100',
  'LFVE3NLG060000028',
  'WVWZZZ3AZRE040132',
  'VSSC40505L0000245',
  'VSSBXXWPFBEG00810',
  'WP0AXXGCAASU84283',
  'WP0AXXGBBAYR34928',
  'WP0WXXGBBW1B63778',
  'WV2AS02AX8A665004',
  'LFVE4NLK050000282',
  'WAUZZZ3CZAE180740',
  'VWVSLC75081000092',
  'WP0NXXGCANTG37825',
  'LFVE4NLK050000267',
  'WV2ZZZ70ZVH095219',
  'WP0AXXGBBAEG10471',
  'WVWZZZ8E32A017287',
  'TMBL043GVFY400139',
  'WV3ZZZ7JZEX022143',
  'WVWZZZ1GZMW686250',
  'WAUZZZGA3JA066857',
  'WP0LXXGBVLPK42976',
  'TMB10M00SE2848858',
  'WVWZZZ3BZWE272062',
  'WVWZZZ8DZTA154131',
  'WVWZZZ8DZTA098962',
  'WP0LXXGBVLXL78548',
  'LFVE3NLG060000038',
  'TMBDB51SACJ246653',
  'VSSZZZ6KZTR173501',
  'LFVE3BLA7YA000108',
  'WAUZZZ8E94A143267',
  'WV2ZZZ70ZSH105337',
  'WAUZZZ1KZ8M315977',
  'WV1ZZZ7HZ8H086241',
  'LFVE4NLK050000258'
]

describe('resolvers/get-make', () => {
  describe('getMake', () => {
    for (let vin in fixture) {
      if (skippedVINs.includes(vin)) {
        xit(`gets ${fixture[vin]} from ${vin}`)
        continue
      }
      it(`gets ${fixture[vin]} from ${vin}`, () => {
        expect(getMake({ vin }), 'to equal', fixture[vin])
      })
    }
  })
})
