const fs = require('fs')
const es = require('event-stream')
const validateVIN = require('../src/validators/validate-vin')

var vinStream = fs.createWriteStream('./fixtures/vin.json')
var makeStream = fs.createWriteStream('./fixtures/vin-to-make.json')
// var modelStream = fs.createWriteStream('./fixtures/vin-to-model.json')
var yearStream = fs.createWriteStream('./fixtures/vin-to-year.json')

// let models = {}

const manus = [
  'ZAR',
  'SCF',
  'TRU',
  'WAU',
  'WA1',
  'WUA',
  '93U',
  '93V',
  '99A',
  'WBA',
  'WBS',
  'WBW',
  'WBY',
  '4US',
  'SCB',
  'VF9',
  '1G4',
  '2G4',
  '1G6',
  '1GY',
  'MMM',
  '1GC',
  '1G1',
  '2G1',
  '8AG',
  '8GG',
  '9BG',
  'LZZ',
  '1C3',
  '1C4',
  '1C6',
  '2A4',
  '2C3',
  '3C4',
  'VF7',
  'VS7',
  '935',
  'XLR',
  'SUP',
  'UU6',
  'XWB',
  'SCE',
  '1B3',
  '1D3',
  '2B3',
  '2B7',
  '2D3',
  '3D3',
  '3D4',
  'ZDM',
  'ZDF',
  'ZFF',
  'MCA',
  'SUF',
  'ZFA',
  'ZFC',
  '8AP',
  '9BD',
  'AFA',
  'LVS',
  'MAJ',
  'MNB',
  'NM0',
  'PE1',
  'SFA',
  'VS6',
  'WF0',
  '1FA',
  '1FB',
  '1FC',
  '1FD',
  '1FM',
  '1FT',
  '1ZV',
  '2FA',
  '2FB',
  '2FC',
  '2FM',
  '2FT',
  '3FA',
  '3FE',
  '6FP',
  '8AF',
  '9BF',
  '1FU',
  '1FV',
  '2FU',
  '2FV',
  'LSG',
  'MA6',
  'MCB',
  'XUF',
  '1GT',
  '2Gx',
  '6G1',
  '6H8',
  'MAK',
  'MHR',
  'MLH',
  'MRH',
  'NLA',
  'SHH',
  'SHS',
  '2HG',
  '2HK',
  '2HJ',
  '93H',
  'AC5',
  'ADD',
  'MAL',
  'NLH',
  'TMA',
  'X7M',
  '2HM',
  '5NP',
  'TRA',
  'TSE',
  'LZE',
  'MPA',
  'MP1',
  'NNA',
  'WJM',
  'ZCF',
  'SAD',
  'SAJ',
  '1J4',
  '1J8',
  '1XK',
  '6F5',
  'MS0',
  'U5Y',
  'U6Y',
  'XTA',
  'ZHW',
  'ZLA',
  'SAL',
  'SCC',
  'LZM',
  'VAN',
  'WMA',
  '6AB',
  'LSJ',
  'WMW',
  '1M1',
  '1M2',
  '1M3',
  '1M4',
  'ZAM',
  'JMZ',
  'MM8',
  'PE3',
  'YCM',
  '1YV',
  '3MD',
  '3MZ',
  '4F',
  'SBM',
  'MBR',
  'NLE',
  'NMB',
  'VSA',
  'WDB',
  'WDD',
  'WDF',
  'WMX',
  '4JG',
  '9BM',
  '1ME',
  'JA3',
  'JA4',
  'JL5',
  'JMB',
  'JMY',
  'MA7',
  'MMB',
  'MMC',
  'MMT',
  'TYA',
  'TYB',
  'XMC',
  '6MM',
  '93X',
  'MDH',
  'MNT',
  'SJN',
  'VSK',
  'VWA',
  '5N1',
  '6F4',
  '94D',
  '2NV',
  '4RK',
  '1G3',
  '2G3',
  'SKF',
  'VSX',
  'W0L',
  'W0V',
  'SDB',
  'VF3',
  '8AD',
  '8GD',
  '936',
  '1P3',
  '2P3',
  '3P3',
  '1G2',
  '1GM',
  '2G2',
  '6G2',
  'WP1',
  'WP0',
  'VP1',
  'EP0',
  'VP0',
  'MP1',
  '0P0',
  'KNM',
  'MEE',
  'UU1',
  'VF1',
  'VF2',
  'VF6',
  'X7L',
  '8A1',
  '93Y',
  '9FB',
  'SCA',
  'SAR',
  'YK1',
  'YS3',
  'YTN',
  '1G8',
  'VLU',
  'XLE',
  'YS2',
  'YS4',
  '9BS',
  'VSS',
  'TMB',
  'TMP',
  'TM9',
  'WME',
  'SUU',
  'KPA',
  'KPT',
  'LMC',
  'MA3',
  'MBH',
  'MLC',
  'MMS',
  'MS3',
  'TSM',
  'VSE',
  'VTT',
  '8AK',
  '5YJ',
  'AHT',
  'LTV',
  'MBJ',
  'MHF',
  'MR0',
  'NMT',
  'SB1',
  'TW1',
  'VNK',
  '6T1',
  '8AJ',
  '93R',
  '9BR',
  'SMT',
  'AAV',
  'LFV',
  'LSV',
  'MEX',
  'VWV',
  'WVG',
  'WVW',
  'WV1',
  'WV2',
  'WV3',
  'XW8',
  'YBW',
  '1VW',
  '2V4',
  '2V8',
  '3VW',
  '8AW',
  '9BW',
  'MC2',
  'XLB',
  'YB1',
  'YV1',
  'YV4',
  'YV2',
  'YV3',
  '4V1',
  '4V2',
  '4V3',
  '4V4',
  '4V5',
  '4V6',
  '4VL',
  '4VM',
  '4VZ',
  '2WK',
  '2WL',
  '2WM'
]

