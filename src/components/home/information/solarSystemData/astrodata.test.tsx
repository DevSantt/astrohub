import { SolarSystemData, formatValue } from "components/home/information/solarSystemData/SolarSystemData"


describe("AstroData component", () => {
    const handlers = [
        
    ]


    it('should formating correctly', () =>{
        expect(formatValue(1000)).toBe("1.000")
    })

    it('should render with api request', () => {
    }
)
})