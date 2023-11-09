import React from "react";
import { NavBar } from "components/_ui/nav/NavBar";
import { Hero } from "components/home/hero/Hero";
import { Information } from "components/home/information/Information";
import { News } from "./news/News";

export const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Information />
            <News />
        </>
    )
}