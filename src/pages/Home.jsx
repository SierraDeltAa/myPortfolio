import React from "react"
import Header from "../layouts/Header"
import Introduce from "../layouts/Indroduce"
import AboutMe from "../layouts/AboutMe"
import Realisations from "../layouts/Realisations"
import Contact from "../layouts/Contact"


export default function Home(){
    return(
        <div>
            <Header />
            <Introduce />
            <AboutMe />
            <Realisations />
            <Contact />
        </div>
    )
}