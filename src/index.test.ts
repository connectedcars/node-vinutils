import { FuelType, getEngineSize, getFuelType, getMake, getYear } from '.'
import { Make } from './constants/make'
import { Vehicle } from './types/vehicle-type'

describe('index', () => {
  it('runs getMake', () => {
    expect(getMake({ vin: 'ZARZZZAAZFD123456' })).toBe(Make.ALFA_ROMEO)
    expect(getMake({ vin: 'SCFZZZAAZFD123456' })).toBe(Make.ASTON_MARTIN)
    expect(getMake({ vin: 'AAVZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'LFVZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'LSVZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'MEXZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'VWVZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'WVGZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'WVWZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'WV1ZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN_COMMERCIAL_VEHICLES)
    expect(getMake({ vin: 'WV2ZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN_COMMERCIAL_VEHICLES)
    expect(getMake({ vin: 'WV3ZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN_COMMERCIAL_VEHICLES)
    expect(getMake({ vin: 'XW8ZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'YBWZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: '1VWZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: '2V4ZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: '2V8ZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: '3VWZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: '8AWZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: '9BWZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: '1V2ZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: '3VVZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'VW1ZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'VW2ZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'WV4ZZZAAZFD123456' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'TMBJE73T3E9123456' })).toBe(Make.SKODA)
    expect(getMake({ vin: 'TMPJE73T3E9123456' })).toBe(Make.SKODA)
    expect(getMake({ vin: 'TM9JE73T3E9123456' })).toBe(Make.SKODA)
    expect(getMake({ vin: 'TRUZZZ8V1H1123456' })).toBe(Make.AUDI)
    expect(getMake({ vin: 'WAUZZZ8V1H1123456' })).toBe(Make.AUDI)
    expect(getMake({ vin: 'WA1ZZZ8V1H1123456' })).toBe(Make.AUDI)
    expect(getMake({ vin: 'WUAZZZ4F3BN123456' })).toBe(Make.AUDI)
    expect(getMake({ vin: '93UZZZ8V1H1123456' })).toBe(Make.AUDI)
    expect(getMake({ vin: '93VZZZ8V1H1123456' })).toBe(Make.AUDI)
    expect(getMake({ vin: '99AZZZ8V1H1123456' })).toBe(Make.AUDI)
    expect(getMake({ vin: 'AAAZZZ8V1H1123456' })).toBe(Make.AUDI)
    expect(getMake({ vin: 'WBAZZZ8V1H1123456' })).toBe(Make.BMW)
    expect(getMake({ vin: 'WBSZZZ8V1H1123456' })).toBe(Make.BMW)
    expect(getMake({ vin: 'WBWZZZ8V1H1123456' })).toBe(Make.BMW)
    expect(getMake({ vin: 'WBYZZZ8V1H1123456' })).toBe(Make.BMW)
    expect(getMake({ vin: '4USZZZ8V1H1123456' })).toBe(Make.BMW)
    expect(getMake({ vin: 'SCBZZZ8V1H1123456' })).toBe(Make.BENTLEY)
    expect(getMake({ vin: 'VF9ZZZ8V1H1123456' })).toBe(Make.BUGATTI)
    expect(getMake({ vin: '1G4ZZZ8V1H1123456' })).toBe(Make.BUICK)
    expect(getMake({ vin: '2G4ZZZ8V1H1123456' })).toBe(Make.BUICK)
    expect(getMake({ vin: '1G6ZZZ8V1H1123456' })).toBe(Make.CADILLAC)
    expect(getMake({ vin: '1GYZZZ8V1H1123456' })).toBe(Make.CADILLAC)
    expect(getMake({ vin: 'VSSZZZ5FZGR123456' })).toBe(Make.SEAT)
    expect(getMake({ vin: 'MMMKF484J8C457238' })).toBe(Make.CHEVROLET)
    expect(getMake({ vin: '1GCKF484J8C457238' })).toBe(Make.CHEVROLET)
    expect(getMake({ vin: '1G1KF484J8C457238' })).toBe(Make.CHEVROLET)
    expect(getMake({ vin: '2G1KF484J8C457238' })).toBe(Make.CHEVROLET)
    expect(getMake({ vin: '8AGKF484J8C457238' })).toBe(Make.CHEVROLET)
    expect(getMake({ vin: '8GGKF484J8C457238' })).toBe(Make.CHEVROLET)
    expect(getMake({ vin: '9BGKF484J8C457238' })).toBe(Make.CHEVROLET)
    expect(getMake({ vin: '2GAKF484J8C457238' })).toBe(Make.CHEVROLET)
    expect(getMake({ vin: '1C3GHB4R2RU505409' })).toBe(Make.CHRYSLER)
    expect(getMake({ vin: '1C4GHB4R2RU505409' })).toBe(Make.CHRYSLER)
    expect(getMake({ vin: '1C6GHB4R2RU505409' })).toBe(Make.CHRYSLER)
    expect(getMake({ vin: '2A4GHB4R2RU505409' })).toBe(Make.CHRYSLER)
    expect(getMake({ vin: '2C3GHB4R2RU505409' })).toBe(Make.CHRYSLER)
    expect(getMake({ vin: '3C4GHB4R2RU505409' })).toBe(Make.CHRYSLER)
    expect(getMake({ vin: 'VF7YDDMFC11473862' })).toBe(Make.CITROEN)
    expect(getMake({ vin: 'VS7YDDMFC11473862' })).toBe(Make.CITROEN)
    expect(getMake({ vin: '935YDDMFC11473862' })).toBe(Make.CITROEN)
    expect(getMake({ vin: 'UU18SDPJ560466667' })).toBe(Make.DACIA)
    expect(getMake({ vin: 'XLR8SDPJ560466667' })).toBe(Make.DAF)
    expect(getMake({ vin: 'SUPJF356EXK301059' })).toBe(Make.DAEWOO)
    expect(getMake({ vin: 'UU6JF356EXK301059' })).toBe(Make.DAEWOO)
    expect(getMake({ vin: 'XWBJF356EXK301059' })).toBe(Make.DAEWOO)
    expect(getMake({ vin: 'KLAJF356EXK301059' })).toBe(Make.DAEWOO)
    expect(getMake({ vin: 'SCEJF356EXK301059' })).toBe(Make.DELOREAN)
    expect(getMake({ vin: 'JDA000G1100772829' })).toBe(Make.DAIHATSU)
    expect(getMake({ vin: '1B3GP44R8TB234273' })).toBe(Make.DODGE)
    expect(getMake({ vin: '1D3GP44R8TB234273' })).toBe(Make.DODGE)
    expect(getMake({ vin: '2B3GP44R8TB234273' })).toBe(Make.DODGE)
    expect(getMake({ vin: '2B7GP44R8TB234273' })).toBe(Make.DODGE)
    expect(getMake({ vin: '2D3GP44R8TB234273' })).toBe(Make.DODGE)
    expect(getMake({ vin: '3D3GP44R8TB234273' })).toBe(Make.DODGE)
    expect(getMake({ vin: '3D4GP44R8TB234273' })).toBe(Make.DODGE)
    expect(getMake({ vin: '2B5GP44R8TB234273' })).toBe(Make.DODGE)
    expect(getMake({ vin: 'WDWGP44R8TB234273' })).toBe(Make.DODGE)
    expect(getMake({ vin: 'WD8GP44R8TB234273' })).toBe(Make.DODGE)
    expect(getMake({ vin: 'WD0GP44R8TB234273' })).toBe(Make.DODGE)
    expect(getMake({ vin: 'ZDMGP44R8TB234273' })).toBe(Make.DUCATI)
    expect(getMake({ vin: 'ZDFXR48B000115391' })).toBe(Make.FERRARI)
    expect(getMake({ vin: 'ZFFXR48B000115391' })).toBe(Make.FERRARI)
    expect(getMake({ vin: 'MCA25000002479923' })).toBe(Make.FIAT)
    expect(getMake({ vin: 'SUF25000002479923' })).toBe(Make.FIAT)
    expect(getMake({ vin: 'ZFA25000002479923' })).toBe(Make.FIAT)
    expect(getMake({ vin: '2FA25000002479923' })).toBe(Make.FIAT)
    expect(getMake({ vin: '8AP25000002479923' })).toBe(Make.FIAT)
    expect(getMake({ vin: '9BD25000002479923' })).toBe(Make.FIAT)
    expect(getMake({ vin: 'AFAFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: 'LVSFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: 'MAJFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: 'MNBFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: 'NM0FXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: 'PE1FXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: 'SFAFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: 'VS6FXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: 'WF0FXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '1FAFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '1FBFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '1FCFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '1FDFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '1FMFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '1FTFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '1ZVFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '2FBFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '2FCFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '2FMFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '2FTFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '3FAFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '3FEFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '6FPFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '8AFFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '9BFFXXTTFF9M78256' })).toBe(Make.FORD)
    expect(getMake({ vin: '1FUFXXTTFF9M78256' })).toBe(Make.FREIGHTLINER)
    expect(getMake({ vin: '1FVFXXTTFF9M78256' })).toBe(Make.FREIGHTLINER)
    expect(getMake({ vin: '2FUFXXTTFF9M78256' })).toBe(Make.FREIGHTLINER)
    expect(getMake({ vin: '2FVFXXTTFF9M78256' })).toBe(Make.FREIGHTLINER)
    expect(getMake({ vin: 'LZEKBD470H6250508' })).toBe(Make.ISUZU)
    expect(getMake({ vin: 'MPAKBD470H6250508' })).toBe(Make.ISUZU)
    expect(getMake({ vin: 'MP1KBD470H6250508' })).toBe(Make.ISUZU)
    expect(getMake({ vin: 'NNAKBD470H6250508' })).toBe(Make.ISUZU)
    expect(getMake({ vin: 'JAAKBD470H6250508' })).toBe(Make.ISUZU)
    expect(getMake({ vin: 'WJMC35A3205853011' })).toBe(Make.IVECO)
    expect(getMake({ vin: 'ZCFC35A3205853011' })).toBe(Make.IVECO)
    expect(getMake({ vin: 'ZFCC35A3205820785' })).toBe(Make.IVECO)
    expect(getMake({ vin: 'MAKEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: 'MHREC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: 'MLHEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: 'MRHEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: 'NLAEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: 'SHHEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: 'SHSEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: '2HGEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: '2HKEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: '2HJEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: '93HEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: 'JHXEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: '1HHEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: '3HHEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: '5FHEC93200S102446' })).toBe(Make.HONDA)
    expect(getMake({ vin: 'AC5WVH7JP5Z056754' })).toBe(Make.HYUNDAI)
    expect(getMake({ vin: 'ADDWVH7JP5Z056754' })).toBe(Make.HYUNDAI)
    expect(getMake({ vin: 'MALWVH7JP5Z056754' })).toBe(Make.HYUNDAI)
    expect(getMake({ vin: 'NLHWVH7JP5Z056754' })).toBe(Make.HYUNDAI)
    expect(getMake({ vin: 'TMAWVH7JP5Z056754' })).toBe(Make.HYUNDAI)
    expect(getMake({ vin: 'X7MWVH7JP5Z056754' })).toBe(Make.HYUNDAI)
    expect(getMake({ vin: '2HMWVH7JP5Z056754' })).toBe(Make.HYUNDAI)
    expect(getMake({ vin: '5NPWVH7JP5Z056754' })).toBe(Make.HYUNDAI)
    expect(getMake({ vin: 'KMHWVH7JP5Z056754' })).toBe(Make.HYUNDAI)
    expect(getMake({ vin: 'TRAWVH7JP5Z056754' })).toBe(Make.IKARUS)
    expect(getMake({ vin: 'TSEWVH7JP5Z056754' })).toBe(Make.IKARUS)
    expect(getMake({ vin: 'KNEBA24328T521754' })).toBe(Make.KIA)
    expect(getMake({ vin: 'ZHWJ300200LL10025' })).toBe(Make.LAMBORGHINI)
    expect(getMake({ vin: 'SALLNABB8YA528024' })).toBe(Make.LAND_ROVER)
    expect(getMake({ vin: 'SARRTMLWRAD136172' })).toBe(Make.LAND_ROVER)
    expect(getMake({ vin: 'JMZDE135200111346' })).toBe(Make.MAZDA)
    expect(getMake({ vin: 'MBR2042021G139923' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'NLEZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'NMBZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'VSAZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'WDBZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'WDDZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'WDFZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'WMXZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'W1VZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: '4JGZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: '9BMZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: '8BRZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'W1ZZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'WDZZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: '8BTZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'W1WZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'WD4ZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: '8BUZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'W1YZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'WD3ZZZAAZFD123456' })).toBe(Make.MERCEDES_BENZ)
    expect(getMake({ vin: 'TYBFB83BD4DU19451' })).toBe(Make.MITSUBISHI)
    expect(getMake({ vin: 'MBHV2U4S151094656' })).toBe(Make.NISSAN)
    expect(getMake({ vin: 'MDHF4B1B8UY649146' })).toBe(Make.NISSAN)
    expect(getMake({ vin: 'MNTF4B1B8UY649146' })).toBe(Make.NISSAN)
    expect(getMake({ vin: 'SJNF4B1B8UY649146' })).toBe(Make.NISSAN)
    expect(getMake({ vin: 'VNVF4B1B8UY649146' })).toBe(Make.NISSAN)
    expect(getMake({ vin: 'VSKF4B1B8UY649146' })).toBe(Make.NISSAN)
    expect(getMake({ vin: 'VWAF4B1B8UY649146' })).toBe(Make.NISSAN)
    expect(getMake({ vin: '5N1F4B1B8UY649146' })).toBe(Make.NISSAN)
    expect(getMake({ vin: '6F4F4B1B8UY649146' })).toBe(Make.NISSAN)
    expect(getMake({ vin: '94DF4B1B8UY649146' })).toBe(Make.NISSAN)
    expect(getMake({ vin: '5BZF4B1B8UY649146' })).toBe(Make.NISSAN)
    expect(getMake({ vin: 'W0LGM8GS3F1021919' })).toBe(Make.OPEL)
    expect(getMake({ vin: 'VF3VBBHXHGZ041335' })).toBe(Make.PEUGEOT)
    expect(getMake({ vin: 'LPSVSEDEEML017784' })).toBe(Make.POLESTAR)
    expect(getMake({ vin: 'LPSVSEDEENL046573' })).toBe(Make.POLESTAR)
    expect(getMake({ vin: 'LPSVSEDEEPL069938' })).toBe(Make.POLESTAR)
    expect(getMake({ vin: 'YSMVSEDEEPL069938' })).toBe(Make.POLESTAR)
    expect(getMake({ vin: 'YSRVSEDEEPL069938' })).toBe(Make.POLESTAR)
    expect(getMake({ vin: 'YS3CD48U8T1002862' })).toBe(Make.SAAB)
    expect(getMake({ vin: 'YS2R4X20001263612' })).toBe(Make.SCANIA)
    expect(getMake({ vin: 'WME01MC01YH040937' })).toBe(Make.SMART)
    expect(getMake({ vin: 'W1A01MC01YH040937' })).toBe(Make.SMART)
    expect(getMake({ vin: 'HES01MC01YH040937' })).toBe(Make.SMART)
    expect(getMake({ vin: 'KPTE0B19STP097882' })).toBe(Make.SSANGYONG)
    expect(getMake({ vin: 'JSAERC31S00361851' })).toBe(Make.SUZUKI)
    expect(getMake({ vin: 'MA3GFC31S00457958' })).toBe(Make.SUZUKI)
    expect(getMake({ vin: 'SB153ABK00E102914' })).toBe(Make.TOYOTA)
    expect(getMake({ vin: 'YV2H2CEC4MA362596' })).toBe(Make.VOLVO)
    expect(getMake({ vin: 'LSGH2CEC4MA362596' })).toBe(Make.GENERAL_MOTORS)
    expect(getMake({ vin: 'MA6H2CEC4MA362596' })).toBe(Make.GENERAL_MOTORS)
    expect(getMake({ vin: 'MCBH2CEC4MA362596' })).toBe(Make.GENERAL_MOTORS)
    expect(getMake({ vin: 'XUFH2CEC4MA362596' })).toBe(Make.GENERAL_MOTORS)
    expect(getMake({ vin: '1GTH2CEC4MA362596' })).toBe(Make.GENERAL_MOTORS)
    expect(getMake({ vin: '2GxH2CEC4MA362596' })).toBe(Make.GENERAL_MOTORS)
    expect(getMake({ vin: '6G1H2CEC4MA362596' })).toBe(Make.GENERAL_MOTORS)
    expect(getMake({ vin: '6H8H2CEC4MA362596' })).toBe(Make.GENERAL_MOTORS)
    expect(getMake({ vin: '2G0H2CEC4MA362596' })).toBe(Make.GENERAL_MOTORS)
    expect(getMake({ vin: '2GJH2CEC4MA362596' })).toBe(Make.GENERAL_MOTORS)
    expect(getMake({ vin: '1GJH2CEC4MA362596' })).toBe(Make.GENERAL_MOTORS)
    expect(getMake({ vin: '3GJH2CEC4MA362596' })).toBe(Make.GENERAL_MOTORS)
    expect(getMake({ vin: '1P3H2CEC4MA362596' })).toBe(Make.PLYMOUTH)
    expect(getMake({ vin: '2P3H2CEC4MA362596' })).toBe(Make.PLYMOUTH)
    expect(getMake({ vin: '3P3H2CEC4MA362596' })).toBe(Make.PLYMOUTH)
    expect(getMake({ vin: '2P5H2CEC4MA362596' })).toBe(Make.PLYMOUTH)

    expect(getMake({ name: 'volkswagen' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ name: 'VOLKSWAGEN' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ name: 'Volkswagen' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ name: ' volkswagen something' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ name: 'vw' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ name: 'VW' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ name: 'Vw' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ name: ' vw something' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ name: 'škoda' })).toBe(Make.SKODA)
    expect(getMake({ name: 'ŠKODA' })).toBe(Make.SKODA)
    expect(getMake({ name: 'Škoda' })).toBe(Make.SKODA)
    expect(getMake({ name: ' škoda something' })).toBe(Make.SKODA)
    expect(getMake({ name: 'skoda' })).toBe(Make.SKODA)
    expect(getMake({ name: 'SKODA' })).toBe(Make.SKODA)
    expect(getMake({ name: 'Skoda' })).toBe(Make.SKODA)
    expect(getMake({ name: ' skoda something' })).toBe(Make.SKODA)
    expect(getMake({ name: 'audi' })).toBe(Make.AUDI)
    expect(getMake({ name: 'AUDI' })).toBe(Make.AUDI)
    expect(getMake({ name: 'Audi' })).toBe(Make.AUDI)
    expect(getMake({ name: ' audi something' })).toBe(Make.AUDI)
    expect(getMake({ name: 'seat' })).toBe(Make.SEAT)
    expect(getMake({ name: 'SEAT' })).toBe(Make.SEAT)
    expect(getMake({ name: 'Seat' })).toBe(Make.SEAT)
    expect(getMake({ name: ' seat something' })).toBe(Make.SEAT)
    expect(getMake({ name: 'SEAT car CUPRA' })).toBe(Make.SEAT)
    expect(getMake({ name: 'CUPRA Seat' })).toBe(Make.CUPRA)
    expect(getMake({ name: 'CUPRA something' })).toBe(Make.CUPRA)
    expect(getMake({ vin: 'WVWZZZAAZFD123456', name: 'Audi' })).toBe(Make.VOLKSWAGEN)
    expect(getMake({ vin: 'TMBJE73T3E9123456', name: 'Audi' })).toBe(Make.SKODA)
    expect(getMake({ vin: 'WAUZZZ8V1H1123456', name: 'Volkswagen' })).toBe(Make.AUDI)
    expect(getMake({ vin: 'VSSZZZ5FZGR123456', name: 'Audi' })).toBe(Make.SEAT)
    expect(getMake({ vin: 'VSSABC5FZGR123456', modelCode: 'K11B3C' })).toBe(Make.CUPRA)
    expect(getMake({ vin: 'VSSZZZKMZGR123456' })).toBe(Make.CUPRA)
    expect(getMake({ vin: 'VSSZZZK1ZGR123456' })).toBe(Make.CUPRA)
    expect(getMake({ vin: 'VSSABC5FZGR123456', modelCode: 'BOGUS' })).toBe(Make.SEAT)
    expect(getMake({ vin: 'VSSABC5FZGR123456' })).toBe(Make.SEAT)
    expect(getMake({ vin: 'VSSbogus', name: 'Audi' })).toBe(Make.AUDI)

    expect(getMake({ vin: 'AAAUNKNOWNMAKEAAA' })).toBeNull()
    expect(getMake({ vin: 'VSS-invalid-vin' })).toBeNull()
    expect(getMake({ name: 'bogus' })).toBeNull()
    expect(getMake({})).toBeNull()
  })

  it('runs getEngineSize', () => {
    expect(getEngineSize({ name: '1.0' })).toBe('1.0')
    expect(getEngineSize({ name: '1,2' })).toBe('1.2')
    expect(getEngineSize({ name: '1.4TSI' })).toBe('1.4')
    expect(getEngineSize({ name: 'Golf 1.6 TDI' })).toBe('1.6')
    expect(getEngineSize({ name: 'Audi A4 2.0 TFSI' })).toBe('2.0')
    expect(getEngineSize({ name: 'a6.5b' })).toBe('6.5')
    expect(getEngineSize({ name: '3.00' })).toBeNull()
    expect(getEngineSize({ name: '10.1' })).toBeNull()
    expect(getEngineSize({ name: 'bogus' })).toBeNull()
    expect(getEngineSize({})).toBeNull()
  })

  it('runs getFuelType', () => {
    const testCases: [Vehicle, FuelType | null][] = [
      [{ name: 'Passat Var HL 2,0TSI 280HK DSG6 4M BMT' }, FuelType.GASOLINE],
      [{ name: 'Tiguan CL 2,0TDI 150HK DSG7 BMT SCR' }, FuelType.DIESEL],
      [{ name: 'tiguan cl 2,0tdi 150hk dsg7 bmt scr' }, FuelType.DIESEL],
      [{ name: 'Audi A3 Cab Sport 1,4 TFSI 150 HK' }, FuelType.GASOLINE],
      [{ name: 'high up! 1,0MPI 75HK 5G BMT 55kW' }, FuelType.GASOLINE],
      [{ name: 'HIGH UP 1,0MPI 75HK 5G BMT 55kW' }, FuelType.GASOLINE],
      [{ name: 'VW move up! 1,0 60HK 5G' }, FuelType.GASOLINE],
      [{ name: 'VW PASSAT L COMF 2,0L FSI 150 HK 110KW 6G' }, FuelType.GASOLINE],
      [{ name: 'VW Golf Limo GTE 1,4TSI 204HK Hybrid DSG6' }, FuelType.HYBRID],
      [{ name: 'Audi A3 e-tron Sport 1,4 TFSI 150 HK' }, FuelType.HYBRID],
      [{ name: 'Audi A8 2.0 TFSI Hybrid 4dr Tip Auto' }, FuelType.HYBRID],
      [{ name: 'Audi e-tron 55 quattro' }, FuelType.ELECTRIC],
      [{ name: 'VW e-Golf 115HK 85kW 1AUT' }, FuelType.ELECTRIC],
      [{ name: 'VW E-UP! 82HK AUT1 60KW' }, FuelType.ELECTRIC],
      [{ name: 'vw e-up 82hk aut1 60kw' }, FuelType.ELECTRIC],
      [{ name: 'vw e-golf' }, FuelType.ELECTRIC],
      [{ vin: 'VSSAAAAAAAA123456', name: 'mii' }, FuelType.GASOLINE],
      [{ vin: 'TMBAAAAAAAA123456', name: 'citigo' }, FuelType.GASOLINE],
      [{ vin: 'WVWAAAAAAAA123456', name: 'up!' }, FuelType.GASOLINE],
      [{ name: 'e-upper' }, null],
      [{ name: 'bogus' }, null],
      [{}, null]
    ]

    for (const [vehicle, expectedResult] of testCases) {
      expect(getFuelType(vehicle)).toBe(expectedResult)
    }
  })

  it('runs getYear', () => {
    const testCases: [Vehicle, number | null][] = [
      [{ vin: 'WVWZZZAAZAD123456' }, 2010],
      [{ vin: 'WVWZZZAAZBD123456' }, 2011],
      [{ vin: 'WVWZZZAAZCD123456' }, 2012],
      [{ vin: 'WVWZZZAAZDD123456' }, 2013],
      [{ vin: 'WVWZZZAAZED123456' }, 2014],
      [{ vin: 'WVWZZZAAZFD123456' }, 2015],
      [{ vin: 'WVWZZZAAZGD123456' }, 2016],
      [{ vin: 'WVWZZZAAZHD123456' }, 2017],
      [{ vin: 'WVWZZZAAZID123456' }, null],
      [{ vin: 'WVWZZZAAZJD123456' }, 2018],
      [{ vin: 'WVWZZZAAZKD123456' }, 2019],
      [{ vin: 'WVWZZZAAZLD123456' }, 2020],
      [{ vin: 'WVWZZZAAZMD123456' }, 2021],
      [{ vin: 'WVWZZZAAZND123456' }, 2022],
      [{ vin: 'WVWZZZAAZOD123456' }, null],
      [{ vin: 'WVWZZZAAZPD123456' }, 2023],
      [{ vin: 'WVWZZZAAZQD123456' }, null],
      [{ vin: 'WVWZZZAAZRD123456' }, 2024],
      [{ vin: 'WVWZZZAAZSD123456' }, 2025],
      [{ vin: 'WVWZZZAAZTD123456' }, 2026],
      [{ vin: 'WVWZZZAAZUD123456' }, null],
      [{ vin: 'WVWZZZAAZVD123456' }, 2027],
      [{ vin: 'WVWZZZAAZWD123456' }, 2028],
      [{ vin: 'WVWZZZAAZXD123456' }, 2029],
      [{ vin: 'WVWZZZAAZYD123456' }, 2030],
      [{ vin: 'WVWZZZAAZZD123456' }, null],
      [{ vin: 'WVWZZZAAZ0D123456' }, null],
      [{ vin: 'WVWZZZAAZ1D123456' }, 2031],
      [{ vin: 'WVWZZZAAZ2D123456' }, 2032],
      [{ vin: 'WVWZZZAAZ3D123456' }, 2033],
      [{ vin: 'WVWZZZAAZ4D123456' }, 2034],
      [{ vin: 'WVWZZZAAZ5D123456' }, 2035],
      [{ vin: 'WVWZZZAAZ6D123456' }, 2036],
      [{ vin: 'WVWZZZAAZ7D123456' }, 2037],
      [{ vin: 'WVWZZZAAZ8D123456' }, 2038],
      [{ vin: 'WVWZZZAAZ9D123456' }, 2039],
      [{ vin: 'AAAAAAAAAaAAAAAAA' }, 2010],
      [{ vin: 'AAAAAAAAA0AAAAAAA' }, null],
      [{ vin: 'BBBBBBBBBbBBBBBBB' }, null],
      [{ vin: 'VSS-invalid-vin' }, null],
      [{ vin: 'bogus' }, null],
      [{}, null]
    ]

    for (const [vehicle, expectedResult] of testCases) {
      expect(getYear(vehicle)).toBe(expectedResult)
    }
  })
})
