import React from "react";
import { Hero } from "./Hero";

import { render, screen } from "@testing-library/react";

describe('Hero component', () => {
    it("should be rendering correctly", () => {
        render (<Hero/>);

        
    })
})