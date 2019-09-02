const Make = require('../constants/make')
const Model = require('../constants/model')

const getModelFromDescription = description => {
  if (description.match(/(audi a1|(^a1( |$))|audi s1|(^s1( |$)))/i)) {
    return Model[Make.AUDI].A1
  }
  if (description.match(/(audi a3|(^a3( |$))|audi s3|(^s3( |$))|audi rs3|(^rs3( |$)))/i)) {
    return Model[Make.AUDI].A3
  }
  if (description.match(/(audi a4|(^a4( |$))|audi s4|(^s4( |$))|audi rs4|(^rs4( |$)))/i)) {
    return Model[Make.AUDI].A4
  }
  if (description.match(/(audi a5|(^a5( |$))|audi s5|(^s5( |$))|audi rs5|(^rs5( |$)))/i)) {
    return Model[Make.AUDI].A5
  }
  if (description.match(/(audi a6|(^a6( |$))|audi s6|(^s6( |$))|audi rs6|(^rs6( |$)))/i)) {
    return Model[Make.AUDI].A6
  }
  if (description.match(/(audi a7|(^a7( |$))|audi s7|(^s7( |$))|audi rs7|(^rs7( |$)))/i)) {
    return Model[Make.AUDI].A7
  }
  if (description.match(/(audi a8|(^a8( |$))|audi s8|(^s8( |$)))/i)) {
    return Model[Make.AUDI].A8
  }
  if (description.match(/(audi q2|(^q2( |$))|audi sq2|(^sq2( |$)))/i)) {
    return Model[Make.AUDI].Q2
  }
  if (description.match(/(audi q3|(^q3( |$))|audi sq3|(^sq3( |$)))/i)) {
    return Model[Make.AUDI].Q3
  }
  if (description.match(/(audi q4|(^q4( |$))|audi sq4|(^sq4( |$)))/i)) {
    return Model[Make.AUDI].Q4
  }
  if (description.match(/(audi q5|(^q5( |$))|audi sq5|(^sq5( |$)))/i)) {
    return Model[Make.AUDI].Q5
  }
  if (description.match(/(audi q7|(^q7( |$))|audi sq7|(^sq7( |$)))/i)) {
    return Model[Make.AUDI].Q7
  }
  if (description.match(/(audi q8|(^q8( |$))|audi sq8|(^sq8( |$)))/i)) {
    return Model[Make.AUDI].Q8
  }
  if (description.match(/(audi r8|(^r8( |$)))/i)) {
    return Model[Make.AUDI].R8
  }
  if (description.match(/(audi tt|(^tt( |$)))/i)) {
    return Model[Make.AUDI].TT
  }
  if (description.match(/(audi e-tron|(^e-tron( |$)))/i)) {
    return Model[Make.AUDI].ETRON
  }
  if (description.match(/alhambra/i)) {
    return Model[Make.SEAT].ALHAMBRA
  }
  if (description.match(/altea/i)) {
    return Model[Make.SEAT].ALTEA
  }
  if (description.match(/arona/i)) {
    return Model[Make.SEAT].ARONA
  }
  if (description.match(/ateca/i)) {
    return Model[Make.SEAT].ATECA
  }
  if (description.match(/cordoba/i)) {
    return Model[Make.SEAT].CORDOBA
  }
  if (description.match(/ibiza/i)) {
    return Model[Make.SEAT].IBIZA
  }
  if (description.match(/leon/i)) {
    return Model[Make.SEAT].LEON
  }
  if (description.match(/mii/i)) {
    return Model[Make.SEAT].MII
  }
  if (description.match(/tarraco/i)) {
    return Model[Make.SEAT].TARRACO
  }
  if (description.match(/toledo/i)) {
    return Model[Make.SEAT].TOLEDO
  }
  if (description.match(/citigo/i)) {
    return Model[Make.SKODA].CITIGO
  }
  if (description.match(/fabia/i)) {
    return Model[Make.SKODA].FABIA
  }
  if (description.match(/kamiq/i)) {
    return Model[Make.SKODA].KAMIQ
  }
  if (description.match(/karoq/i)) {
    return Model[Make.SKODA].KAROQ
  }
  if (description.match(/kodiaq/i)) {
    return Model[Make.SKODA].KODIAQ
  }
  if (description.match(/octavia/i)) {
    return Model[Make.SKODA].OCTAVIA
  }
  if (description.match(/rapid/i)) {
    return Model[Make.SKODA].RAPID
  }
  if (description.match(/roomster/i)) {
    return Model[Make.SKODA].ROOMSTER
  }
  if (description.match(/scala/i)) {
    return Model[Make.SKODA].SCALA
  }
  if (description.match(/superb/i)) {
    return Model[Make.SKODA].SUPERB
  }
  if (description.match(/yeti/i)) {
    return Model[Make.SKODA].YETI
  }
  if (description.match(/amarok/i)) {
    return Model[Make.VOLKSWAGEN].AMAROK
  }
  if (description.match(/arteon/i)) {
    return Model[Make.VOLKSWAGEN].ARTEON
  }
  if (description.match(/beetle/i)) {
    return Model[Make.VOLKSWAGEN].BEETLE
  }
  if (description.match(/caddy/i)) {
    return Model[Make.VOLKSWAGEN].CADDY
  }
  if (description.match(/grand california/i)) {
    return Model[Make.VOLKSWAGEN].GRAND_CALIFORNIA
  }
  if (description.match(/california/i)) {
    return Model[Make.VOLKSWAGEN].CALIFORNIA
  }
  if (description.match(/caravelle/i)) {
    return Model[Make.VOLKSWAGEN].CARAVELLE
  }
  if (description.match(/( |^)cc( |$)/i)) {
    return Model[Make.VOLKSWAGEN].CC
  }
  if (description.match(/crafter/i)) {
    return Model[Make.VOLKSWAGEN].CRAFTER
  }
  if (description.match(/eos/i)) {
    return Model[Make.VOLKSWAGEN].EOS
  }
  if (description.match(/fox/i)) {
    return Model[Make.VOLKSWAGEN].FOX
  }
  if (description.match(/golf/i)) {
    return Model[Make.VOLKSWAGEN].GOLF
  }
  if (description.match(/jetta/i)) {
    return Model[Make.VOLKSWAGEN].JETTA
  }
  if (description.match(/lupo/i)) {
    return Model[Make.VOLKSWAGEN].LUPO
  }
  if (description.match(/multivan/i)) {
    return Model[Make.VOLKSWAGEN].MULTIVAN
  }
  if (description.match(/passat/i)) {
    return Model[Make.VOLKSWAGEN].PASSAT
  }
  if (description.match(/polo/i)) {
    return Model[Make.VOLKSWAGEN].POLO
  }
  if (description.match(/scirocco/i)) {
    return Model[Make.VOLKSWAGEN].SCIROCCO
  }
  if (description.match(/sharan/i)) {
    return Model[Make.VOLKSWAGEN].SHARAN
  }
  if (description.match(/(tcross|t-cross|t cross)/i)) {
    return Model[Make.VOLKSWAGEN].TCROSS
  }
  if (description.match(/(troc|t-roc|t roc)/i)) {
    return Model[Make.VOLKSWAGEN].TROC
  }
  if (description.match(/tiguan/i)) {
    return Model[Make.VOLKSWAGEN].TIGUAN
  }
  if (description.match(/touareg/i)) {
    return Model[Make.VOLKSWAGEN].TOUAREG
  }
  if (description.match(/touran/i)) {
    return Model[Make.VOLKSWAGEN].TOURAN
  }
  if (description.match(/(kassevogn|transporter|vw t5|vw t6)/i)) {
    return Model[Make.VOLKSWAGEN].TRANSPORTER
  }
  if (description.match(/(up!|up( |$))/i)) {
    return Model[Make.VOLKSWAGEN].UP
  }
  return null
}

/**
 * This method retrieves the model for a vehicle from the VIN or description
 * (name).
 *
 * @param {Object} vehicle
 * @param {string} vehicle.vin
 * @param {string} [vehicle.name]
 * @returns {string|null}
 */
module.exports = vehicle => {
  let model = null
  if (vehicle.name) {
    model = getModelFromDescription(vehicle.name)
  }
  return model
}
