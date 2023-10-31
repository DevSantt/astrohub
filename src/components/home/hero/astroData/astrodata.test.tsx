import { formatValue } from "./AstroData";

describe("AstroData component", () => {
    it('should formating correctly', () =>{
        expect(formatValue(1000)).toBe("1.000")
    })
})