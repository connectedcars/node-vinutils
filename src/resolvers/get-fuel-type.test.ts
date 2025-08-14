import { FuelType } from '../constants/fuel-type'
import { getFuelType } from './get-fuel-type'

describe('get-fuel-type', () => {
  describe('getFuelType', () => {
    it.each([
      { name: 'VW Touran CL 1,4TSI 150HK DSG7 BMT 110kW', result: FuelType.GASOLINE },
      { name: 'Audi A3 SB PRE 40 TFSI e 204 HK S tro', result: FuelType.HYBRID },
      { name: 'Audi A6 Limo Sport PRE 50 TFSI e qua 299 HK S', result: FuelType.HYBRID },
      { name: 'Audi A6 Avant 55 TFSI e 367 hk quattro S tronic S line', result: FuelType.HYBRID },
      { name: 'AUDI A6 AVANT 3,0 TDI 204 HK 150 KW 8 TRINS M', result: FuelType.DIESEL },
      { name: 'AUDI A6 ALLROAD 3,0 TFSI 333 HK 245 KW QUATTR', result: FuelType.GASOLINE },
      { name: 'VW ID.3 1st Max 204HK AUT1 Performance', result: FuelType.ELECTRIC },
      { name: 'VW Golf Life 1,5eTSI 150HK DSG7 Mild hybrid', result: FuelType.GASOLINE },
      { name: 'VW Golf Style eHybrid 1,4TSI 204HK DSG6', result: FuelType.HYBRID },
      { name: 'SEAT Ny Leon 5D e-HYB 1,4 TSI 204 HK e-HYBRID', result: FuelType.HYBRID },
      { name: 'VW Passat Var GTE Hybrid 1,4TSI 218HK DSG6', result: FuelType.HYBRID },
      { name: 'SEAT Ny Leon SP Xcellence 1,5 eTSI 150 HK DSG', result: FuelType.GASOLINE },
      { name: 'SKODA OCTAVIA A8 COMBI Style 1ED 1,0 eTSI 110', result: FuelType.GASOLINE },
      { name: 'SKODA OCTAVIA A8 COUPÉ iV 1,4 TSI 204 hk DSG', result: FuelType.HYBRID },
      { name: 'Audi Q7 e-tron 3,0 TDI qua 258 HK tip', result: FuelType.HYBRID_DIESEL },
      { name: 'Audi Q7 SUV e-tron 3,0 TDI 374 hk 275 kW E-tr', result: FuelType.HYBRID_DIESEL },
      { name: 'Audi Q7 SUV TdI 3,0 E-tRoN 374 hk 275 kW E-tr', result: FuelType.HYBRID_DIESEL },
      { name: 'VW ID.4 1st 204HK AUT1 Performance', result: FuelType.ELECTRIC },
      { name: 'VW ID.7 1st 204HK AUT1 Performance', result: FuelType.ELECTRIC },
      { name: 'VW e-Crafter L3 Kassevogn EL 136HK AUT1G', result: FuelType.ELECTRIC },
      { name: 'Volkswagen Caddy Panel Van 2.0 TDI BlueMotion DSG Sequential', result: FuelType.ELECTRIC },
      { name: 'SEAT CUPRA Tavascan VZ adrena EL 340 HK 4x4 A', result: FuelType.ELECTRIC },
      { name: 'ABT T6.1 e-Transporter 113hk,DSG,3400mm', result: FuelType.ELECTRIC },
      { name: 'SEAT CUPRA Born Pasión EL 231 HK AUT1', result: FuelType.ELECTRIC },
      { name: 'AUDI A6 ALLROAD 3,0 TFSIe 333 HK 245 KW QUATTR', result: FuelType.HYBRID },
      { name: 'SKODA ENYAQ 60 Plus EL 179 hk AUT', result: FuelType.ELECTRIC },
      { vin: 'WVWZZZZZZAZ000000', name: 'gte', result: FuelType.HYBRID },
      { name: 'tgi', result: FuelType.NATURAL_GAS },
      // Uses fuel type and prioritizes it over name
      { name: 'VW Touran CL 1,4 150HK DSG7 BMT 110kW', fuelType: 'Gasoline', result: FuelType.GASOLINE },
      { name: 'VW Touran CL 1,4 150HK DSG7 BMT 110kW', fuelType: 'benzin', result: FuelType.GASOLINE },
      { name: 'VW Touran CL 1,4TSI 150HK DSG7 BMT 110kW', fuelType: 'Diesel', result: FuelType.DIESEL },
      { name: 'VW Touran CL 1,4 150HK DSG7 BMT 110kW', fuelType: 'Electric', result: FuelType.ELECTRIC },
      { name: 'VW Touran CL 1,4 150HK DSG7 BMT 110kW', fuelType: 'hybrid', result: FuelType.HYBRID },
      { name: 'VW Touran CL 1,4 150HK DSG7 BMT 110kW', fuelType: 'hybrid_diesel', result: FuelType.HYBRID_DIESEL },
      { name: 'VW Touran CL 1,4 150HK DSG7 BMT 110kW', fuelType: 'Hybrid Diesel', result: FuelType.HYBRID_DIESEL },
      { name: 'VW Touran CL 1,4 150HK DSG7 BMT 110kW', fuelType: 'HybridDiesel', result: FuelType.HYBRID_DIESEL },
      { name: 'VW Touran CL 1,4 150HK DSG7 BMT 110kW', fuelType: 'natural_gas', result: FuelType.NATURAL_GAS },
      { name: 'VW Touran CL 1,4 150HK DSG7 BMT 110kW', fuelType: 'Natural Gas', result: FuelType.NATURAL_GAS },
      { name: 'VW Touran CL 1,4 150HK DSG7 BMT 110kW', fuelType: 'naturalgas', result: FuelType.NATURAL_GAS },
      { name: 'VW Touran CL 1,4 150HK DSG7 BMT 110kW', fuelType: 'Hydrogen', result: FuelType.HYDROGEN }
    ])('resolves fuel type for "$vin" "$name" ($fuelType)', ({ vin, name, fuelType, result }) => {
      expect(getFuelType({ vin, name, fuelType })).toEqual(result)
    })
  })
})
