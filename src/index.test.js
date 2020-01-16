const expect = require('unexpected')
const { getMake, getEngineSize, getFuelType, getYear } = require('.')

describe('index', () => {
  it('runs getMake', () => {
    expect(getMake({ vin: 'AAVZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'LFVZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'LSVZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'MEXZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'VWVZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'WVGZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'WVWZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'WV1ZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'WV2ZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'WV3ZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'XW8ZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'YBWZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: '1VWZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: '2V4ZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: '2V8ZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: '3VWZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: '8AWZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: '9BWZZZAAZFD123456' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'TMBJE73T3E9123456' }), 'to be', 'Škoda')
    expect(getMake({ vin: 'TMPJE73T3E9123456' }), 'to be', 'Škoda')
    expect(getMake({ vin: 'TM9JE73T3E9123456' }), 'to be', 'Škoda')
    expect(getMake({ vin: 'TRUZZZ8V1H1123456' }), 'to be', 'Audi')
    expect(getMake({ vin: 'WAUZZZ8V1H1123456' }), 'to be', 'Audi')
    expect(getMake({ vin: 'WA1ZZZ8V1H1123456' }), 'to be', 'Audi')
    expect(getMake({ vin: 'WUAZZZ4F3BN123456' }), 'to be', 'Audi')
    expect(getMake({ vin: '93UZZZ8V1H1123456' }), 'to be', 'Audi')
    expect(getMake({ vin: '93VZZZ8V1H1123456' }), 'to be', 'Audi')
    expect(getMake({ vin: '99AZZZ8V1H1123456' }), 'to be', 'Audi')
    expect(getMake({ vin: 'VSSZZZ5FZGR123456' }), 'to be', 'SEAT')
    expect(getMake({ vin: '1GCKF484J8C457238' }), 'to be', 'Chevrolet')
    expect(getMake({ vin: '1C4GHB4R2RU505409' }), 'to be', 'Chrysler')
    expect(getMake({ vin: 'VF7YDDMFC11473862' }), 'to be', 'Citroën')
    expect(getMake({ vin: 'UU18SDPJ560466667' }), 'to be', 'Dacia')
    expect(getMake({ vin: 'KLAJF356EXK301059' }), 'to be', 'Daewoo')
    expect(getMake({ vin: 'JDA000G1100772829' }), 'to be', 'Daihatsu')
    expect(getMake({ vin: '2B7GP44R8TB234273' }), 'to be', 'Dodge')
    expect(getMake({ vin: 'ZFFXR48B000115391' }), 'to be', 'Ferrari')
    expect(getMake({ vin: 'ZFA25000002479923' }), 'to be', 'Fiat')
    expect(getMake({ vin: 'WF0FXXTTFF9M78256' }), 'to be', 'Ford')
    expect(getMake({ vin: 'JAAKBD470H6250508' }), 'to be', 'Isuzu')
    expect(getMake({ vin: 'ZCFC35A3205853011' }), 'to be', 'Iveco')
    expect(getMake({ vin: 'ZFCC35A3205820785' }), 'to be', 'Iveco')
    expect(getMake({ vin: 'JHMEC93200S102446' }), 'to be', 'Honda')
    expect(getMake({ vin: 'NLHWVH7JP5Z056754' }), 'to be', 'Hyundai')
    expect(getMake({ vin: 'KNEBA24328T521754' }), 'to be', 'Kia')
    expect(getMake({ vin: 'ZHWJ300200LL10025' }), 'to be', 'Lamborghini')
    expect(getMake({ vin: 'SALLNABB8YA528024' }), 'to be', 'Land Rover')
    expect(getMake({ vin: 'SARRTMLWRAD136172' }), 'to be', 'Land Rover')
    expect(getMake({ vin: 'JMZDE135200111346' }), 'to be', 'Mazda')
    expect(getMake({ vin: 'WDD2042021G139923' }), 'to be', 'Mercedes-Benz')
    expect(getMake({ vin: 'TYBFB83BD4DU19451' }), 'to be', 'Mitsubishi')
    expect(getMake({ vin: 'VNVV2U4S151094656' }), 'to be', 'Nissan')
    expect(getMake({ vin: 'VSKF4B1B8UY649146' }), 'to be', 'Nissan')
    expect(getMake({ vin: 'W0LGM8GS3F1021919' }), 'to be', 'Opel')
    expect(getMake({ vin: 'VF3VBBHXHGZ041335' }), 'to be', 'Peugeot')
    expect(getMake({ vin: 'YS3CD48U8T1002862' }), 'to be', 'Saab')
    expect(getMake({ vin: 'YS2R4X20001263612' }), 'to be', 'Scania')
    expect(getMake({ vin: 'WME01MC01YH040937' }), 'to be', 'smart')
    expect(getMake({ vin: 'KPTE0B19STP097882' }), 'to be', 'SsangYong')
    expect(getMake({ vin: 'JSAERC31S00361851' }), 'to be', 'Suzuki')
    expect(getMake({ vin: 'MA3GFC31S00457958' }), 'to be', 'Suzuki')
    expect(getMake({ vin: 'SB153ABK00E102914' }), 'to be', 'Toyota')
    expect(getMake({ vin: 'YV2H2CEC4MA362596' }), 'to be', 'Volvo')

    expect(getMake({ name: 'volkswagen' }), 'to be', 'Volkswagen')
    expect(getMake({ name: 'VOLKSWAGEN' }), 'to be', 'Volkswagen')
    expect(getMake({ name: 'Volkswagen' }), 'to be', 'Volkswagen')
    expect(getMake({ name: ' volkswagen something' }), 'to be', 'Volkswagen')
    expect(getMake({ name: 'vw' }), 'to be', 'Volkswagen')
    expect(getMake({ name: 'VW' }), 'to be', 'Volkswagen')
    expect(getMake({ name: 'Vw' }), 'to be', 'Volkswagen')
    expect(getMake({ name: ' vw something' }), 'to be', 'Volkswagen')
    expect(getMake({ name: 'škoda' }), 'to be', 'Škoda')
    expect(getMake({ name: 'ŠKODA' }), 'to be', 'Škoda')
    expect(getMake({ name: 'Škoda' }), 'to be', 'Škoda')
    expect(getMake({ name: ' škoda something' }), 'to be', 'Škoda')
    expect(getMake({ name: 'skoda' }), 'to be', 'Škoda')
    expect(getMake({ name: 'SKODA' }), 'to be', 'Škoda')
    expect(getMake({ name: 'Skoda' }), 'to be', 'Škoda')
    expect(getMake({ name: ' skoda something' }), 'to be', 'Škoda')
    expect(getMake({ name: 'audi' }), 'to be', 'Audi')
    expect(getMake({ name: 'AUDI' }), 'to be', 'Audi')
    expect(getMake({ name: 'Audi' }), 'to be', 'Audi')
    expect(getMake({ name: ' audi something' }), 'to be', 'Audi')
    expect(getMake({ name: 'seat' }), 'to be', 'SEAT')
    expect(getMake({ name: 'SEAT' }), 'to be', 'SEAT')
    expect(getMake({ name: 'Seat' }), 'to be', 'SEAT')
    expect(getMake({ name: ' seat something' }), 'to be', 'SEAT')
    expect(getMake({ vin: 'WVWZZZAAZFD123456', name: 'Audi' }), 'to be', 'Volkswagen')
    expect(getMake({ vin: 'TMBJE73T3E9123456', name: 'Audi' }), 'to be', 'Škoda')
    expect(getMake({ vin: 'WAUZZZ8V1H1123456', name: 'Volkswagen' }), 'to be', 'Audi')
    expect(getMake({ vin: 'VSSZZZ5FZGR123456', name: 'Audi' }), 'to be', 'SEAT')
    expect(getMake({ vin: 'VSSbogus', name: 'Audi' }), 'to be', 'Audi')
    expect(getMake({ vin: 'AAAUNKNOWNMAKEAAA' }), 'to be null')
    expect(getMake({ vin: 'VSS-invalid-vin' }), 'to be null')
    expect(getMake({ name: 'bogus' }), 'to be null')
    expect(getMake({}), 'to be null')
  })

  it('runs getEngineSize', () => {
    expect(getEngineSize({ name: '1.0' }), 'to be', '1.0')
    expect(getEngineSize({ name: '1,2' }), 'to be', '1.2')
    expect(getEngineSize({ name: '1.4TSI' }), 'to be', '1.4')
    expect(getEngineSize({ name: 'Golf 1.6 TDI' }), 'to be', '1.6')
    expect(getEngineSize({ name: 'Audi A4 2.0 TFSI' }), 'to be', '2.0')
    expect(getEngineSize({ name: 'a6.5b' }), 'to be', '6.5')
    expect(getEngineSize({ name: '3.00' }), 'to be null')
    expect(getEngineSize({ name: '10.1' }), 'to be null')
    expect(getEngineSize({ name: 'bogus' }), 'to be null')
    expect(getEngineSize({}), 'to be null')
  })

  it('runs getFuelType', () => {
    expect(getFuelType({ name: 'Passat Var HL 2,0TSI 280HK DSG6 4M BMT' }), 'to be', 'Gasoline')
    expect(getFuelType({ name: 'Tiguan CL 2,0TDI 150HK DSG7 BMT SCR' }), 'to be', 'Diesel')
    expect(getFuelType({ name: 'tiguan cl 2,0tdi 150hk dsg7 bmt scr' }), 'to be', 'Diesel')
    expect(getFuelType({ name: 'Audi A3 Cab Sport 1,4 TFSI 150 HK' }), 'to be', 'Gasoline')
    expect(getFuelType({ name: 'high up! 1,0MPI 75HK 5G BMT 55kW' }), 'to be', 'Gasoline')
    expect(getFuelType({ name: 'HIGH UP 1,0MPI 75HK 5G BMT 55kW' }), 'to be', 'Gasoline')
    expect(getFuelType({ name: 'VW move up! 1,0 60HK 5G' }), 'to be', 'Gasoline')
    expect(getFuelType({ name: 'VW PASSAT L COMF 2,0L FSI 150 HK 110KW 6G' }), 'to be', 'Gasoline')
    expect(getFuelType({ name: 'VW Golf Limo GTE 1,4TSI 204HK Hybrid DSG6' }), 'to be', 'Hybrid')
    expect(getFuelType({ name: 'Audi A3 e-tron Sport 1,4 TFSI 150 HK' }), 'to be', 'Hybrid')
    expect(getFuelType({ name: 'Audi A8 2.0 TFSI Hybrid 4dr Tip Auto' }), 'to be', 'Hybrid')
    expect(getFuelType({ name: 'Audi e-tron 55 quattro' }), 'to be', 'Electric')
    expect(getFuelType({ name: 'VW e-Golf 115HK 85kW 1AUT' }), 'to be', 'Electric')
    expect(getFuelType({ name: 'VW E-UP! 82HK AUT1 60KW' }), 'to be', 'Electric')
    expect(getFuelType({ name: 'vw e-up 82hk aut1 60kw' }), 'to be', 'Electric')
    expect(getFuelType({ name: 'e-golf' }), 'to be', 'Electric')
    expect(getFuelType({ vin: 'VSSAAAAAAAA123456', name: 'mii' }), 'to be', 'Gasoline')
    expect(getFuelType({ vin: 'TMBAAAAAAAA123456', name: 'citigo' }), 'to be', 'Gasoline')
    expect(getFuelType({ vin: 'WVWAAAAAAAA123456', name: 'up!' }), 'to be', 'Gasoline')
    expect(getFuelType({ name: 'e-upper' }), 'to be null')
    expect(getFuelType({ name: 'bogus' }), 'to be null')
    expect(getFuelType({}), 'to be null')
  })

  it('runs getYear', () => {
    // ABCDEFGHJKLMNPRSTVWXY1-9
    expect(getYear({ vin: 'WVWZZZAAZAD123456' }), 'to be', 2010)
    expect(getYear({ vin: 'WVWZZZAAZBD123456' }), 'to be', 2011)
    expect(getYear({ vin: 'WVWZZZAAZCD123456' }), 'to be', 2012)
    expect(getYear({ vin: 'WVWZZZAAZDD123456' }), 'to be', 2013)
    expect(getYear({ vin: 'WVWZZZAAZED123456' }), 'to be', 2014)
    expect(getYear({ vin: 'WVWZZZAAZFD123456' }), 'to be', 2015)
    expect(getYear({ vin: 'WVWZZZAAZGD123456' }), 'to be', 2016)
    expect(getYear({ vin: 'WVWZZZAAZHD123456' }), 'to be', 2017)
    expect(getYear({ vin: 'WVWZZZAAZID123456' }), 'to be null')
    expect(getYear({ vin: 'WVWZZZAAZJD123456' }), 'to be', 2018)
    expect(getYear({ vin: 'WVWZZZAAZKD123456' }), 'to be', 2019)
    expect(getYear({ vin: 'WVWZZZAAZLD123456' }), 'to be', 2020)
    expect(getYear({ vin: 'WVWZZZAAZMD123456' }), 'to be', 2021)
    expect(getYear({ vin: 'WVWZZZAAZND123456' }), 'to be', 2022)
    expect(getYear({ vin: 'WVWZZZAAZOD123456' }), 'to be null')
    expect(getYear({ vin: 'WVWZZZAAZPD123456' }), 'to be', 2023)
    expect(getYear({ vin: 'WVWZZZAAZQD123456' }), 'to be null')
    expect(getYear({ vin: 'WVWZZZAAZRD123456' }), 'to be', 2024)
    expect(getYear({ vin: 'WVWZZZAAZSD123456' }), 'to be', 2025)
    expect(getYear({ vin: 'WVWZZZAAZTD123456' }), 'to be', 2026)
    expect(getYear({ vin: 'WVWZZZAAZUD123456' }), 'to be null')
    expect(getYear({ vin: 'WVWZZZAAZVD123456' }), 'to be', 2027)
    expect(getYear({ vin: 'WVWZZZAAZWD123456' }), 'to be', 2028)
    expect(getYear({ vin: 'WVWZZZAAZXD123456' }), 'to be', 2029)
    expect(getYear({ vin: 'WVWZZZAAZYD123456' }), 'to be', 2030)
    expect(getYear({ vin: 'WVWZZZAAZZD123456' }), 'to be null')
    expect(getYear({ vin: 'WVWZZZAAZ0D123456' }), 'to be null')
    expect(getYear({ vin: 'WVWZZZAAZ1D123456' }), 'to be', 2031)
    expect(getYear({ vin: 'WVWZZZAAZ2D123456' }), 'to be', 2032)
    expect(getYear({ vin: 'WVWZZZAAZ3D123456' }), 'to be', 2033)
    expect(getYear({ vin: 'WVWZZZAAZ4D123456' }), 'to be', 2034)
    expect(getYear({ vin: 'WVWZZZAAZ5D123456' }), 'to be', 2035)
    expect(getYear({ vin: 'WVWZZZAAZ6D123456' }), 'to be', 2036)
    expect(getYear({ vin: 'WVWZZZAAZ7D123456' }), 'to be', 2037)
    expect(getYear({ vin: 'WVWZZZAAZ8D123456' }), 'to be', 2038)
    expect(getYear({ vin: 'WVWZZZAAZ9D123456' }), 'to be', 2039)
    expect(getYear({ vin: 'AAAAAAAAAaAAAAAAA' }), 'to be null') //make is null
    expect(getYear({ vin: 'AAAAAAAAA0AAAAAAA' }), 'to be null')
    expect(getYear({ vin: 'VSS-invalid-vin' }), 'to be null')
    expect(getYear({ vin: 'bogus' }), 'to be null')
    expect(getYear({}), 'to be null')
  })
})
