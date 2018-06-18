const fs = require('fs')

const fixture = JSON.parse(fs.readFileSync('./models.json', 'utf8'))

let results = {}
for (let manu of Object.keys(fixture).sort()) {
  switch (manu) {
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
      continue
  }
  for (let model of Object.keys(fixture[manu]).sort()) {
    let vin = `${manu}${model}_________`
    let result = null
    switch (vin.substr(0, 3)) {
      case '0P0':
        switch (vin.substr(3, 5)) {
          case 'ZZZ98':
            result = 'Boxster'
            break
        }
        break
      case '1VW':
        switch (vin.substr(3, 5)) {
          case 'AA017':
          case 'AG017':
          case 'BB017':
          case 'BG017':
          case 'CB017':
          case 'CG917':
          case 'DB017':
          case 'FA017':
          case 'FA917':
          case 'ZZZ17':
          case 'ZZZ17':
          case 'ZZZ17':
          case 'ZZZ17':
          case 'ZZZ17':
          case 'ZZZ17':
          case 'ZZZ17':
          case 'ZZZ17':
          case 'ZZZ17':
          case 'ZZZ18':
          case 'ZZZ1H':
          case 'ZZZ1Z':
            result = 'Golf'
            break
        }
        break
      case '3VW':
        switch (vin.substr(3, 5)) {
          case 'CA21C':
          case 'CD31Y':
          case 'CK21C':
          case 'CK21Y':
          case 'CK31C':
          case 'CM31Y':
          case 'CP21C':
          case 'CR31C':
          case 'CS21C':
          case 'RG31Y':
            result = 'Beetle'
            break
          case '1931H':
            result = 'Golf'
            break
        }
        break
      case 'MP1':
        switch (vin.substr(3, 5)) {
          case 'ZZZ9P':
            result = 'Cayenne'
            break
        }
        break
      case 'TMB':
        switch (vin.substr(3, 5)) {
          case 'ZZZAA':
            result = 'Citigo'
            break
          case 'AA15J':
          case 'AA25J':
          case 'AA65J':
          case 'AC65J':
          case 'AE65J':
          case 'AH65J':
          case 'BC65J':
          case 'BD65J':
          case 'BE65J':
          case 'BF65J':
          case 'BG65J':
          case 'BH25J':
          case 'BH65J':
          case 'CB26Y':
          case 'CC26Y':
          case 'CC65J':
          case 'CD26Y':
          case 'CD65J':
          case 'CE65J':
          case 'CF65J':
          case 'CG65J':
          case 'CH65J':
          case 'CX26Y':
          case 'CY26Y':
          case 'CY26Y':
          case 'DC65J':
          case 'DD65J':
          case 'DE65J':
          case 'DF65J':
          case 'DG65J':
          case 'DH65J':
          case 'DY46Y':
          case 'EA25J':
          case 'EA65J':
          case 'EA6NJ':
          case 'EB6NJ':
          case 'EC65J':
          case 'EH25J':
          case 'EH65J':
          case 'EJ25J':
          case 'EJ65J':
          case 'EJ6NJ':
          case 'EK65J':
          case 'EL65J':
          case 'EM25J':
          case 'EM65J':
          case 'EM6NJ':
          case 'EN65J':
          case 'EN6NJ':
          case 'EP6NJ':
          case 'ER6NJ':
          case 'ET6NJ':
          case 'FA65J':
          case 'FC65J':
          case 'FE65J':
          case 'FF65J':
          case 'FH65J':
          case 'GC26Y':
          case 'GC65J':
          case 'GD26Y':
          case 'GD46Y':
          case 'GD65J':
          case 'GE65J':
          case 'GF25J':
          case 'GF45J':
          case 'GF65J':
          case 'GG65J':
          case 'GH65J':
          case 'GS26Y':
          case 'HB264':
          case 'HB26U':
          case 'HB26V':
          case 'HB26Y':
          case 'HB46Y':
          case 'HBZ6Y':
          case 'HC266':
          case 'HC26Y':
          case 'HC46Y':
          case 'HC65J':
          case 'HD26Y':
          case 'HD65J':
          case 'HE21Z':
          case 'HE26Y':
          case 'HF26Y':
          case 'HF46Y':
          case 'HF65J':
          case 'HG65J':
          case 'HH65J':
          case 'HK26Y':
          case 'HM26Y':
          case 'HS26Y':
          case 'HS36Y':
          case 'HS46Y':
          case 'HX26Y':
          case 'HY264':
          case 'HY26Y':
          case 'HY46Y':
          case 'HZ26Y':
          case 'HZ46Y':
          case 'JA65J':
          case 'JB16Y':
          case 'JB26Y':
          case 'JB6NJ':
          case 'JC25J':
          case 'JC26Y':
          case 'JC65J':
          case 'JD65J':
          case 'JE65J':
          case 'JF16Y':
          case 'JF25J':
          case 'JF26Y':
          case 'JF46Y':
          case 'JF65J':
          case 'JG65J':
          case 'JH25J':
          case 'JH65J':
          case 'JJ25J':
          case 'JJ26Y':
          case 'JJ46Y':
          case 'JJ65J':
          case 'JJ6NJ':
          case 'JK25J':
          case 'JK26Y':
          case 'JK65J':
          case 'JL65J':
          case 'JM25J':
          case 'JM65J':
          case 'JM6NJ':
          case 'JN65J':
          case 'JN6NJ':
          case 'JP6NJ':
          case 'JR6NJ':
          case 'JS26Y':
          case 'JT6NJ':
          case 'JX26Y':
          case 'JX46Y':
          case 'JY26Y':
          case 'JY46Y':
          case 'JZ26Y':
          case 'JZ46Y':
          case 'M526Y':
          case 'MB26Y':
          case 'MB46Y':
          case 'MC26Y':
          case 'MD26Y':
          case 'MS26Y':
          case 'MS46Y':
          case 'MY26Y':
          case 'MZ46Y':
          case 'NB26Y':
          case 'NB46Y':
          case 'NC26Y':
          case 'NC46Y':
          case 'ND26Y':
          case 'NF26Y':
          case 'NF46Y':
          case 'NH26Y':
          case 'NH46Y':
          case 'NK26Y':
          case 'NS26Y':
          case 'NT26Y':
          case 'NW46Y':
          case 'NY26Y':
          case 'NY46Y':
          case 'NZ26Y':
          case 'PB16Y':
          case 'PB26Y':
          case 'PB46Y':
          case 'PC26Y':
          case 'PF16Y':
          case 'PF26Y':
          case 'PF46Y':
          case 'PH16Y':
          case 'PH26Y':
          case 'PJ26Y':
          case 'PW16Y':
          case 'PW26Y':
          case 'PY26Y':
          case 'PY46Y':
          case 'WU26Y':
            result = 'Fabia'
            break
          case 'A0A20':
          case 'ACA20':
          case 'ACE20':
          case 'ACE30':
          case 'ADA20':
          case 'ADA30':
          case 'ADM20':
          case 'AEA20':
          case 'AEA30':
          case 'AED20':
          case 'AEE20':
          case 'AEE30':
          case 'AEEB0':
          case 'AEF20':
          case 'AEF30':
          case 'AEFZ0':
          case 'AEP20':
          case 'AER30':
          case 'AET20':
          case 'AFA20':
          case 'AFE20':
          case 'AFE30':
          case 'AFF20':
          case 'AFF30':
          case 'AGE20':
          case 'AGE30':
          case 'ARF20':
          case 'AWF20':
          case 'AWW30':
          case 'CEE20':
          case 'CEE30':
          case 'CEE40':
          case 'CEF20':
          case 'CEF30':
          case 'CEF40':
          case 'CEP20':
          case 'CEP30':
          case 'CFF20':
          case 'CFF30':
          case 'CFF40':
          case 'CFF60':
          case 'DEE20':
          case 'DEF20':
          case 'DFF20':
          case 'EAF20':
          case 'EEF30':
          case 'EFF20':
          case 'LFF30':
          case 'SEE20':
          case 'ZFF30':
            result = 'Favorit'
            break
          case 'BGF65':
          case 'E6F61':
          case 'E6F65':
          case 'EBF61':
          case 'ECF61':
          case 'ECF65':
          case 'EDD61':
          case 'EE661':
          case 'EEA61':
          case 'EEE61':
          case 'EEF61':
          case 'EEF65':
          case 'EEF91':
          case 'EEFG1':
          case 'EEP61':
          case 'EER61':
          case 'EFF16':
          case 'EFF41':
          case 'EFF56':
          case 'EFF61':
          case 'EFF65':
          case 'EFF67':
          case 'EFF91':
          case 'EFFG1':
          case 'EFFG5':
          case 'EFG61':
          case 'EFG65':
          case 'EFT61':
          case 'EGB61':
          case 'EGE61':
          case 'EGE65':
          case 'EGF16':
          case 'EGF31':
          case 'EGF51':
          case 'EGF61':
          case 'EGF63':
          case 'EGF64':
          case 'EGF65':
          case 'EGF67':
          case 'EGFG1':
          case 'EGFG5':
          case 'EGFL1':
          case 'EGG61':
          case 'EGR61':
          case 'EGT61':
          case 'EHH61':
          case 'EHH65':
          case 'EHH67':
          case 'EHHG1':
          case 'ETTG5':
          case 'FGF61':
          case 'FGF61':
          case 'FGF65':
          case 'GEF65':
          case 'RFF61':
          case 'RGF61':
          case 'WEF61':
          case 'WGF61':
            result = 'Felicia'
            break
          case 'JG7NU':
          case 'JP7NU':
          case 'JR7NU':
          case 'LJ7NU':
            result = 'Karoq'
            break
          case 'JC7NS':
          case 'JC9NS':
          case 'JJ7NS':
          case 'JJ9NS':
          case 'LD7NS':
          case 'LD9NS':
          case 'LJ7NS':
          case 'LK7NS':
          case 'LK9NS':
            result = 'Kodiaq'
            break
          case 'AA9NE':
          case 'AB7NE':
          case 'AB9NE':
          case 'AC7NE':
          case 'AC9NE':
          case 'AD9NE':
          case 'AE9NE':
          case 'AG7NE':
          case 'AG9NE':
          case 'AJ9NE':
          case 'AK9NE':
          case 'AL21U':
          case 'AP9NE':
          case 'AR9NE':
          case 'AU9NE':
          case 'BA21Z':
          case 'BA61Z':
          case 'BB61Z':
          case 'BD61Z':
          case 'BE21U':
          case 'BE612':
          case 'BE61Z':
          case 'BG21U':
          case 'BG41U':
          case 'BJ61Z':
          case 'BK21U':
          case 'BK61Z':
          case 'BL21U':
          case 'BM61Z':
          case 'BP210':
          case 'BP21U':
          case 'BP31U':
          case 'BP41U':
          case 'BS21Z':
          case 'BS61Z':
          case 'BT61Z':
          case 'BU21U':
          case 'C121U':
          case 'CA61Z':
          case 'CB61Z':
          case 'CD61Z':
          case 'CE21U':
          case 'CE61Z':
          case 'CG21U':
          case 'CJ21U':
          case 'CJ61Z':
          case 'CK21U':
          case 'CK41U':
          case 'CK61Z':
          case 'CM61Z':
          case 'CP21U':
          case 'CS21Z':
          case 'CS612':
          case 'CS61Z':
          case 'CT21Z':
          case 'CT21Z':
          case 'CT61Z':
          case 'CX21U':
          case 'DA61Z':
          case 'DG21U':
          case 'DG41U':
          case 'DJ21U':
          case 'DJ61Z':
          case 'DM61Z':
          case 'DN21U':
          case 'DS41U':
          case 'DS61Z':
          case 'DT61Z':
          case 'DX21U':
          case 'EF61Z':
          case 'EH61Z':
          case 'ER21U':
          case 'FE61Z':
          case 'FL21U':
          case 'FP21U':
          case 'GA61Z':
          case 'GB61Z':
          case 'GD61Z':
          case 'GE21U':
          case 'GE21Z':
          case 'GE612':
          case 'GE61Z':
          case 'GG21U':
          case 'GJ61Z':
          case 'GK61Z':
          case 'GL21U':
          case 'GM61Z':
          case 'GP21U':
          case 'GP41U':
          case 'GS61Z':
          case 'GT61Z':
          case 'GU21U':
          case 'H621U':
          case 'HA61Z':
          case 'HB612':
          case 'HB61Z':
          case 'HD61Z':
          case 'HE21U':
          case 'HE61Z':
          case 'HG21U':
          case 'HG41U':
          case 'HGZ1U':
          case 'HJ61Z':
          case 'HK21U':
          case 'HK612':
          case 'HK61Z':
          case 'HM61Z':
          case 'HN61Z':
          case 'HP21U':
          case 'HP41U':
          case 'HS21Z':
          case 'HS617':
          case 'HS61Z':
          case 'HT21Z':
          case 'HT61Z':
          case 'HU21U':
          case 'HX21U':
          case 'JA61Z':
          case 'JA9NE':
          case 'JB7NE':
          case 'JB9NE':
          case 'JC7NE':
          case 'JC9NE':
          case 'JD7NE':
          case 'JD9NE':
          case 'JE9NE':
          case 'JF7NE':
          case 'JG21U':
          case 'JG41U':
          case 'JG7NE':
          case 'JG9NE':
          case 'JJ61Z':
          case 'JJ7NE':
          case 'JJ9NE':
          case 'JK21U':
          case 'JK7NE':
          case 'JK9NE':
          case 'JM61Z':
          case 'JN21U':
          case 'JP7NE':
          case 'JP9NE':
          case 'JR9NE':
          case 'JS21U':
          case 'JS61Z':
          case 'JT61Z':
          case 'JU9NE':
          case 'JX11U':
          case 'JX21U':
          case 'JX41U':
          case 'KD61Z':
          case 'KE61Z':
          case 'KG41U':
          case 'KJ7NE':
          case 'KL21U':
          case 'KK61Z':
          case 'KS21U':
          case 'KS21Z':
          case 'KS41U':
          case 'KS61Z':
          case 'KT61Z':
          case 'LG9NE':
          case 'LJ9NE':
          case 'LK9NE':
          case 'TTC1Z':
          case 'UF61Z':
          case 'UH21Z':
          case 'UH61Z':
          case 'UR21U':
          case 'ZZZ18':
          case 'ZZZ1U':
          case 'ZZZ1V':
            result = 'Octavia'
            break
          case '13600':
          case '13M00':
          case 'AA6NH':
          case 'AB6NH':
          case 'AF6NH':
          case 'AL6NH':
          case 'AM6NH':
          case 'AN6NH':
          case 'AP6NH':
          case 'AR6NH':
          case 'AT6NH':
          case 'EA6NH':
          case 'EB6NH':
          case 'EF6NH':
          case 'EJ6NH':
          case 'EL6NH':
          case 'EM6NH':
          case 'EN6NH':
          case 'EP6NH':
          case 'ER6NH':
          case 'ET6NH':
            result = 'Rapid'
            break
          case 'LC65J':
          case 'LE65J':
          case 'LH65J':
          case 'M065J':
          case 'MB25J':
          case 'MC25J':
          case 'MC65J':
          case 'MD65J':
          case 'ME25J':
          case 'ME65J':
          case 'MF25J':
          case 'MF65J':
          case 'MG25J':
          case 'MG65J':
          case 'MH25J':
          case 'MH65J':
          case 'ML65J':
          case 'NC65J':
          case 'ND65J':
          case 'NF65J':
          case 'NG65J':
          case 'NH65J':
          case 'NK65J':
          case 'NL65J':
          case 'NM25J':
          case 'NM65J':
          case 'NN65J':
          case 'NN6EJ':
          case 'PL65J':
          case 'TEC5J':
          case 'UHB5J':
            result = 'Roomster'
            break
          case 'AA73T':
          case 'AA93T':
          case 'AA7NP':
          case 'AB73T':
          case 'AB7NP':
          case 'AB93T':
          case 'AB9NP':
          case 'AD73T':
          case 'AE73T':
          case 'AE93T':
          case 'AF73T':
          case 'AF93T':
          case 'AG7NP':
          case 'AH7NP':
          case 'AH9NP':
          case 'AJ73T':
          case 'AJ7NP':
          case 'AJ9NP':
          case 'AL7NP':
          case 'AL9NP':
          case 'BG63U':
          case 'BR63U':
          case 'BT63U':
          case 'BU63U':
          case 'BV23U':
          case 'BV63U':
          case 'CB73T':
          case 'CC73T':
          case 'CC93T':
          case 'CE63U':
          case 'CE7NP':
          case 'CF73T':
          case 'CG63U':
          case 'CL63U':
          case 'CR63U':
          case 'CS63U':
          case 'CT63U':
          case 'CU23U':
          case 'CU63U':
          case 'CV63U':
          case 'DE63U':
          case 'DL63U':
          case 'DU63U':
          case 'JA73T':
          case 'JA7NP':
          case 'JA93T':
          case 'JB73T':
          case 'JB7NP':
          case 'JB93T':
          case 'JB9NP':
          case 'JE73T':
          case 'JE93T':
          case 'JF73T':
          case 'JF93T':
          case 'JG7NP':
          case 'JG9NP':
          case 'JH73T':
          case 'JH7NP':
          case 'JH9NP':
          case 'JJ73T':
          case 'JJ7NP':
          case 'JJ93T':
          case 'JJ9NP':
          case 'JL7NP':
          case 'JL9NP':
          case 'LB93T':
          case 'LC73T':
          case 'LC93T':
          case 'LE73T':
          case 'LE7NP':
          case 'LE9NP':
          case 'LF73T':
          case 'LF93T':
          case 'LJ7NP':
          case 'LJ9NP':
            result = 'Superb'
            break
          case 'JC75L':
          case 'JF75L':
          case 'JF95L':
          case 'JJ75L':
          case 'JJ95L':
          case 'JT75L':
          case 'LB75L':
          case 'LC75L':
          case 'LD75L':
          case 'LD95L':
          case 'LE75L':
            result = 'Yeti'
            break
        }
        break
      case 'TRU':
        switch (vin.substr(3, 5)) {
          case 'ZZZ8P':
            result = 'A3'
            break
          case 'MF38J':
          case 'RD38J':
          case 'TC28N':
          case 'TX28N':
          case 'UF38J':
          case 'UT28N':
          case 'WF28N':
          case 'WT28N':
          case 'ZZZ8J':
          case 'ZZZ8N':
          case 'ZZZBJ':
          case 'ZZZBN':
          case 'ZZZFV':
            result = 'TT'
            break
        }
        break
      case 'VSS':
        switch (vin.substr(3, 5)) {
          case 'ZZZ7M':
          case 'ZZZ7N':
            result = 'Alhambra'
            break
          case 'ZZZ5P':
            result = 'Altea'
            break
          case 'ZZZ6H':
            result = 'Arosa'
            break
          case 'ZZZGK':
            result = 'Cordoba'
            break
          case 'ZZZ6J':
            result = 'Ibiza'
            break
          case 'ZZZ1P':
          case 'ZZZ5F':
            result = 'Leon'
            break
          case 'ZZZAA':
            result = 'Mii'
            break
          case 'ZZZ1L':
          case 'ZZZNH':
            result = 'Toledo'
            break
        }
        break
      case 'VWV':
        switch (vin.substr(3, 5)) {
          case 'ZZZ19':
          case 'ZZZ1G':
          case 'ZZZ1H':
          case 'ZZZ1J':
            result = 'Golf'
            break
          case 'ZZZ31':
          case 'ZZZ33':
          case 'ZZZ3A':
          case 'ZZZ3B':
            result = 'Passat'
            break
          case 'ZZZ6N':
          case 'ZZZ80':
            result = 'Polo'
            break
        }
        break
      case 'WAU':
        switch (vin.substr(3, 5)) {
          case 'ZZZ8X':
            result = 'A1'
            break
          case 'ZZZ8Z':
            result = 'A2'
            break
          case 'ZZZ8L':
          case 'ZZZ8P':
          case 'ZZZ8V':
          case 'ZZZBL':
            result = 'A3'
            break
          case 'AF48H':
          case 'ZZZ80':
          case 'ZZZ8D':
          case 'ZZZ8E':
          case 'ZZZ8H':
          case 'ZZZ8K':
          case 'ZZZBE':
          case 'ZZZF4':
            result = 'A4'
            break
          case 'CFAFH':
          case 'RV78T':
          case 'ZZZ8F':
          case 'ZZZ8T':
          case 'ZZZF5':
            result = 'A5'
            break
          case 'ZZZ4A':
          case 'ZZZ4B':
          case 'ZZZ4F':
            result = 'A6'
            break
          case 'RVAFD':
          case 'ZZZ4D':
          case 'ZZZ4E':
          case 'ZZZ4H':
            result = 'A8'
            break
          case 'ZZZ8U':
            result = 'Q3'
            break
          case 'ZZZ8R':
            result = 'Q5'
            break
          case 'ZZZ41':
          case 'ZZZ4L':
            result = 'Q7'
            break
          case 'ZZZ42':
            result = 'R8'
            break
        }
        break
      case 'WP0':
        switch (vin.substr(3, 5)) {
          case 'AA299':
          case 'AB299':
          case 'CA299':
          case 'CB296':
          case 'CB299':
          case 'CB2A9':
          case 'CD299':
          case 'DA299':
          case 'EA091':
          case 'EB091':
          case 'EB093':
          case 'ZZZ91':
          case 'ZZZ92':
          case 'ZZZ93':
          case 'ZZZ94':
          case 'ZZZ95':
          case 'ZZZ96':
          case 'ZZZ99':
            result = '911 Carrera'
            break
          case 'CA298':
          case 'CB298':
            result = 'Boxster'
            break
          case 'ZZZ97':
            result = 'Panamera'
            break
        }
        break
      case 'WP1':
        switch (vin.substr(3, 5)) {
          case '2229B':
          case '2229P':
          case 'AB29P':
          case 'AB2A2':
          case 'AC29P':
          case 'ZZZ92':
          case 'ZZZ9P':
            result = 'Cayenne'
            break
          case 'AB2A5':
          case 'ZZZ95':
            result = 'Macan'
            break
        }
        break
      case 'WUA':
        switch (vin.substr(3, 5)) {
          case 'ZZZ8P':
          case 'ZZZ8V':
            result = 'A3'
            break
          case 'ZZZ8E':
          case 'ZZZ8H':
          case 'ZZZ8K':
            result = 'A4'
            break
          case 'ZZZ8F':
          case 'ZZZ8T':
            result = 'A5'
            break
          case 'ZZZ4B':
          case 'ZZZ4F':
            result = 'A6'
            break
          case 'ZZZ4H':
            result = 'A8'
            break
          case 'ZZZ8U':
            result = 'Q3'
            break
          case 'ZZZ4L':
            result = 'Q7'
            break
          case 'ZZZ42':
            result = 'R8'
            break
        }
        break
      case 'WV1':
        switch (vin.substr(3, 5)) {
          case 'ZZZ2H':
            result = 'Amarok'
            break
          case 'ZZZ2K':
          case 'ZZZ9K':
          case 'ZZZ9U':
            result = 'Caddy'
            break
          case 'ZZZ2E':
          case 'ZZZ2F':
            result = 'Crafter'
            break
          case '22270':
          case 'ZZZ2D':
          case 'ZZZ70':
          case 'ZZZ7H':
          case 'ZZZ7J':
            result = 'Transporter'
            break
        }
        break
      case 'WV2':
        switch (vin.substr(3, 5)) {
          case 'ZZZ2K':
            result = 'Caddy'
            break
          case 'ZZZ21':
          case 'ZZZ23':
          case 'ZZZ24':
          case 'ZZZ25':
          case 'ZZZ26':
          case 'ZZZ28':
          case 'ZZZ29':
          case 'ZZZ70':
          case 'ZZZ7H':
            result = 'Transporter'
            break
        }
        break
      case 'WV3':
        switch (vin.substr(3, 5)) {
          case 'ZZZ70':
          case 'ZZZ7J':
            result = 'Transporter'
            break
        }
        break
      case 'WVG':
        switch (vin.substr(3, 5)) {
          case 'ZZZSZ':
            result = 'Crafter'
            break
          case 'ZZZ5N':
            result = 'Tiguan'
            break
          case 'BC2BP':
          case 'BC67L':
          case 'BC67L':
          case 'BC77L':
          case 'BC77L':
          case 'CB77L':
          case 'CC67L':
          case 'CC67L':
          case 'CC67L':
          case 'CM67L':
          case 'CM67L':
          case 'CM67L':
          case 'CM77L':
          case 'CM77L':
          case 'CM77L':
          case 'EM67L':
          case 'EM67L':
          case 'EM77L':
          case 'EM77L':
          case 'MM77L':
          case 'ZC67L':
          case 'ZC67L':
          case 'ZG77L':
          case 'ZG77L':
          case 'ZM77L':
          case 'ZM77L':
          case 'ZM77L':
          case 'ZZZ71':
          case 'ZZZ7C':
          case 'ZZZ7L':
          case 'ZZZ7P':
          case 'ZZZ7Z':
          case 'ZZZ9P':
            result = 'Touareg'
            break
          case 'ZZZ1T':
          case 'ZZZ1Y':
          case 'ZZZ1Z':
          case 'ZZZ7T':
            result = 'Touran'
            break
          case 'ZZZ7H':
            result = 'Transporter'
            break
        }
        break
      case 'WVW':
        switch (vin.substr(3, 5)) {
          case 'ZZZ1Y':
          case 'ZZZ9C':
            result = 'Beetle'
            break
          case 'ZZZ15':
          case 'ZZZ17':
          case 'ZZZ1B':
          case 'ZZZ1C':
          case 'ZZZ1D':
          case 'ZZZ1E':
          case 'ZZZ1G':
          case 'ZZZ1H':
          case 'ZZZ1J':
          case 'ZZZ1K':
          case 'ZZZ1M':
          case 'ZZZ1P':
          case 'ZZZ1S':
          case 'ZZZAU':
          case 'ZZZLJ':
          case 'ZZZTG':
            result = 'Golf'
            break
          case 'ZZZ6E':
          case 'ZZZ6X':
          case 'ZZZGE':
            result = 'Lupo'
            break
          case 'ZZZ23':
          case 'ZZZ2B':
          case 'ZZZ31':
          case 'ZZZ3A':
          case 'ZZZ3B':
          case 'ZZZ3C':
          case 'ZZZ3Z':
          case 'ZZZJ1':
            result = 'Passat'
            break
          case 'ZZZ3D':
            result = 'Phaeton'
            break
          case '22217':
          case '22219':
          case '2221G':
          case '2221H':
          case '22280':
          case '22286':
          case '22287':
          case 'ZZZ6K':
          case 'ZZZ6R':
          case 'ZZZ6Z':
          case 'ZZZ80':
          case 'ZZZ81':
          case 'ZZZ85':
          case 'ZZZ86':
          case 'ZZZ9N':
          case 'ZZZB6':
          case 'ZZZGN':
            result = 'Polo'
            break
          case 'ZZZ13':
          case 'ZZZ53':
            result = 'Scirocco'
            break
          case 'ZZZ7M':
          case 'ZZZ7N':
          case 'ZZZTM':
          case 'ZZZZM':
            result = 'Sharan'
            break
          case 'ZZZ7L':
            result = 'Touareg'
            break
          case 'ZZZ1T':
            result = 'Touran'
            break
          case 'ZZZ24':
          case 'ZZZ25':
          case 'ZZZ70':
            result = 'Transporter'
            break
          case 'ZZZAA':
            result = 'up!'
            break
        }
        break
      case 'ZHW':
        switch (vin.substr(3, 5)) {
          case 'EC147':
          case 'EC1ZD':
          case 'EF3ZD':
          case 'EG4ZD':
          case 'ER1ZD':
          case 'ET3ZD':
            result = 'Aventador'
            break
          case 'GE11M':
          case 'GE11S':
          case 'GE11S':
          case 'GE12T':
          case 'GE22N':
          case 'GE22T':
          case 'GE22T':
          case 'GE22T':
          case 'GE43T':
          case 'GE51U':
          case 'GE52Z':
          case 'GE52Z':
          case 'GE54T':
          case 'GE5AU':
          case 'GE61U':
          case 'GE62Z':
          case 'GE64T':
          case 'GE6AU':
          case 'GE6BZ':
          case 'GE71J':
          case 'GE81J':
          case 'GU22T':
            result = 'Gallardo'
            break
          case 'EC1ZF':
          case 'ED4ZF':
          case 'ER1ZF':
            result = 'Huracán'
            break
          case 'BA16S':
          case 'BE165':
          case 'BE16M':
          case 'BE16S':
          case 'BE265':
          case 'BE37S':
          case 'BE37S':
          case 'BE41N':
          case 'BE47S':
            result = 'Murciélago'
            break
        }
        break
    }
    if (!results[manu]) {
      results[manu] = { good: 0, bad: 0 }
    }
    if (result) {
      for (let vinYear in fixture[manu][model]) {
        for (let result in fixture[manu][model][vinYear]) {
          results[manu].good += fixture[manu][model][vinYear][result]
        }
      }
    } else {
      for (let vinYear of Object.keys(fixture[manu][model]).sort()) {
        for (let result of Object.keys(fixture[manu][model][vinYear]).sort()) {
          let count = fixture[manu][model][vinYear][result]
          results[manu].bad += count
          console.log(
            manu,
            model,
            vinYear,
            result.padStart(20),
            count.toFixed(0).padStart(8)
          )
        }
      }
    }
  }
}

let totalGood = 0
let totalBad = 0
for (let key of Object.keys(results).sort()) {
  let { good, bad } = results[key]
  totalGood += good
  totalBad += bad
  let cars = good + bad
  let pct = good / cars * 100
  console.log(`${key}: ${pct.toFixed(2).padStart(6)}% (${good}/${cars})`)
}

let cars = totalGood + totalBad
let pct = totalGood / cars * 100
console.log(`ALL: ${pct.toFixed(2).padStart(6)}% (${totalGood}/${cars})`)
