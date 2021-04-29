import React from "react";
import icon from "../assets/img/realisationsIcon.svg"
import ChapterTitle from "../components/ChapterTitle"
import Project from "../components/Project"
import Separation from "../components/Separation"
import html from "../assets/img/languages/html.svg"
import css from "../assets/img/languages/css.svg"
import javascript from "../assets/img/languages/javascript.svg"
import php from "../assets/img/languages/php.svg"
import reactjs from "../assets/img/languages/react.svg"
import mongodb from "../assets/img/languages/mongodb.svg"
import nodejs from "../assets/img/languages/nodejs.svg"
import mysql from "../assets/img/languages/mysql.svg"

export default function Realisations(){
    return(
        <div className="w-10/12 mx-auto my-28">
            <ChapterTitle img={icon}>Réalisations</ChapterTitle>
            <div className="w-10/12 flex flex-wrap justify-around mx-auto my-20">
                <Project title="secretCloud" date="10/02">doijeofij</Project>
                <Project title="secretCloud" date="10/02">doijeofij</Project>
                <Project title="secretCloud" date="10/02">doijeofij</Project>
                <Project title="secretCloud" date="10/02">doijeofij</Project>
            </div>
            <Separation link="contact" />
        </div>
    )
}