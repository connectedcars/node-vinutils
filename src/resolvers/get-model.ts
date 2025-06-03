import { Make } from '../constants/make'
import { Model } from '../constants/model'
import type { Vehicle } from '../types/vehicle-type'
import { validateVin } from '../validators/validate-vin'
import { getMake } from './get-make'
import { getModelFromVin } from './get-model-from-vin'

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
        return Model[make].Q4_ETRON
      }
      if (description.match(/(audi ((rs ?)|s)?q5|((^| )((rs ?)|s)?q5( |$)))/i)) {
        return Model[make].Q5
      }
      if (description.match(/(audi ((rs ?)|s)?q6|((^| )((rs ?)|s)?q6( |$)))/i)) {
        return Model[make].Q6_ETRON
      }
      if (description.match(/(audi ((rs ?)|s)?q7|((^| )((rs ?)|s)?q7( |$)))/i)) {
        return Model[make].Q7
      }
      if (description.match(/(audi ((rs ?)|s)?q8|((^| )((rs ?)|s)?q8( |$)))/i)) {
        if (description.match(/((^| )e-tron( |$))/i)) {
          return Model[make].Q8_ETRON
        }
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
    case Make.BMW: {
      if (description.match(/(i3)/i)) {
        return Model[make].I3
      }
      if (description.match(/(i4)/i)) {
        return Model[make].I4
      }
      if (description.match(/(i5)/i)) {
        return Model[make].I5
      }
      if (description.match(/(i7)/i)) {
        return Model[make].I7
      }
      if (description.match(/(ix1)/i)) {
        return Model[make].IX1
      }
      if (description.match(/(ix2)/i)) {
        return Model[make].IX2
      }
      if (description.match(/(ix3)/i)) {
        return Model[make].IX3
      }
      if (description.match(/(ix)/i)) {
        return Model[make].IX
      }
      if (description.match(/(x1)/i)) {
        return Model[make].X1
      }
      if (description.match(/(x2)/i)) {
        return Model[make].X2
      }
      if (description.match(/(x3)/i)) {
        return Model[make].X3
      }
      if (description.match(/(x4)/i)) {
        return Model[make].X4
      }
      if (description.match(/(x5)/i)) {
        return Model[make].X5
      }
      if (description.match(/(x6)/i)) {
        return Model[make].X6
      }
      if (description.match(/(3[0-9]{2})/i)) {
        return Model[make]['3']
      }
      if (description.match(/(1[0-9]{2})/i)) {
        return Model[make]['1']
      }
      break
    }
    case Make.BYD: {
      if (description.match(/atto 3/i)) {
        return Model[make].ATTO_3
      }
      if (description.match(/dolphin/i)) {
        return Model[make].DOLPHIN
      }
      if (description.match(/han/i)) {
        return Model[make].HAN
      }
      if (description.match(/seal/i)) {
        if (description.match(/seal u( |$)/i)) {
          return Model[make].SEAL_U
        }
        return Model[make].SEAL
      }
      if (description.match(/tang/i)) {
        return Model[make].TANG
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
      if (description.match(/c-elys(é|e)e/i)) {
        return Model[make].C_ELYSEE
      }
      break
    }
    case Make.CUPRA: {
      if (description.match(/ateca/i)) {
        return Model[make].ATECA
      }
      if (description.match(/formentor/i)) {
        return Model[make].FORMENTOR
      }
      if (description.match(/leon/i)) {
        return Model[make].LEON
      }
      if (description.match(/born/i)) {
        return Model[make].BORN
      }
      if (description.match(/tavascan/i)) {
        return Model[make].TAVASCAN
      }
      if (description.match(/terramar/i)) {
        return Model[make].TERRAMAR
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
      if (description.match(/jogger/i)) {
        return Model[make].JOGGER
      }
      if (description.match(/lodgy/i)) {
        return Model[make].LODGY
      }
      if (description.match(/logan/i)) {
        return Model[make].LOGAN
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
      if (description.match(/egea/i)) {
        return Model[make].EGEA
      }
      break
    }
    case Make.FORD: {
      if (description.match(/c-max/i)) {
        return Model[make].C_MAX
      }
      if (description.match(/capri/i)) {
        return Model[make].CAPRI
      }
      if (description.match(/explorer/i)) {
        return Model[make].EXPLORER
      }
      if (description.match(/fiesta/i)) {
        return Model[make].FIESTA
      }
      if (description.match(/focus/i)) {
        return Model[make].FOCUS
      }
      if (description.match(/kuga/i)) {
        return Model[make].KUGA
      }
      if (description.match(/mondeo/i)) {
        return Model[make].MONDEO
      }
      if (description.match(/mustang mach-e/i)) {
        return Model[make].MUSTANG_MACH_E
      }
      if (description.match(/s-max/i)) {
        return Model[make].S_MAX
      }
      if (description.match(/transit/i)) {
        return Model[make].TRANSIT
      }
      break
    }
    case Make.HONDA: {
      if (description.match(/e:ny1|e ny1|e-ny1/i)) {
        return Model[make].E_NY1
      }
      if (description.match(/hr-v/i)) {
        return Model[make].HR_V
      }
      break
    }
    case Make.HYUNDAI: {
      if (description.match(/ioniq 5/i)) {
        return Model[make].IONIQ5
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
      if (description.match(/ev6/i)) {
        return Model[make].EV6
      }
      if (description.match(/ev9/i)) {
        return Model[make].EV9
      }
      if (description.match(/niro/i)) {
        return Model[make].NIRO
      }
      break
    }
    case Make.LAMBORGHINI: {
      if (description.match(/revuelto/i)) {
        return Model[make].REVUELTO
      }
      break
    }
    case Make.LDV: {
      if (description.match(/deliver ?7/i)) {
        return Model[make].DELIVER_7
      }
      if (description.match(/deliver ?9/i)) {
        return Model[make].DELIVER_9
      }
      if (description.match(/d90/i)) {
        return Model[make].D90
      }
      if (description.match(/g10/i)) {
        return Model[make].G10
      }
      if (description.match(/mifa people mover/i)) {
        return Model[make].MIFA_PEOPLE_MOVER
      }
      if (description.match(/mifa ?9/i)) {
        return Model[make].MIFA_9
      }
      if (description.match(/t60/i)) {
        return Model[make].T60
      }
      if (description.match(/v80/i)) {
        return Model[make].V80
      }
      break
    }
    case Make.LEXUS: {
      if (description.match(/ rz/i)) {
        return Model[make].RZ
      }
      if (description.match(/ ux/i)) {
        return Model[make].UX
      }
      if (description.match(/ es/i)) {
        return Model[make].ES
      }
      if (description.match(/ nx/i)) {
        return Model[make].NX
      }
      if (description.match(/ lbx/i)) {
        return Model[make].LBX
      }
      if (description.match(/ ls/i)) {
        return Model[make].LS
      }
      if (description.match(/ lc cv/i)) {
        return Model[make].LC_CV
      }
      if (description.match(/ lc/i)) {
        return Model[make].LC
      }
      break
    }
    case Make.LIGIER: {
      if (description.match(/js48/i)) {
        return Model[make].JS48
      }
      break
    }
    case Make.MAN: {
      if (description.match(/ tge/i)) {
        return Model[make].TGE
      }
      break
    }
    case Make.MAXUS: {
      if (description.match(/deliver ?3/i)) {
        return Model[make].DELIVER_3
      }
      if (description.match(/deliver ?7/i)) {
        return Model[make].DELIVER_7
      }
      if (description.match(/deliver ?9/i)) {
        return Model[make].DELIVER_9
      }
      if (description.match(/euniq ?5/i)) {
        return Model[make].EUNIQ5
      }
      if (description.match(/euniq ?6/i)) {
        return Model[make].EUNIQ6
      }
      if (description.match(/mifa ?9/i)) {
        return Model[make].MIFA_9
      }
      if (description.match(/t90/i)) {
        return Model[make].T90
      }
      break
    }
    case Make.MAZDA: {
      if (description.match(/(cx5|cx-5)/i)) {
        return Model[make].CX5
      }
      if (description.match(/(mx30|mx-30)/i)) {
        return Model[make].MX30
      }
      if (description.match(/ 2$/i) || description.match(/2/i)) {
        return Model[make][2]
      }
      if (description.match(/ 3$/i) || description.match(/3/i)) {
        return Model[make][3]
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
      if (description.match(/eqc/i)) {
        return Model[make].EQC
      }
      if (description.match(/glb/i)) {
        return Model[make].GLB
      }
      if (description.match(/gle/i)) {
        return Model[make].GLE
      }
      if (description.match(/\ba\b/i)) {
        return Model[make].A
      }
      if (description.match(/\bc\b/i)) {
        return Model[make].C
      }
      if (description.match(/\be\b/i)) {
        return Model[make].E
      }
      break
    }
    case Make.MINI: {
      if (description.match(/cooper/i)) {
        return Model[make].COOPER
      }
      break
    }
    case Make.NISSAN: {
      if (description.match(/ariya/i)) {
        return Model[make].ARIYA
      }
      if (description.match(/e-nv200/i)) {
        return Model[make].ENV200
      }
      if (description.match(/interstar/i)) {
        return Model[make].INTERSTAR
      }
      if (description.match(/juke/i)) {
        return Model[make].JUKE
      }
      if (description.match(/leaf/i)) {
        return Model[make].LEAF
      }
      if (description.match(/navara/i)) {
        return Model[make].NAVARA
      }
      if (description.match(/note/i)) {
        return Model[make].NOTE
      }
      if (description.match(/nv400/i)) {
        return Model[make].NV400
      }
      if (description.match(/primastar/i)) {
        return Model[make].PRIMASTAR
      }
      if (description.match(/qashqai/i)) {
        return Model[make].QASHQAI
      }
      if (description.match(/sylphy/i)) {
        return Model[make].SYLPHY
      }
      if (description.match(/townstar/i)) {
        return Model[make].TOWNSTAR
      }
      if (description.match(/x-trail/i)) {
        return Model[make].X_TRAIL
      }
      if (description.match(/nv-200/i)) {
        return Model[make].NV_200
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
      if (description.match(/corsa/i)) {
        return Model[make].CORSA
      }
      if (description.match(/mokka-e/i)) {
        return Model[make].MOKKA_E
      }
      if (description.match(/mokka/i)) {
        return Model[make].MOKKA
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
      if (description.match(/e-2008/i)) {
        return Model[make].E_2008
      }
      if (description.match(/2008/i)) {
        return Model[make][2008]
      }
      if (description.match(/3008/i)) {
        return Model[make][3008]
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
      if (description.match(/boxster/i)) {
        return Model[make].BOXSTER
      }
      if (description.match(/cayenne/i)) {
        return Model[make].CAYENNE
      }
      if (description.match(/cayman/i)) {
        return Model[make].CAYMAN
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
      if (description.match(/911/i)) {
        return Model[make][911]
      }
      break
    }
    case Make.RENAULT: {
      if (description.match(/arkana/i)) {
        return Model[make].ARKANA
      }
      if (description.match(/austral/i)) {
        return Model[make].AUSTRAL
      }
      if (description.match(/captur/i)) {
        return Model[make].CAPTUR
      }
      if (description.match(/clio/i)) {
        return Model[make].CLIO
      }
      if (description.match(/espace/i)) {
        return Model[make].ESPACE
      }
      if (description.match(/kangoo/i)) {
        return Model[make].KANGOO
      }
      if (description.match(/master/i)) {
        return Model[make].MASTER
      }
      if (description.match(/megane/i)) {
        return Model[make].MEGANE
      }
      if (description.match(/rafale/i)) {
        return Model[make].RAFALE
      }
      if (description.match(/scenic/i)) {
        return Model[make].SCENIC
      }
      if (description.match(/taliant/i)) {
        return Model[make].TALIANT
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
      if (description.match(/elroq/i)) {
        return Model[make].ELROQ
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
    case Make.SUZUKI: {
      if (description.match(/alto/i)) {
        return Model[make].ALTO
      }
      break
    }
    case Make.TESLA: {
      if (description.match(/model 3/i) || description.match(/( |^)3( |$)/i)) {
        return Model[make].MODEL_3
      }
      if (description.match(/model s/i) || description.match(/( |^)s( |$)/i)) {
        return Model[make].MODEL_S
      }
      if (description.match(/model x/i) || description.match(/( |^)x( |$)/i)) {
        return Model[make].MODEL_X
      }
      if (description.match(/model y/i) || description.match(/( |^)y( |$)/i)) {
        return Model[make].MODEL_Y
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
      if (description.match(/proace city electric/i)) {
        return Model[make].PROACE_CITY_ELECTRIC
      }
      if (description.match(/proace city/i)) {
        return Model[make].PROACE_CITY
      }
      if (description.match(/proace/i)) {
        return Model[make].PROACE
      }
      if (description.match(/sportsvan/i)) {
        return Model[make].SPORTSVAN
      }
      if (description.match(/aygo x/i)) {
        return Model[make].AYGO_X
      }
      if (description.match(/bz4x/i)) {
        return Model[make].BZ4X
      }
      if (description.match(/c-hr/i)) {
        return Model[make].C_HR
      }
      if (description.match(/land cruiser/i)) {
        return Model[make].LAND_CRUISER
      }
      if (description.match(/rav4/i)) {
        return Model[make].RAV4
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
      if (description.match(/gol-saveiro/i)) {
        return Model[make].GOL_SAVEIRO
      }
      if (description.match(/gol/i)) {
        return Model[make].GOL
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
      if (description.match(/id. ?7/i)) {
        return Model[make]['ID.7']
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
      if (description.match(/nivus/i)) {
        return Model[make].NIVUS
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
      if (description.match(/saveiro/i)) {
        return Model[make].SAVEIRO
      }
      if (description.match(/scirocco/i)) {
        return Model[make].SCIROCCO
      }
      if (description.match(/sharan/i)) {
        return Model[make].SHARAN
      }
      if (description.match(/taigo/i)) {
        return Model[make].TAIGO
      }
      if (description.match(/taigun/i)) {
        return Model[make].TAIGUN
      }
      if (description.match(/tayron/i)) {
        return Model[make].TAYRON
      }
      if (description.match(/taos/i)) {
        return Model[make].TAOS
      }
      if (description.match(/(tcross|t-cross|t cross)/i)) {
        return Model[make].TCROSS
      }
      if (description.match(/cross sport/i)) {
        return Model[make].CROSS_SPORT
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
      if (description.match(/\b(up!|up)\b/i)) {
        return Model[make].UP
      }
      if (description.match(/vento/i)) {
        return Model[make].VENTO
      }
      if (description.match(/virtus/i)) {
        return Model[make].VIRTUS
      }
      break
    }
    case Make.VOLKSWAGEN_COMMERCIAL_VEHICLES: {
      if (description.match(/(amarok|amk)/i)) {
        return Model[make].AMAROK
      }
      if (description.match(/caddy/i)) {
        return Model[make].CADDY
      }
      if (description.match(/crafter/i)) {
        return Model[make].CRAFTER
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
      if (description.match(/multivan/i)) {
        return Model[make].MULTIVAN
      }
      if (description.match(/(kassevogn|transporter|vw t5|(^t5)|vw t6|(^t6)|(^TRP))/i)) {
        return Model[make].TRANSPORTER
      }
      if (description.match(/id. ?buzz/i)) {
        return Model[make]['ID.Buzz']
      }
      break
    }
    case Make.VOLVO: {
      if (description.match(/ s60/i)) {
        return Model[make].S60
      }
      if (description.match(/ v60/i)) {
        return Model[make].V60
      }
      if (description.match(/ s90/i)) {
        return Model[make].S90
      }
      if (description.match(/ v90/i)) {
        return Model[make].V90
      }
      if (description.match(/ xc40/i)) {
        return Model[make].XC40
      }
      if (description.match(/ xc60/i)) {
        return Model[make].XC60
      }
      if (description.match(/ xc90/i)) {
        return Model[make].XC90
      }
      break
    }
    case Make.XPENG: {
      if (description.match(/ g9/i)) {
        return Model[make].G9
      }
      if (description.match(/ p7/i)) {
        return Model[make].P7
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
      if (!model && vehicle.vin && validateVin(vehicle.vin)) {
        // This needs to be prioritized lower than the description due to overlap between Transporter and other models (for example California and Caravelle might be caught by this)
        model = getModelFromVin(make, vehicle.vin)
      }
    }
  }

  return model
}
