const expect = require('unexpected')
const fs = require('fs')
const getMake = require('./get-make')

const fixture = JSON.parse(fs.readFileSync('./fixtures/vin-to-make.json', 'utf8'))

const skippedVINs = [
  'WDBADK7103C783435',
  'ZFA93700003231771',
  'ZFA94000007021569',
  'WDBDA310208458717',
  'ZFA93200001287001',
  'WAUZZZ8DZYA118007',
  '1J4FYN9P2WP746329',
  '1J4GZB8Y9SY505169',
  '1J4FYN9P2VP523710',
  'VF7X2RHYF72241068',
  '1J4GZN8M5TY124452',
  '1GTDC14K1KZ547254',
  '1J4FFB8S2YL257000',
  '1J4FJ78L1LL200011',
  '1J4GZB8Y9PC575985',
  '1J4FJ78SXML628832',
  '1J4FJ78S8ML564046',
  '1J4GZB8S4PC664715',
  '1J4GZB8S3SY506331',
  '1J4GWB8N2XY518545',
  '1J4FY59S0MJ143271',
  'VF1X1LFYF72037766',
  '1J4GZB8Y8RC344367',
  '1G8EK18C3FF183690',
  '1J4GZB8Y5WY112386',
  '1J4GZB8S2RC160926',
  '1J4GZB8Y7VY503103',
  'SAJDKALD4BJ724028',
  'ZLA83800001000554',
  'AFA17600000180479',
  'AFA17600000142426',
  'WMAT370772W027771',
  'SAJDKANS4BR764371',
  'SAJDKALH4AA583110',
  'VF6BXXWPFBFC62167',
  'ZAR35000000001574',
  'VF6BXXWPFBEL18132',
  'VF6BXXWPFBGT59064',
  'VSKDXXWGUDPC06038',
  '2FALP74W3SX139355',
  'JMZVXXSHKVGL04043',
  'JMZVXXSHKVGJ05655',
  'VSKDXXWGUDPE10882',
  'JMZVXXSHKVFA01507',
  'JMZVXXSHKVGJ05816',
  'VSKDXXWGUDSC26184',
  'JMZVXXSHKVFR00217',
  'JMZVXXSHKVGL04120',
  'VSKNXXWGUNSC27133',
  'ZFA15600000154819',
  'WVWL02P767G074309',
  'WMAM32ZZZ2Y091744',
  'JMBZJ14L201134446',
  'XLBLNP25WJA000587',
  'JMZBMKC12AHU00477',
  'TMBMNC15AGU404302',
  'VF1FDCML527550497',
  'VF1FDCUH528283860',
  'VF1FDCMH527761224',
  'VF1FDCUH528187915',
  'VF1FDCMH527761232',
  'VF1FDCMH527574435',
  'VF1FDCMH527761212',
  'VF7741A11E5104577',
  'WAUZZZ8K09A060002',
  'VF28BXFXA81401740',
  'ZFA127A0009094059',
  'ZFA127A0009060103',
  'ZFA127A0009062724',
  'ZFA127A0003089888',
  'YS2AM45J7E3008127',
  'JMBAEE200N0455727',
  'ZFA127A0009072811',
  'YS2AB55J1K7023559',
  'ZFA127A0003321517',
  'ZFA127A0003324696',
  'YS2PM4X2A01184030',
  'ZFA12740009125467',
  'VF7MAFCDC43394572',
  'ZFA127A0009075046',
  'ZFA127A0003283027',
  'ZFA127A0003332858',
  'ZFA127A0009105042',
  'ZFA127A0003315415',
  'WP0ZZZ92ZEN401457',
  'WAUZZZ3BZXP481028',
  'YS2ASW0C87B453959',
  'W0LGM8GC2A1091672',
  'U5YZU81BABL012593',
  'U5YZU81BABL015276',
  'WF07XXTTF78C22882',
  'U5YZU81BABL004974',
  'U5YZU81VABL008225',
  'U5YZT81VABL021110',
  'U5YZU81BABL014572',
  'U5YZU81VCBL083213',
  'U5YZU81VABL079627',
  'U5YZU81UABL102870',
  'YS2ASW0D28A665210',
  'U5YZU81BABL014442',
  'U5YZU81VDBL100929',
  'TMAEH813ABJ082121',
  'U5YZU81VDBL012601',
  'TMAEH811AAJ018427',
  'TMAEH811AAJ018793',
  'TMAEH813ABJ064036',
  'TMAEH813ABJ034031',
  'TMAEH813AAJ019102',
  'WJMA1VNH404331673',
  'TMAEH811AAJ018488',
  'TMAEH811ABJ041113',
  'TMAEH811AAJ018531',
  'TMAEH811AAJ018522',
  'TMAEH812BBJ041054',
  'TMAEH811AAJ024690',
  'TMAEH813ABJ041118',
  'TMAEH814ABJ033949',
  'TMAEH813AAJ019179',
  'TMAEH814ABJ044639',
  'TMAEH814ABJ034008',
  'TMAEH813ABJ081402',
  'TMAEH813ABJ073676',
  'TMAEH814ABJ060631',
  'TMAEH813ABJ033964',
  'TMAEH811ABJ054046',
  'TMAEH811AAJ031344',
  'TMAEH813ABJ039775',
  'TMAEH813ABJ033963',
  'TMAEH814ABJ074099',
  'TMAEH814AAJ031389',
  'TMAEH814AAJ031530',
  'TMAEH813ABJ081127',
  'TMAEH811ABJ081498',
  'TMAEH814ABJ034547',
  'TMAEH814AAJ031425',
  'TMAEH814ABJ041392',
  'TMAEH813ABJ054825',
  'TMAEH813AAJ024340',
  'TMAEH813ABJ081341',
  'TMAEH813ABJ044200',
  'TMAEH814ABJ068224',
  'TMAEH811AAJ018782',
  'TMAEH813AAJ020959',
  'TMAEH814ABJ033955',
  'TMAEH811AAJ018448',
  'TMAEH814ABJ034060',
  'TMAEH811ABJ034050',
  'WMA90SZZXBM576620',
  'LFVE3BLA2YA000100',
  'JL5PF507951040122',
  '1FUE3NLG060000015',
  'YV14252TDM0000415',
  'YV1425G00G0001517',
  'YV14259TLK0000285',
  'YV14252D0L0001535',
  'WMESDP27000W13180',
  'WF0000000WF18DH85',
  'VF9DW340A80240189',
  'WF000000WF16DLH21',
  'SDBCTL2247WM21320',
  'VF9CAR3301P718074',
  'VF9DS0300D0024232',
  'ZAR19900000555798',
  'ZFA22500000093697',
  'TMAEH811AAJ018479',
  'U5YZU81BABL011818',
  'U5YZU81VABL008221',
  'U5YZU81BABL012182',
  'TMAEH811AAJ018538',
  'U5YZU81VABL008243',
  'TMAEH811AAJ018357',
  'TMAEH814ABJ041312',
  'TMAEH812BBJ041084',
  'U5YZU81UABL077755',
  'ZFA95500001011042',
  'VF3S1KFXF56192569',
  'ZFA25000002471408',
  '1J4FA44S55P359542',
  'TMAEH814ABJ039703',
  'TMAEH811ABJ033981',
  'TMAEH811ABJ040449',
  '1J4FY29S4MJ142655',
  'VF6N4208P00678163',
  'TMAEH813ABJ033972',
  '1J4GK58K95W651928',
  'ZFA94000007045358',
  'U5YZU81BABL081922',
  'VF1FDCMH527574426',
  'TMAEH813ABJ068193',
  'TMAEH814ABJ081450',
  '1C6RR7HT5ES250700',
  'VF1FC8HXB26525560',
  '1C4BU0000GPD46467',
  '1C4RJFCM9CC261877',
  'WF0JXXTTGJGS08707',
  'TMAEH811AAJ024560',
  'LFVE3NLG060000028',
  '1C4RJFJM3GC468841',
  '1C4BU0000HPF35901',
  'TMAEH814ABJ034049',
  '1C6RR7NT8JS135412',
  'ZFA25000002925325',
  'VF1HJD20560443501',
  '1C4HJWE52CL225935',
  'TYBFEB74ELDZ04674',
  '1C4RJFBM5EC170092',
  'ZFA25000002914620',
  'TYBFEB01ELDX05715',
  'ZFA25000002A97918',
  'YV1BW485BC1234920',
  '2C3CDYBT5DH500751',
  '1C4BU0000GPD93611',
  '1C4BU0000GPE17535',
  'WF0JXXTTGJFP32736',
  '3C4PFABY8CT279601',
  '1C4BU0000HPE54104',
  '1C4RJFCM7CC253857',
  'ZFA25000002A20654',
  '3C4PFABYXCT279583',
  '1C4BU0000GPE15810',
  '1C6RR7MT3HS738229',
  '1C4BU0000GPE15822',
  '1J4FJN8M2SL525861',
  '1J4FJ68L7LL204588',
  '1J4FJ78L3LL154729',
  '1J4GW68N2XC512362',
  '1J4FY49S0SP278433',
  'ZAR93000004090979',
  '3D3HA18H75G829934',
  'VF1HJD20260095222',
  '3C4PFABY0CT279530',
  '1J4GZB8Y8PC575864',
  '1J4GZB8Y3SY501876',
  '1J4GW58NXYC339458',
  '1J4FJ78S4ML571284',
  '1J4FJ78S6ML601563',
  'VF6BXXWPFBDL69867',
  'VF3233H4215973460',
  'VF6BXXWPFBGS26512',
  'VF6BXXWPFBKP85875',
  '1FA28000000363211',
  'AFA24500007276019',
  'ZAR19800004088850',
  'VSKDXXWGUDPC06943',
  'WVW5650869G0J8499',
  'JMBZA155200667506',
  'SCFC5980105148380',
  'WMAT333101M260125',
  'VF1FDCMH528064901',
  'ZFA127A0009076804',
  'VF22DNFUF42696320',
  'ZFA127A0003335206',
  'ZFA127A0009165013',
  'VF27CKFXE32274534',
  'VF27EXFZE80527401',
  'YS2AA45C3K7009550',
  'YV3AA45C9J3029646',
  'SDB280G5200691920',
  'VSA021A0009093225',
  'ZFA127A0009119782',
  'U5YZU81BABL015480',
  'TMAEH811ABJ068628',
  'TMAEH813ABJ046547',
  'TMAEH811AAJ018457',
  'TMAEH811ABJ040309',
  'U5YZU81VABL011392',
  'TMAEH811AAJ031394',
  'TMAEH814ABJ060620',
  'TMAEK813AAJ007316',
  'TMAEH813ABJ034549',
  'ZDFSC58B06F012512',
  'TMAEH814ABJ073989',
  'WVWZZZ3AZRE040132',
  'WDF2DC5BH91025244',
  'WBY5205TVL1100999',
  'ZFA18500002066384',
  'MC294241302081602',
  'WDB9323051L192717',
  'U5YZU81VABL008255',
  '1G8EK18L7CF113265',
  'VF68BRFNA81357039',
  '1G8ED18JXEF201111',
  'TMAEH814ABJ040282',
  'TMAEH813ABJ033982',
  'U5YZU81BABL014301',
  '1J4FYN9P3WP716014',
  'U5YZU81VABL023507',
  'ZFA31200000969057',
  'W0LVSU4F2AB014257',
  'TMAEH814ABJ081710',
  'SADDWATL3AC200960',
  '1J4GZ78Y2TC243166',
  '1J4G27846TC321352',
  '1J4FJ78L4LL247307',
  '1J4FYN9P7SP233460',
  'ZAR18200004055307',
  '1J4GZB8S8SC539936',
  'ZFA16900000277918',
  'WME4513001K179956',
  'VF6BXXWPFBJK62286',
  'JMZVXXSHKVGL04169',
  'SJNBCAP11U0112426',
  '1MEBM55U2KG655341',
  'JMZVXXSHKVJS52346',
  'WJMB1DC8M04049051',
  'VF1JA0G0C17928028',
  'VF1FDCMH527889160',
  'VF1FDCMH527574445',
  'MCBLNDG1A1F029530',
  'VF1FDCMH527574446',
  'VF1FDCMH527574444',
  'VF1FDCMH527951940',
  'VF3C57B0512018892',
  'ZFA127A0009062619',
  'VSSC40505L0000245',
  'ZFA127A0009077331',
  'ZFA127A0009060556',
  'TMAEH813ABJ044202',
  'TMAEH813AAJ024369',
  'U5YZU81BBBL029694',
  'WDB2116081B387849',
  'U5YZU81VABL011391',
  'TMAEH814ABJ064124',
  'U5YZU81BABL004401',
  'TMAEH813ABJ081970',
  'TMAEH813AAJ020942',
  'TMAEH814AAJ020368',
  'TMAEH811ABJ040319',
  'TMAEH813AAJ021194',
  'TMAEH811ABJ033804',
  'TMAEH813ABJ073129',
  'TMAEH814ABJ047527',
  'YV14052TFE5020105',
  'VF9RPPX0183109062',
  'WF0VXXGBVVLY46175',
  'VF1S3MPC12F021856',
  'VF9CAR3101P718065',
  'U5YZU81BABL014393',
  'TMAEH813AAJ020914',
  'U5YZU81BABL014282',
  'TYBFEB01ELDX01924',
  'VF1HJD20758945071',
  'TYBFECX1ELDY05314',
  '1J4GZB8Y8TY100535',
  'SAJDKALH4AA580332',
  'AFA18200004448933',
  'SFA23000006128672',
  'VSSBXXWPFBEG00810',
  'JMZVXXSHKVGY04562',
  'WP0AXXGCAASU84283',
  'WJMB1DC8M04049065',
  'WVWL02X981G087562',
  'WP0AXXGBBAYR34928',
  'WP0WXXGBBW1B63778',
  'WJMB1DC8M04051037',
  'VF1FDCMM527634205',
  'VF1FDCMH527599841',
  'VF1FDCUM528570680'
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
