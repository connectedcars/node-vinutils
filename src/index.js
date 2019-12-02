const Make = require('./constants/make')
const Model = require('./constants/model')
const FuelType = require('./constants/fuel-type')
const getMake = require('./resolvers/get-make')
const getModel = require('./resolvers/get-model')
const getEngineSize = require('./resolvers/get-engine-size')
const getFuelType = require('./resolvers/get-fuel-type')
const getYear = require('./resolvers/get-year')
const validateVIN = require('./validators/validate-vin')
const getEngineHorspower = require('./resolvers/get-engine-hp')

module.exports = {
  Make,
  Model,
  FuelType,
  getMake,
  getModel,
  getEngineSize,
  getFuelType,
  getYear,
  validateVIN,
  getEngineHorspower
}