// let i = 0
let s = fs
  .createReadStream('./ESStatistikListeModtag-20180429-221916-extended.json')
  .pipe(es.split())
  .pipe(
    es
      .mapSync(function(line) {
        s.pause()

        if (line) {
          const data = JSON.parse(line)
          const vin = data.vin

          if (data.modelYear && data.modelYear >= 1980) {
            if (vinStream.bytesWritten < 10 * 1024 * 1024) {
              let hasEntries =
                vinStream.bytesWritten || vinStream.writableLength
              vinStream.write(`${hasEntries ? ',' : '['}"${vin}"`)
            }
          }
          if (validateVIN(vin) && manus.includes(vin.substr(0, 3))) {
            if (data.brand && makeStream.bytesWritten < 10 * 1024 * 1024) {
              let brand = data.brand
                .replace(/^(alfa|alfa romeo|lfa romeo|romeo)$/i, 'Alfa Romeo')
                .replace(/^(aston|aston martin)$/i, 'Aston Martin')
                .replace(/^(audi|udi)$/i, 'Audi')
                .replace(/^(bentley)$/i, 'Bentley')
                .replace(/^(bmw)$/i, 'BMW')
                .replace(/^(cheval|cheval liberté|magyar)$/i, 'Bugatti')
                .replace(/^(buick)$/i, 'Buick')
                .replace(/^(cadillac)$/i, 'Cadillac')
                .replace(/^(chevrolet|chervolet)$/i, 'Chevrolet')
                .replace(/^(chrysler)$/i, 'Chrysler')
                .replace(
                  /^(citroen.*|itroen|troen|roen|oen|citroën|itroën|troën|roën|oën)$/i,
                  'Citroën'
                )
                .replace(/^(dacia)$/i, 'Dacia')
                .replace(/^(daewoo|fso)$/i, 'Daewoo')
                .replace(/^(daihatsu)$/i, 'Daihatsu')
                .replace(/^(dodge)$/i, 'Dodge')
                .replace(/^(ducati)$/i, 'Ducati')
                .replace(/^(ferrari)$/i, 'Ferrari')
                .replace(/^(fiat.*|dethleffs|carthago|hymer)$/i, 'Fiat')
                .replace(/^(ford|ord)$/i, 'Ford')
                .replace(/^(gmc|general motors)$/i, 'General Motors')
                .replace(/^(honda)$/i, 'Honda')
                .replace(/^(hyundai|yundai|undai|ndai)$/i, 'Hyundai')
                .replace(/^(isuzu)$/i, 'Isuzu')
                .replace(/^(iveco|iveco daily|iveco magirus)$/i, 'Iveco')
                .replace(/^(jaguar)$/i, 'Jaguar')
                .replace(/^(jeep)$/i, 'Jeep')
                .replace(/^(kenworth)$/i, 'Kenworth')
                .replace(/^(kia)$/i, 'Kia')
                .replace(/^(lada|ada)$/i, 'Lada')
                .replace(/^(lamborghini)$/i, 'Lamborghini')
                .replace(/^(lancia)$/i, 'Lancia')
                .replace(/^(land rover|range|rover|over|ver)$/i, 'Land Rover')
                .replace(/^(lotus)$/i, 'Lotus')
                .replace(/^(maserati)$/i, 'Maserati')
                .replace(/^(mazda|azda|zda)$/i, 'Mazda')
                .replace(
                  /^(daimler|daimler benz|daimler\/chrysler|mercedes\-benz.*|ercedes\-benz|mercedes benz|mb\(udgået\)|benz|enz|binz)$/i,
                  'Mercedes-Benz'
                )
                .replace(
                  /^(mitsubishi|itsubishi|tsubishi|subishi|ubishi|bishi|ishi|shi|mitsubishi fuso)$/i,
                  'Mitsubishi'
                )
                .replace(/^(nissan|issan|ssan|san)$/i, 'Nissan')
                .replace(/^(oldsmobile)$/i, 'Oldsmobile')
                .replace(/^(opel|pel|vauxhall)$/i, 'Opel')
                .replace(/^(peugeot|eugeot|ugeot|geot|eot)$/i, 'Peugeot')
                .replace(/^(pontiac)$/i, 'Pontiac')
                .replace(/^(porsche)$/i, 'Porsche')
                .replace(/^(renault|enault|nault|ault|ult)$/i, 'Renault')
                .replace(/^(saab)$/i, 'Saab')
                .replace(/^(scania|cania|ania|nia)$/i, 'Scania')
                .replace(/^(seat|eat)$/i, 'SEAT')
                .replace(/^(skoda|koda|oda)$/i, 'Škoda')
                .replace(/^(mcc smart|smart)$/i, 'smart')
                .replace(/^(solaris)$/i, 'Solaris')
                .replace(/^(ssangyong)$/i, 'SsangYong')
                .replace(/^(suzuki|uzuki|zuki|uki)$/i, 'Suzuki')
                .replace(/^(tesla)$/i, 'Tesla')
                .replace(/^(toyota|oyota|yota|ota)$/i, 'Toyota')
                .replace(/^(triumph)$/i, 'Triumph')
                .replace(
                  /^(vw|volkswagen|olkswagen|lkswagen|kswagen|swagen|wagen|agen|gen)$/i,
                  'Volkswagen'
                )
                .replace(/^(volvo.*|olvo|lvo)$/i, 'Volvo')
              if (brand.length >= 3) {
                let hasEntries =
                  makeStream.bytesWritten || makeStream.writableLength
                makeStream.write(`${hasEntries ? ',' : '{'}"${vin}":"${brand}"`)
              }
            }
          }

          switch (vin.substr(0, 3)) {
            case 'TRU':
            case 'WAU':
            case 'WA1':
            case 'WUA':
            case '93U':
            case '93V':
            case '99A':
            case 'ZHW':
            case 'WP1':
            case 'WP0':
            case 'VP1':
            case 'EP0':
            case 'VP0':
            case 'MP1':
            case '0P0':
            case 'VSS':
            case 'TMB':
            case 'TMP':
            case 'TM9':
            case 'AAV':
            case 'LFV':
            case 'LSV':
            case 'MEX':
            case 'VWV':
            case 'WVG':
            case 'WVW':
            case 'WV1':
            case 'WV2':
            case 'WV3':
            case 'XW8':
            case 'YBW':
            case '1VW':
            case '2V4':
            case '2V8':
            case '3VW':
            case '8AW':
            case '9BW':
              break
            default:
              s.resume()
              return
          }

          // if (validateVIN(vin)) {
          //   let vinManu = vin.substr(0, 3)
          //   let vinModel = vin.substr(3, 6)
          //   let vinYear = vin.substr(9, 1)
          //   if (!models[vinManu]) {
          //     models[vinManu] = {}
          //   }
          //   if (!models[vinManu][vinModel]) {
          //     models[vinManu][vinModel] = {}
          //   }
          //   if (!models[vinManu][vinModel][vinYear]) {
          //     models[vinManu][vinModel][vinYear] = {}
          //   }
          //   if (!models[vinManu][vinModel][vinYear][data.model]) {
          //     models[vinManu][vinModel][vinYear][data.model] = 0
          //   }
          //   models[vinManu][vinModel][vinYear][data.model] += 1
          // }

          if (validateVIN(vin)) {
            // if (data.brand && makeStream.bytesWritten < 10 * 1024 * 1024) {
            //   let brand = data.brand
            //     .replace(/^(audi)$/i, 'Audi')
            //     .replace(/^(lamborghini)$/i, 'Lamborghini')
            //     .replace(/^(porsche)$/i, 'Porsche')
            //     .replace(/^(seat)$/i, 'SEAT')
            //     .replace(/^(skoda|koda)$/i, 'Škoda')
            //     .replace(
            //       /^(vw|volkswagen|olkswagen|lkswagen|kswagen|swagen|wagen|agen)$/i,
            //       'Volkswagen'
            //     )
            //   if (brand.length >= 4) {
            //     let hasEntries =
            //       makeStream.bytesWritten || makeStream.writableLength
            //     makeStream.write(`${hasEntries ? ',' : '{'}"${vin}":"${brand}"`)
            //   }
            // }

            // if (i === 0) {
            //   modelStream.write(`{"${vin}":"${data.model}"`)
            // } else {
            //   modelStream.write(`,"${vin}":"${data.model}"`)
            // }
            // i += 1

            if (data.modelYear) {
              let modelYear = data.modelYear.replace(/^21/, '20')
              if (modelYear >= 1980 && modelYear <= 2039) {
                let hasEntries =
                  yearStream.bytesWritten || yearStream.writableLength
                yearStream.write(
                  `${hasEntries ? ',' : '{'}"${vin}":${modelYear}`
                )
              }
            }
          }
        }

        s.resume()
      })
      .on('error', function(err) {
        throw err
      })
      .on('end', function() {
        vinStream.write(']\n')
        vinStream.end()
        makeStream.write('}\n')
        makeStream.end()
        // modelStream.write('}\n')
        // modelStream.end()
        yearStream.write('}\n')
        yearStream.end()
        console.log(`Done!`)
        // fs.writeFileSync('./models.json', JSON.stringify(models), 'utf8')
      })
  )
