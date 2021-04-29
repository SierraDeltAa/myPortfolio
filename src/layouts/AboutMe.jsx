import React from "react";
import ChapterTitle from "../components/ChapterTitle"
import AboutMeText from "../components/AboutMeText"
import Separation from "../components/Separation"
import icon from "../assets/img/aboutMeIcon.svg"

export default function AboutMe(){
    return(
        <div className="w-10/12 mx-auto my-28">
            <ChapterTitle img={icon}>À propos</ChapterTitle>
            <AboutMeText />
            <Separation link="realisations"/>
        </div>
    )
}