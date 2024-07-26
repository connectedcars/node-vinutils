import { Make } from '../constants/make'
import type { Vehicle } from '../types/vehicle-type'
import { validateVin } from '../validators/validate-vin'

function getMakeFromVin(vin: string, modelCode?: string | null): Make | null {
  // https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/World_Manufacturer_Identifier_(WMI)
  switch (vin.substring(0, 3).toUpperCase()) {
    case 'LVX': {
      return Make.AIWAYS
    }
    case 'ZAR': {
      return Make.ALFA_ROMEO
    }
    case 'VFA': {
      return Make.ALPINE
    }
    case 'SCF': {
      return Make.ASTON_MARTIN
    }
    case 'TRU':
    case 'WAU':
    case 'WA1':
    case 'WUA':
    case '93U':
    case '93V':
    case '99A':
    case 'AAA': {
      return Make.AUDI
    }
    case 'WBA':
    case 'WBS':
    case 'WBW':
    case 'WBY':
    case '4US': {
      return Make.BMW
    }
    case 'SCB': {
      return Make.BENTLEY
    }
    case 'VF9': {
      return Make.BUGATTI
    }
    case '1G4':
    case '2G4':
    case '3G4':
    case '3G5': {
      return Make.BUICK
    }
    case '4B9':
    case '99L':
    case 'LA9':
    case 'LC0':
    case 'LGX':
    case 'LPE': {
      return Make.BYD
    }
    case '1G6':
    case '1GY': {
      return Make.CADILLAC
    }
    case 'LPA': {
      return Make.CHANGAN
    }
    case '98R':
    case '9UJ':
    case 'LVM':
    case 'LVV':
    case 'PRH': {
      return Make.CHERY
    }
    case '1GC':
    case '1G1':
    case '2G1':
    case '2GA':
    case '3G1':
    case '3GC':
    case '3GN':
    case '6G1':
    case '8AG':
    case '8GG':
    case '9BG':
    case 'LSG':
    case 'MMM': {
      return Make.CHEVROLET
    }
    case '1C3':
    case '1C4':
    case '1C6':
    case '2A4':
    case '2C3':
    case '3C4': {
      return Make.CHRYSLER
    }
    case 'VF7':
    case 'VS7':
    case '935': {
      return Make.CITROEN
    }
    case 'UU1': {
      return Make.DACIA
    }
    case 'XLR': {
      return Make.DAF
    }
    case 'SUP':
    case 'UU6':
    case 'XWB': {
      return Make.DAEWOO
    }
    case 'SCE': {
      return Make.DELOREAN
    }
    case 'ZDT': {
      return Make.DE_TOMASO
    }
    case '1B3':
    case '1D3':
    case '2B3':
    case '2B7':
    case '2D3':
    case '3D3':
    case '3D4':
    case '2B5':
    case 'WDW':
    case 'WD8':
    case 'WD0': {
      return Make.DODGE
    }
    case 'VR1': {
      return Make.DS
    }
    case 'ZDM': {
      return Make.DUCATI
    }
    case 'ZDF':
    case 'ZFF': {
      return Make.FERRARI
    }
    case 'MCA':
    case 'SUF':
    case 'ZFA':
    case '2FA':
    case '8AP':
    case '9BD': {
      return Make.FIAT
    }
    case 'AFA':
    case 'LVS':
    case 'MAJ':
    case 'MNB':
    case 'NM0':
    case 'PE1':
    case 'SFA':
    case 'VS6':
    case 'WF0':
    case '1FA':
    case '1FB':
    case '1FC':
    case '1FD':
    case '1FM':
    case '1FT':
    case '1ZV':
    case '2FB':
    case '2FC':
    case '2FM':
    case '2FT':
    case '3FA':
    case '3FE':
    case '6FP':
    case '8AF':
    case '9BF': {
      return Make.FORD
    }
    case '1FU':
    case '1FV':
    case '2FU':
    case '2FV': {
      return Make.FREIGHTLINER
    }
    case '4UZ':
    case 'ABJ':
    case 'JLF':
    case 'JLS':
    case 'JL5':
    case 'JL6':
    case 'JW6':
    case 'TYA':
    case 'TYB': {
      return Make.FUSO
    }
    case 'LL6':
    case 'LMG':
    case 'LMW':
    case 'LVG': {
      return Make.GAC
    }
    case 'L6T':
    case 'LB2':
    case 'LB3':
    case 'Y4K': {
      return Make.GEELY
    }
    case 'KMT':
    case 'KMU': {
      return Make.GENESIS
    }
    case 'MA6':
    case 'MCB':
    case 'XUF':
    case '1GT':
    case '2GX':
    case '3GK':
    case '3GT':
    case '2G0':
    case '2GJ': {
      return Make.GMC
    }
    case '2AY':
    case '2AZ':
    case '5PV':
    case '7H4':
    case 'AHH':
    case 'JH6':
    case 'JHA':
    case 'JHB':
    case 'JHD':
    case 'JHF':
    case 'JHH': {
      return Make.HINO
    }
    case '1GH':
    case '3G0':
    case '3GM':
    case '5G8':
    case '6H8':
    case 'KL3':
    case 'MMU': {
      return Make.HOLDEN
    }
    case 'MAK':
    case 'MHR':
    case 'MLH':
    case 'MRH':
    case 'NLA':
    case 'SHH':
    case 'SHS':
    case '2HG':
    case '2HK':
    case '2HJ':
    case '93H': {
      return Make.HONDA
    }
    case 'AC5':
    case 'ADD':
    case 'MAL':
    case 'NLH':
    case 'TMA':
    case 'X7M':
    case '2HM':
    case '5NP': {
      return Make.HYUNDAI
    }
    case 'TRA':
    case 'TSE': {
      return Make.IKARUS
    }
    case 'SC6':
    case 'SH7': {
      return Make.INEOS_GRENADIER
    }
    case '3PC':
    case '5N3':
    case 'JNK':
    case 'JNR':
    case 'JNX':
    case 'SJK': {
      return Make.INFINITI
    }
    case 'LZE':
    case 'MPA':
    case 'MP1':
    case 'NNA': {
      return Make.ISUZU
    }
    case 'WJM':
    case 'ZCF':
    case 'ZFC': {
      return Make.IVECO
    }
    case 'LJ1': {
      return Make.JAC
    }
    case 'SAD':
    case 'SAJ': {
      return Make.JAGUAR
    }
    case '1J4':
    case '1J8': {
      return Make.JEEP
    }
    case '1XK':
    case '6F5': {
      return Make.KENWORTH
    }
    case 'MS0':
    case 'U5Y':
    case 'U6Y': {
      return Make.KIA
    }
    case 'XTA': {
      return Make.LADA
    }
    case 'ZHW':
    case 'ZPB': {
      return Make.LAMBORGHINI
    }
    case 'ZLA': {
      return Make.LANCIA
    }
    case 'SAL':
    case 'SAR': {
      return Make.LAND_ROVER
    }
    case 'SEY': {
      return Make.LDV
    }
    case 'LFZ': {
      return Make.LEAP_MOTORS
    }
    case 'JTJ': {
      return Make.LEXUS
    }
    case 'LJU':
    case 'SCC': {
      return Make.LOTUS
    }
    case 'LZM':
    case 'VAN':
    case 'WMA':
    case '6AB': {
      return Make.MAN
    }
    case 'LSH':
    case 'LSK': {
      return Make.MAXUS
    }
    case 'LSJ': {
      return Make.MG
    }
    case '1M1':
    case '1M2':
    case '1M3':
    case '1M4': {
      return Make.MACK
    }
    case 'ZAM': {
      return Make.MASERATI
    }
    case 'JMZ':
    case 'LVR':
    case 'MM8':
    case 'PE3':
    case 'YCM':
    case '1YV':
    case '3MD':
    case '3MZ':
    case '4F': {
      return Make.MAZDA
    }
    case 'SBM': {
      return Make.MCLAREN
    }
    case 'MBR':
    case 'NLE':
    case 'NMB':
    case 'VSA':
    case 'WDB':
    case 'WDD':
    case 'WDF':
    case 'WMX':
    case 'W1V':
    case '4JG':
    case '9BM':
    case '8BR':
    case 'W1Z':
    case 'WDZ':
    case '8BT':
    case 'W1W':
    case 'WD4':
    case '8BU':
    case 'W1Y':
    case 'WD3': {
      return Make.MERCEDES_BENZ
    }
    case '1ME': {
      return Make.MERCURY
    }
    case 'WMW': {
      return Make.MINI
    }
    case 'JA3':
    case 'JA4':
    case 'JMB':
    case 'JMY':
    case 'MA7':
    case 'MMB':
    case 'MMC':
    case 'MMT':
    case 'XMC':
    case '6MM':
    case '93X': {
      return Make.MITSUBISHI
    }
    case 'SA9': {
      return Make.MORGAN
    }
    case 'JN1':
    case 'JN3':
    case 'JN6':
    case 'JN8':
    case 'MBH':
    case 'MDH':
    case 'MNT':
    case 'SJN':
    case 'VNV':
    case 'VSK':
    case 'VWA':
    case '5N1':
    case '6F4':
    case '94D':
    case '5BZ': {
      return Make.NISSAN
    }
    case '2NV':
    case '4RK': {
      return Make.NOVA
    }
    case '1G3':
    case '2G3': {
      return Make.OLDSMOBILE
    }
    case 'SKF':
    case 'VN1':
    case 'VSX':
    case 'VXE':
    case 'VXK':
    case 'W0L':
    case 'W0V': {
      return Make.OPEL
    }
    case 'SDB':
    case 'VF3':
    case '8AD':
    case '8GD':
    case '936': {
      return Make.PEUGEOT
    }
    case '1P3':
    case '2P3':
    case '3P3':
    case '2P5': {
      return Make.PLYMOUTH
    }
    case 'LPS':
    case 'YSM':
    case 'YSR': {
      return Make.POLESTAR
    }
    case '1G2':
    case '1GM':
    case '2G2':
    case '3G2':
    case '3G7':
    case '6G2': {
      return Make.PONTIAC
    }
    case 'WP1':
    case 'WP0':
    case 'VP1':
    case 'EP0':
    case 'VP0':
    case '0P0': {
      return Make.PORSCHE
    }
    case 'KNM':
    case 'MEE':
    case 'VF1':
    case 'VF2':
    case 'VF6':
    case 'X7L':
    case '8A1':
    case '93Y':
    case '9FB': {
      return Make.RENAULT
    }
    case 'V39': {
      return Make.RIMAC
    }
    case 'SCA': {
      return Make.ROLLS_ROYCE
    }
    case 'YK1':
    case 'YS3':
    case 'YTN': {
      return Make.SAAB
    }
    case 'LRB':
    case 'LRE':
    case 'LSF': {
      return Make.SAIC
    }
    case '1G8':
    case '3GS': {
      return Make.SATURN
    }
    case 'VLU':
    case 'XLE':
    case 'YS2':
    case 'YS4':
    case '9BS': {
      return Make.SCANIA
    }
    case 'VSS': {
      // vins starting with VSSZZZKM will always be a CUPRA Formentor
      // vins starting with VSSZZZK1 will always be a CUPRA Born
      if (vin.startsWith('VSSZZZKM') || vin.startsWith('VSSZZZK1')) {
        return Make.CUPRA
      }
      switch (modelCode) {
        case 'K11B3C':
        case 'K11B4A':
        case 'K11C5C':
        case 'K11C5D':
        case 'KBPCJS':
        case 'KHPCJS':
        case 'KL1BFZ':
        case 'KL1CIZ':
        case 'KL1CVY':
        case 'KL8CQS':
        case 'KL8CVY':
        case 'KM7BEZ':
        case 'KM7BHT':
        case 'KM7BUY':
        case 'KM7CQT':
        case 'KM7CRZ':
        case 'KM7CVY':
        case 'KM7RZT':
        case 'KU1BFZ':
        case 'KU1BHZ':
        case 'KU1BLZ':
        case 'KU1CIZ':
        case 'KU1CVY':
        case 'KU8BFZ':
        case 'KU8BHZ':
        case 'KU8BLZ':
        case 'KU8CQS':
        case 'KU8CVY': {
          return Make.CUPRA
        }
        default: {
          return Make.SEAT
        }
      }
    }
    case 'LM8': {
      return Make.SERES
    }
    case 'TMB':
    case 'TMP':
    case 'TM9': {
      return Make.SKODA
    }
    case 'WME':
    case 'W1A':
    case 'HES': {
      return Make.SMART
    }
    case 'SUU': {
      return Make.SOLARIS
    }
    case 'KPA':
    case 'KPT': {
      return Make.SSANGYONG
    }
    case 'LMC':
    case 'MA3':
    case 'MLC':
    case 'MMS':
    case 'MS3':
    case 'TSM':
    case 'VSE':
    case 'VTT':
    case '8AK': {
      return Make.SUZUKI
    }
    case '5YJ':
    case '7G2':
    case '7SA':
    case 'LRW':
    case 'SFZ':
    case 'XP7': {
      return Make.TESLA
    }
    case 'AHT':
    case 'LTV':
    case 'MBJ':
    case 'MHF':
    case 'MR0':
    case 'NMT':
    case 'SB1':
    case 'TW1':
    case 'VNK':
    case '6T1':
    case '8AJ':
    case '93R':
    case '9BR': {
      return Make.TOYOTA
    }
    case 'SMT': {
      return Make.TRIUMPH
    }
    case 'SDL': {
      return Make.TVR
    }
    case 'SKA': {
      return Make.VAUXHALL
    }
    case 'AAV':
    case 'LFV':
    case 'LSV':
    case 'MEX':
    case 'VWV':
    case 'WVG':
    case 'WVW':
    case 'XW8':
    case 'YBW':
    case '1VW':
    case '2V4':
    case '2V8':
    case '3VW':
    case '8AW':
    case '9BW':
    case '1V2':
    case '3VV':
    case 'VW1':
    case 'VW2':
    case 'WV4': {
      return Make.VOLKSWAGEN
    }
    case 'WV1':
    case 'WV2':
    case 'WV3': {
      return Make.VOLKSWAGEN_COMMERCIAL_VEHICLES
    }
    case 'MC2':
    case 'XLB':
    case 'YB1':
    case 'YV1':
    case 'YV4':
    case 'YV2':
    case 'YV3':
    case '4V1':
    case '4V2':
    case '4V3':
    case '4V4':
    case '4V5':
    case '4V6':
    case '4VL':
    case '4VM':
    case '4VZ': {
      return Make.VOLVO
    }
    case '2WK':
    case '2WL':
    case '2WM': {
      return Make.WESTERN_STAR
    }
    case 'L1N':
    case 'LMV': {
      return Make.XPENG
    }
  }

  switch (vin.substring(0, 2)) {
    case 'KL': {
      return Make.DAEWOO
    }
    case 'JD': {
      return Make.DAIHATSU
    }
    case '1G':
    case '3G': {
      return Make.GMC
    }
    case 'JH':
    case '1H':
    case '3H':
    case '5F': {
      return Make.HONDA
    }
    case 'KM': {
      return Make.HYUNDAI
    }
    case 'JA': {
      return Make.ISUZU
    }
    case 'KN': {
      return Make.KIA
    }
    case '1L':
    case '5L': {
      return Make.LINCOLN
    }
    case '4F': {
      return Make.MAZDA
    }
    case '2M':
    case '4M': {
      return Make.MERCURY
    }
    case 'JN':
    case '1N':
    case '3N': {
      return Make.NISSAN
    }
    case '4S': {
      return Make.SUBARU
    }
    case 'JS': {
      return Make.SUZUKI
    }
    case 'JT':
    case '2T':
    case '4T':
    case '5T': {
      return Make.TOYOTA
    }
  }

  return null
}

function getMakeFromDescription(description: string): Make | null {
  if (description.match(/audi/i)) {
    return Make.AUDI
  } else if (description.match(/^(seat )?cupra/i)) {
    return Make.CUPRA
  } else if (description.match(/lamborghini/i)) {
    return Make.LAMBORGHINI
  } else if (description.match(/porsche/i)) {
    return Make.PORSCHE
  } else if (description.match(/seat/i)) {
    return Make.SEAT
  } else if (description.match(/(škoda|skoda)/i)) {
    return Make.SKODA
  } else if (description.match(/(volkswagen|vw)/i)) {
    return Make.VOLKSWAGEN
  }

  return null
}

/**
 * This method retrieves the make of a vehicle from the VIN or description
 * (name).
 *
 * @param vehicle Vehicle to get make from
 */
export function getMake(vehicle: Vehicle): Make | null {
  let make: Make | null = null

  if (vehicle.vin && validateVin(vehicle.vin)) {
    make = getMakeFromVin(vehicle.vin, vehicle.modelCode)
  }

  if (!make && vehicle.name) {
    make = getMakeFromDescription(vehicle.name)
  }

  return make
}
