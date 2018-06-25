const fs = require('fs')
const es = require('event-stream')
const validateVIN = require('../src/validators/validate-vin')

var vinStream = fs.createWriteStream('./fixtures/vin.json')
var makeStream = fs.createWriteStream('./fixtures/vin-to-make.json')
// var modelStream = fs.createWriteStream('./fixtures/vin-to-model.json')
var yearStream = fs.createWriteStream('./fixtures/vin-to-year.json')

// let models = {}

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
            if (data.brand && makeStream.bytesWritten < 10 * 1024 * 1024) {
              let brand = data.brand
                .replace(/^(audi)$/i, 'Audi')
                .replace(/^(lamborghini)$/i, 'Lamborghini')
                .replace(/^(porsche)$/i, 'Porsche')
                .replace(/^(seat)$/i, 'SEAT')
                .replace(/^(skoda|koda)$/i, 'Škoda')
                .replace(
                  /^(vw|volkswagen|olkswagen|lkswagen|kswagen|swagen|wagen|agen)$/i,
                  'Volkswagen'
                )
              if (brand.length >= 4) {
                let hasEntries =
                  makeStream.bytesWritten || makeStream.writableLength
                makeStream.write(`${hasEntries ? ',' : '{'}"${vin}":"${brand}"`)
              }
            }

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
