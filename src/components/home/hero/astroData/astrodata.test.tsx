import { SolarSystemData, formatValue } from "./AstroData";

import { http } from 'msw' 
import { setupServer } from 'msw/node';


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