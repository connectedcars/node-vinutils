import { Make } from '../constants/make'
import { Model } from '../constants/model'
import type { Vehicle } from '../types/vehicle-type'
import { getMake } from './get-make'

function getModelFromMakeDescription(make: Make, description: string): string | null {
  switch (make) {
    case Make.AUDI: {
      if (description.match(/(audi (a|s)1|((^| )(a|s)1( |$)))/i)) {
        return Model[make].A1
      }
      if (description.match(/(audi (a|s)2|((^| )(a|s)2( |$)))/i)) {
        return Model[make].A2
      }
      if (description.match(/(audi (a|s|(rs ?))3|((^| )(a|s|(rs ?))3( |$)))/i)) {
        return Model[make].A3
      }
      if (description.match(/(audi (a|s|(rs ?))4|((^| )(a|s|(rs ?))4( |$)))/i)) {
        return Model[make].A4
      }
      if (description.match(/(audi (a|s|(rs ?))5|((^| )(a|s|(rs ?))5( |$)))/i)) {
        return Model[make].A5
      }
      if (description.match(/(audi (a|s|(rs ?))6|((^| )(a|s|(rs ?))6( |$)))/i)) {
        return Model[make].A6
      }
      if (description.match(/(audi (a|s|(rs ?))7|((^| )(a|s|(rs ?))7( |$)))/i)) {
        return Model[make].A7
      }
      if (description.match(/(audi (a|s)8|((^| )(a|s)8( |$)))/i)) {
        return Model[make].A8
      }
      if (description.match(/(audi s?q2|((^| )s?q2( |$)))/i)) {
        return Model[make].Q2
      }
      if (description.match(/(audi ((rs ?)|s)?q3|((^| )((rs ?)|s)?q3( |$)))/i)) {
        return Model[make].Q3
      }
      if (description.match(/(audi ((rs ?)|s)?q4|((^| )((rs ?)|s)?q4( |$)))/i)) {
        return Model[make].Q4
      }
      if (description.match(/(audi ((rs ?)|s)?q5|((^| )((rs ?)|s)?q5( |$)))/i)) {
        return Model[make].Q5
      }
      if (description.match(/(audi ((rs ?)|s)?q7|((^| )((rs ?)|s)?q7( |$)))/i)) {
        return Model[make].Q7
      }
      if (description.match(/(audi ((rs ?)|s)?q8|((^| )((rs ?)|s)?q8( |$)))/i)) {
        return Model[make].Q8
      }
      if (description.match(/(audi r8|((^| )r8( |$)))/i)) {
        return Model[make].R8
      }
      if (description.match(/(audi tt|((^| )tt( |$)))/i)) {
        return Model[make].TT
      }
      if (description.match(/(audi e-tron gt|((^| )e-tron gt( |$)))/i)) {
        return Model[make].ETRON_GT
      }
      if (description.match(/(audi e-tron|((^| )e-tron( |$)))/i)) {
        return Model[make].ETRON
      }
      break
    }
    case Make.CITROEN: {
      if (description.match(/berlingo/i)) {
        return Model[make].BERLINGO
      }
      if (description.match(/c3/i)) {
        return Model[make].C3
      }
      if (description.match(/jumper/i)) {
        return Model[make].JUMPER
      }
      if (description.match(/jumpy/i)) {
        return Model[make].JUMPY
      }
      break
    }
    case Make.DACIA: {
      if (description.match(/dokker/i)) {
        return Model[make].DOKKER
      }
      if (description.match(/duster/i)) {
        return Model[make].DUSTER
      }
      if (description.match(/sandero/i)) {
        return Model[make].SANDERO
      }
      if (description.match(/spring/i)) {
        return Model[make].SPRING
      }
      break
    }
    case Make.FIAT: {
      if (description.match(/doblo/i)) {
        return Model[make].DOBLO
      }
      if (description.match(/ducato/i)) {
        return Model[make].DUCATO
      }
      break
    }
    case Make.FORD: {
      if (description.match(/c-max/i)) {
        return Model[make].C_MAX
      }
      if (description.match(/mondeo/i)) {
        return Model[make].MONDEO
      }
      if (description.match(/transit/i)) {
        return Model[make].TRANSIT
      }
      if (description.match(/focus/i)) {
        return Model[make].FOCUS
      }
      if (description.match(/s-max/i)) {
        return Model[make].S_MAX
      }
      if (description.match(/fiesta/i)) {
        return Model[make].FIESTA
      }
      if (description.match(/mustang mach-e/i)) {
        return Model[make].MUSTANG_MACH_E
      }
      break
    }
    case Make.IVECO: {
      if (description.match(/daily/i)) {
        return Model[make].DAILY
      }
      break
    }
    case Make.KIA: {
      if (description.match(/ceed/i)) {
        return Model[make].CEED
      }
      break
    }
    case Make.MAXUS: {
      if (description.match(/euniq5/i)) {
        return Model[make].EUNIQ5
      }
      break
    }
    case Make.MAZDA: {
      if (description.match(/(cx5|cx-5)/i)) {
        return Model[make].CX5
      }
      break
    }
    case Make.MERCEDES_BENZ: {
      if (description.match(/sprinter/i)) {
        return Model[make].SPRINTER
      }
      if (description.match(/vito/i)) {
        return Model[make].VITO
      }
      if (description.match(/eqb/i)) {
        return Model[make].EQB
      }
      if (description.match(/citan/i)) {
        return Model[make].CITAN
      }
      if (description.match(/eqv/i)) {
        return Model[make].EQV
      }
      break
    }
    case Make.NISSAN: {
      if (description.match(/nv400/i)) {
        return Model[make].NV400
      }
      if (description.match(/leaf/i)) {
        return Model[make].LEAF
      }
      if (description.match(/navara/i)) {
        return Model[make].NAVARA
      }

      break
    }
    case Make.OPEL: {
      if (description.match(/astra/i)) {
        return Model[make].ASTRA
      }
      if (description.match(/vivaro/i)) {
        return Model[make].VIVARO
      }
      if (description.match(/zafira/i)) {
        return Model[make].ZAFIRA
      }
      if (description.match(/combo/i)) {
        return Model[make].COMBO
      }
      break
    }
    case Make.PEUGEOT: {
      if (description.match(/expert/i)) {
        return Model[make].EXPERT
      }
      if (description.match(/partner/i)) {
        return Model[make].PARTNER
      }
      break
    }
    case Make.POLESTAR: {
      if (description.match(/ 1$/i) || description.match(/polestar 1/i)) {
        return Model[make][1]
      }
      if (description.match(/ 2$/i) || description.match(/polestar 2/i)) {
        return Model[make][2]
      }
      if (description.match(/ 3$/i) || description.match(/polestar 3/i)) {
        return Model[make][3]
      }
      break
    }
    case Make.PORSCHE: {
      if (description.match(/boxter/i)) {
        return Model[make].BOXSTER
      }
      if (description.match(/macan/i)) {
        return Model[make].MACAN
      }
      if (description.match(/taycan/i)) {
        return Model[make].TAYCAN
      }
      if (description.match(/panamera/i)) {
        return Model[make].PANAMERA
      }

      break
    }
    case Make.RENAULT: {
      if (description.match(/kangoo/i)) {
        return Model[make].KANGOO
      }
      if (description.match(/master/i)) {
        return Model[make].MASTER
      }
      if (description.match(/trafic/i)) {
        return Model[make].TRAFIC
      }
      if (description.match(/zoe/i)) {
        return Model[make].ZOE
      }
      break
    }
    case Make.SEAT: {
      if (description.match(/alhambra/i)) {
        return Model[make].ALHAMBRA
      }
      if (description.match(/altea/i)) {
        return Model[make].ALTEA
      }
      if (description.match(/arona/i)) {
        return Model[make].ARONA
      }
      if (description.match(/ateca/i)) {
        return Model[make].ATECA
      }
      if (description.match(/cordoba/i)) {
        return Model[make].CORDOBA
      }
      if (description.match(/formentor/i)) {
        return Model[make].FORMENTOR
      }
      if (description.match(/ibiza/i)) {
        return Model[make].IBIZA
      }
      if (description.match(/leon/i)) {
        return Model[make].LEON
      }
      if (description.match(/mii/i)) {
        return Model[make].MII
      }
      if (description.match(/tarraco/i)) {
        return Model[make].TARRACO
      }
      if (description.match(/toledo/i)) {
        return Model[make].TOLEDO
      }
      if (description.match(/born/i)) {
        return Model[make].BORN
      }
      break
    }
    case Make.SKODA: {
      if (description.match(/citigo/i)) {
        return Model[make].CITIGO
      }
      if (description.match(/enyaq/i)) {
        return Model[make].ENYAQ
      }
      if (description.match(/fabia/i)) {
        return Model[make].FABIA
      }
      if (description.match(/kamiq/i)) {
        return Model[make].KAMIQ
      }
      if (description.match(/karoq/i)) {
        return Model[make].KAROQ
      }
      if (description.match(/kodiaq/i)) {
        return Model[make].KODIAQ
      }
      if (description.match(/octavia/i)) {
        return Model[make].OCTAVIA
      }
      if (description.match(/rapid/i)) {
        return Model[make].RAPID
      }
      if (description.match(/roomster/i)) {
        return Model[make].ROOMSTER
      }
      if (description.match(/scala/i)) {
        return Model[make].SCALA
      }
      if (description.match(/superb/i)) {
        return Model[make].SUPERB
      }
      if (description.match(/yeti/i)) {
        return Model[make].YETI
      }
      break
    }
    case Make.TESLA: {
      if (description.match(/model 3/i)) {
        return Model[make].MODEL_3
      }
      break
    }
    case Make.TOYOTA: {
      if (description.match(/hiace/i)) {
        return Model[make].HIACE
      }
      if (description.match(/auris/i)) {
        return Model[make].AURIS
      }
      if (description.match(/hilux/i)) {
        return Model[make].HILUX
      }
      if (description.match(/proace electric/i)) {
        return Model[make].PROACE_ELECTRIC
      }
      if (description.match(/dyna/i)) {
        return Model[make].DYNA
      }
      if (description.match(/corolla/i)) {
        return Model[make].COROLLA
      }
      if (description.match(/yaris/i)) {
        return Model[make].YARIS
      }
      if (description.match(/proace/i)) {
        return Model[make].PROACE
      }
      if (description.match(/sportsvan/i)) {
        return Model[make].SPORTSVAN
      }

      break
    }
    case Make.VOLKSWAGEN: {
      if (description.match(/amarok/i)) {
        return Model[make].AMAROK
      }
      if (description.match(/arteon/i)) {
        return Model[make].ARTEON
      }
      if (description.match(/beetle/i)) {
        return Model[make].BEETLE
      }
      if (description.match(/bora/i)) {
        return Model[make].BORA
      }
      if (description.match(/caddy/i)) {
        return Model[make].CADDY
      }
      if (description.match(/grand california/i)) {
        return Model[make].GRAND_CALIFORNIA
      }
      if (description.match(/california/i)) {
        return Model[make].CALIFORNIA
      }
      if (description.match(/caravelle/i)) {
        return Model[make].CARAVELLE
      }
      if (description.match(/( |^)cc( |$)/i)) {
        return Model[make].CC
      }
      if (description.match(/crafter/i)) {
        return Model[make].CRAFTER
      }
      if (description.match(/eos/i)) {
        return Model[make].EOS
      }
      if (description.match(/cross fox/i)) {
        return Model[make].CROSS_FOX
      }
      if (description.match(/fox/i)) {
        return Model[make].FOX
      }
      if (description.match(/golf/i)) {
        return Model[make].GOLF
      }
      if (description.match(/id. ?3/i)) {
        return Model[make]['ID.3']
      }
      if (description.match(/id. ?4/i)) {
        return Model[make]['ID.4']
      }
      if (description.match(/id. ?5/i)) {
        return Model[make]['ID.5']
      }
      if (description.match(/id. ?buzz/i)) {
        return Model[make]['ID.Buzz']
      }
      if (description.match(/jetta/i)) {
        return Model[make].JETTA
      }
      if (description.match(/lupo/i)) {
        return Model[make].LUPO
      }
      if (description.match(/multivan/i)) {
        return Model[make].MULTIVAN
      }
      if (description.match(/passat/i)) {
        return Model[make].PASSAT
      }
      if (description.match(/phaeton/i)) {
        return Model[make].PHAETON
      }
      if (description.match(/polo/i)) {
        return Model[make].POLO
      }
      if (description.match(/scirocco/i)) {
        return Model[make].SCIROCCO
      }
      if (description.match(/sharan/i)) {
        return Model[make].SHARAN
      }
      if (description.match(/taos/i)) {
        return Model[make].TAOS
      }
      if (description.match(/(tcross|t-cross|t cross)/i)) {
        return Model[make].TCROSS
      }
      if (description.match(/teramont/i)) {
        return Model[make].TERAMONT
      }
      if (description.match(/(troc|t-roc|t roc)/i)) {
        return Model[make].TROC
      }
      if (description.match(/tiguan/i)) {
        return Model[make].TIGUAN
      }
      if (description.match(/touareg/i)) {
        return Model[make].TOUAREG
      }
      if (description.match(/touran/i)) {
        return Model[make].TOURAN
      }
      if (description.match(/(kassevogn|transporter|vw t5|(^t5)|vw t6|(^t6)|(^TRP))/i)) {
        return Model[make].TRANSPORTER
      }
      if (description.match(/(up!|up(\W| |$))/i)) {
        return Model[make].UP
      }
      if (description.match(/taigo/i)) {
        return Model[make].TAIGO
      }
      if (description.match(/gol-saveiro/i)) {
        return Model[make].GOL_SAVEIRO
      }
      if (description.match(/cross sport/i)) {
        return Model[make].CROSS_SPORT
      }
      if (description.match(/gol/i)) {
        return Model[make].GOL
      }
      if (description.match(/nivus/i)) {
        return Model[make].NIVUS
      }
      if (description.match(/saveiro/i)) {
        return Model[make].SAVEIRO
      }
      if (description.match(/taigun/i)) {
        return Model[make].TAIGUN
      }
      if (description.match(/vento/i)) {
        return Model[make].VENTO
      }
      if (description.match(/virtus/i)) {
        return Model[make].VIRTUS
      }
      break
    }
    case Make.MAN: {
      if (description.match(/tge/i)) {
        return Model[make].TGE
      }
      break
    }
  }

  return null
}

/**
 * This method retrieves the model for a vehicle from the VIN or description
 * (name).
 *
 * @param vehicle Vehicle to get model from
 */
export function getModel(vehicle: Vehicle): string | null {
  let model: string | null = null

  if (vehicle.name) {
    const make = getMake(vehicle)

    if (make) {
      model = getModelFromMakeDescription(make, vehicle.name)
    }
  }

  return model
}
