const expect = require('unexpected')
const validateVIN = require('./validate-vin')

describe('validators/validate-vin', () => {
  it('validateVIN', () => {
    expect(validateVIN('ZCFC35A3205853011'), 'to be', true)
    expect(validateVIN('WVWZZZAAZAD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZBD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZCD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZDD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZED123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZFD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZGD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZHD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZID123456'), 'to be', false)
    expect(validateVIN('WVWZZZAAZJD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZKD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZLD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZMD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZND123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZOD123456'), 'to be', false)
    expect(validateVIN('WVWZZZAAZPD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZQD123456'), 'to be', false)
    expect(validateVIN('WVWZZZAAZRD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZSD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZTD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZUD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZVD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZWD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZXD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZYD123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZZD123456'), 'to be', false)
    expect(validateVIN('WVWZZZAAZ0D123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZ1D123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZ2D123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZ3D123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZ4D123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZ5D123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZ6D123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZ7D123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZ8D123456'), 'to be', true)
    expect(validateVIN('WVWZZZAAZ9D123456'), 'to be', true)
    expect(validateVIN('AAAAAAAAAaAAAAAAA'), 'to be', true)
    expect(validateVIN('AAAAAAAAAZAAAAAAA'), 'to be', false)
    expect(validateVIN('VSS-invalid-vin'), 'to be', false)
    expect(validateVIN('bogus'), 'to be', false)
    expect(validateVIN(), 'to be', false)
  })
})
