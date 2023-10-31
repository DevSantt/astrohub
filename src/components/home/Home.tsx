import React from "react";
import { NavBar } from "components/_ui/nav/NavBar";
import { Hero } from "components/home/hero/Hero";
import { About } from "components/home/about/About";

export const Home = () => {
    return(
        <main>
        <NavBar/>
        <Hero/>
        <About/>
        </main>
    )
}