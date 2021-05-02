import React from "react";
import icon from "../assets/img/realisationsIcon.svg"
import Image from "../components/Image"
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
                <Project title="Calculator" text="Une calculatrice réalisée avec ReactJs" date="05/04" repo="https://github.com/SierraDeltAa/calculator" finished={true} link="https://sierradeltaa.github.io/calculator/">
                    <Image link={html} />
                    <Image link={css} />
                    <Image link={reactjs} />
                </Project>
                <Project title="Todo list" text="Une todolist réalisée avec ReactJs" date="12/04" repo="https://github.com/SierraDeltAa/todoListReact" finished={true} link="https://sierradeltaa.github.io/todoListReact/">
                    <Image link={html} />
                    <Image link={css} />
                    <Image link={reactjs} />
                </Project>
                <Project title="Covid stats" text="Une interface recensant les stats de la COVID-19" date="28/03" repo="https://github.com/SierraDeltAa/CovidInfos" finished={true} link="https://covid-stats-france.herokuapp.com/">
                    <Image link={html} />
                    <Image link={css} />
                    <Image link={nodejs} />
                </Project>
                <Project title="Butcher Manager" text="Une application de gestion de stocks et produits d'une boucherie/traiteur">
                    <Image link={html} />
                    <Image link={css} />
                    <Image link={php} />
                    <Image link={javascript} />
                    <Image link={mysql} />
                </Project>
                <Project title="Secret Cloud" text="Une application d'upload et download de fichiers">
                    <Image link={html} />
                    <Image link={css} />
                    <Image link={nodejs} />
                    <Image link={mongodb} />
                    <Image link={javascript} />
                </Project>
            </div>
            <Separation link="contact" />
        </div>
    )
}