import { SolarSystemData, formatValue } from "components/home/solarSystem/SolarSystemData"

import { render, screen } from '@testing-library/react'


describe("AstroData component", () => {
    const handlers = [
        
    ]


    it('should formating correctly', () =>{
        expect(formatValue(1000)).toBe("1.000")
    })

    it('should render with api request', () => {
        render(<SolarSystemData/>);

        screen.getByTitle('main')
    }
)
})