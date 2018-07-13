const expect = require('unexpected')
const { getMake, getModel, getEngineSize, getFuelType, getYear } = require('.')

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
    expect(
      getMake({ vin: 'WVWZZZAAZFD123456', name: 'Audi' }),
      'to be',
      'Volkswagen'
    )
    expect(
      getMake({ vin: 'TMBJE73T3E9123456', name: 'Audi' }),
      'to be',
      'Škoda'
    )
    expect(
      getMake({ vin: 'WAUZZZ8V1H1123456', name: 'Volkswagen' }),
      'to be',
      'Audi'
    )
    expect(getMake({ vin: 'VSSZZZ5FZGR123456', name: 'Audi' }), 'to be', 'SEAT')
    expect(getMake({ vin: 'VSSbogus', name: 'Audi' }), 'to be', 'Audi')
    expect(getMake({ vin: 'AAAUNKNOWNMAKEAAA' }), 'to be null')
    expect(getMake({ vin: 'VSS-invalid-vin' }), 'to be null')
    expect(getMake({ name: 'bogus' }), 'to be null')
    expect(getMake({}), 'to be null')
  })

  it('runs getModel', () => {
    expect(
      getModel({ name: 'VW Touran CL 1,4TSI 150HK DSG7 BMT 110kW' }),
      'to be',
      'Touran'
    )
    expect(getModel({ name: 'MOVE UP! 1,0MPI 60HK 5G BMT ' }), 'to be', 'up!')
    expect(
      getModel({ name: 'SKODA Octavia HB Style 1,4 TSI 150 HK DSG' }),
      'to be',
      'Octavia'
    )
    expect(
      getModel({ name: 'VW PASSAT VAR COMF. 1,6TDI 105HK 6G' }),
      'to be',
      'Passat'
    )
    expect(
      getModel({ name: 'VW POLO COMF 1,6TDI 90HK 5G BMT 66KW' }),
      'to be',
      'Polo'
    )
    expect(getModel({ name: 'VW move up 1,0MPI 60HK 5G BMT' }), 'to be', 'up!')
    expect(
      getModel({ name: 'TOLEDO STYLE 1,2 TSI 105HK 6 G' }),
      'to be',
      'Toledo'
    )
    expect(
      getModel({ name: 'SKODA Superb Combi Style 2,0 TDI 150 hk DSG' }),
      'to be',
      'Superb'
    )
    expect(getModel({ name: 'Tiguan' }), 'to be', 'Tiguan')
    expect(
      getModel({ name: 'VW Golf Var Allstar 1,4TSI 125HK 6G BMT' }),
      'to be',
      'Golf'
    )
    expect(getModel({ name: 'Golf ' }), 'to be', 'Golf')
    expect(
      getModel({ name: 'VW Sharan HL 2,0TDI 184hk DSG6 BMT SCR 135k' }),
      'to be',
      'Sharan'
    )
    expect(getModel({ name: 'a4' }), 'to be', 'A4')
    expect(getModel({ name: 'NotA4' }), 'to be null')
    expect(getModel({ name: 'Audi A3' }), 'to be', 'A3')
    expect(getModel({ name: 'Audi S3' }), 'to be', 'A3')
    expect(getModel({ name: 'Audi RS5' }), 'to be', 'A5')
    expect(getModel({ name: 'Audi Q7' }), 'to be', 'Q7')
    expect(getModel({ name: 'Audi SQ7' }), 'to be', 'Q7')
    expect(getModel({ name: 'up!' }), 'to be', 'up!')
    expect(getModel({ name: 'Volkswagen CC' }), 'to be', 'CC')
    expect(getModel({ name: 'Bogus CCS' }), 'to be null')
    expect(getModel({ name: 'bogus' }), 'to be null')
    expect(getModel({}), 'to be null')

    expect(
      getModel({
        vin: 'WV3ZZZ7JZJX025243',
        name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZJX025196',
        name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZJX025248',
        name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZJX025285',
        name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZJX025288',
        name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZJX025167',
        name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZJX024941',
        name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZJX025210',
        name: 'VW T6 DKLAD Lang Enkeltkabine 2,0 TDI'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV1ZZZ7JZGX007903',
        name: 'VW T6 Lang Enka 2,0TDI 102hk 5G'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZFX011455',
        name: 'VW T5 CHASSIS LANG 2,0 TDI 140 HK BMT 6G'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV1ZZZ7JZGX013128',
        name: 'VW T6 Kort Enka 2,0TDI 84hk 5G'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV1ZZZ2FZG7008327',
        name: 'VW Crafter 35 Enka 4325mm 2,0 TDI 136 hk'
      }),
      'to be',
      'Crafter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZGX017632',
        name: 'VW T6 Lang Enka 2,0TDI 102hk 5G'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV1ZZZ2FZG7008368',
        name: 'VW Crafter 35 Enka 4325mm 2,0 TDI 136 hk'
      }),
      'to be',
      'Crafter'
    )
    expect(
      getModel({
        vin: 'WV1ZZZ7JZGX017649',
        name: 'VW T6 Kort Enka 2,0TDI 84hk 5G'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZGX017668',
        name: 'VW T6 Lang Enka 2,0TDI 102hk 5G'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZFX020998',
        name: 'VW T5 CHASSIS LANG 2,0 TDI 140 HK BMT DSG7'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZFX021129',
        name: 'VW T5 CHASSIS LANG 2,0 TDI 140 HK BMT DSG7'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({
        vin: 'WV3ZZZ7JZGX017676',
        name: 'VW T6 Lang Enka 2,0TDI 102hk 5G'
      }),
      'to be',
      'Transporter'
    )
    expect(
      getModel({ vin: 'VF7YDDMFC11473862', name: 'Citroen Jumper' }),
      'to be',
      null
    )
    expect(
      getModel({ vin: 'WF0FXXTTFF9M76528', name: 'Ford Transit' }),
      'to be',
      null
    )
    expect(
      getModel({ vin: 'ZFA26300006159840', name: 'Fiat Doblo' }),
      'to be',
      null
    )
    expect(
      getModel({ vin: 'ZFA25000001989139', name: 'Fiat Ducato' }),
      'to be',
      null
    )
    expect(
      getModel({ vin: 'TYBFB83BD4DU19451', name: 'Mitsubishi Canter' }),
      'to be',
      null
    )
    expect(
      getModel({
        vin: 'WV1ZZZ2FZG7009218',
        name: 'VW Crafter 35 Enka 4325mm 2,0 TDI 136 hk'
      }),
      'to be',
      'Crafter'
    )
    expect(
      getModel({ vin: 'WF0FXXTTFF9M78256', name: 'Ford Transit' }),
      'to be',
      null
    )
    expect(
      getModel({ vin: 'VNVV2U4S151094656', name: 'Nissan NV400' }),
      'to be',
      null
    )
    expect(
      getModel({ vin: 'ZFA25000002A17538', name: 'Fiat Ducato' }),
      'to be',
      null
    )
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
    expect(
      getFuelType({ name: 'Passat Var HL 2,0TSI 280HK DSG6 4M BMT' }),
      'to be',
      'Gasoline'
    )
    expect(
      getFuelType({ name: 'Tiguan CL 2,0TDI 150HK DSG7 BMT SCR' }),
      'to be',
      'Diesel'
    )
    expect(
      getFuelType({ name: 'tiguan cl 2,0tdi 150hk dsg7 bmt scr' }),
      'to be',
      'Diesel'
    )
    expect(
      getFuelType({ name: 'Audi A3 Cab Sport 1,4 TFSI 150 HK' }),
      'to be',
      'Gasoline'
    )
    expect(
      getFuelType({ name: 'high up! 1,0MPI 75HK 5G BMT 55kW' }),
      'to be',
      'Gasoline'
    )
    expect(
      getFuelType({ name: 'HIGH UP 1,0MPI 75HK 5G BMT 55kW' }),
      'to be',
      'Gasoline'
    )
    expect(
      getFuelType({ name: 'VW move up! 1,0 60HK 5G' }),
      'to be',
      'Gasoline'
    )
    expect(
      getFuelType({ name: 'VW PASSAT L COMF 2,0L FSI 150 HK 110KW 6G' }),
      'to be',
      'Gasoline'
    )
    expect(
      getFuelType({ name: 'VW Golf Limo GTE 1,4TSI 204HK Hybrid DSG6' }),
      'to be',
      'Hybrid'
    )
    expect(
      getFuelType({ name: 'Audi A3 e-tron Sport 1,4 TFSI 150 HK' }),
      'to be',
      'Hybrid'
    )
    expect(
      getFuelType({ name: 'Audi A8 2.0 TFSI Hybrid 4dr Tip Auto' }),
      'to be',
      'Hybrid'
    )
    expect(
      getFuelType({ name: 'VW e-Golf 115HK 85kW 1AUT' }),
      'to be',
      'Electric'
    )
    expect(
      getFuelType({ name: 'VW E-UP! 82HK AUT1 60KW' }),
      'to be',
      'Electric'
    )
    expect(getFuelType({ name: 'vw e-up 82hk aut1 60kw' }), 'to be', 'Electric')
    expect(getFuelType({ name: 'e-golf' }), 'to be', 'Electric')
    expect(getFuelType({ name: 'mii' }), 'to be', 'Gasoline')
    expect(getFuelType({ name: 'citigo' }), 'to be', 'Gasoline')
    expect(getFuelType({ name: 'up!' }), 'to be', 'Gasoline')
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
    expect(getYear({ vin: 'AAAAAAAAAaAAAAAAA' }), 'to be', 2010)
    expect(getYear({ vin: 'AAAAAAAAA0AAAAAAA' }), 'to be null')
    expect(getYear({ vin: 'VSS-invalid-vin' }), 'to be null')
    expect(getYear({ vin: 'bogus' }), 'to be null')
    expect(getYear({}), 'to be null')
  })
})
