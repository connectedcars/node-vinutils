const validateVIN = require('../validators/validate-vin')

const getYearFromVIN = vin => {
  switch (vin.substr(9, 1).toUpperCase()) {
    case 'Y':
      return 2000
    case '1':
      return 2001
    case '2':
      return 2002
    case '3':
      return 2003
    case '4':
      return 2004
    case '5':
      return 2005
    case '6':
      return 2006
    case '7':
      return 2007
    case '8':
      return 2008
    case '9':
      return 2009
    case 'A':
      return 2010
    case 'B':
      return 2011
    case 'C':
      return 2012
    case 'D':
      return 2013
    case 'E':
      return 2014
    case 'F':
      return 2015
    case 'G':
      return 2016
    case 'H':
      return 2017
    case 'J':
      return 2018
    case 'K':
      return 2019
    case 'L':
      return 2020
    case 'M':
      return 2021
    case 'N':
      return 2022
    case 'P':
      return 2023
    case 'R':
      return 2024
    case 'S':
      return 2025
    case 'T':
      return 2026
    case 'V':
      return 2027
    case 'W':
      return 2028
    case 'X':
      return 2029
  }
  return null
}

/**
 * This method retrieves the year for a car from the VIN.
 * Year from VIN uses the 10th character according to the specification, but
 * resolves ambiguity to the range 2000-2029.
 *
 * @param {{ vin: string }} car
 * @returns {number|null} Formatted with four digits
 */
module.exports = car => {
  let year = null
  if (validateVIN(car.vin)) {
    year = getYearFromVIN(car.vin)
  }
  return year
}
