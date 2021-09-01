import React from "react";
import ChapterTitle from "../components/ChapterTitle"
import Project from "../components/Project"
import Separation from "../components/Separation"
import icon from "url:../assets/img/realisationsIcon.svg"
import {projects} from "../data/projects"

export default function Realisations(){
    return(
        <div className="w-10/12 mx-auto my-28">
            <ChapterTitle img={icon}>Réalisations</ChapterTitle>
            <div className="w-10/12 flex flex-wrap justify-around mx-auto my-20">

                {projects.map((project)=>{
                    return (
                        <Project key={project.id} title={project.title} text={project.text} finished={project.finished} repo={project.repo} link={project.link}>{project.image}</Project>
                    )
                })}

            </div>
            <Separation link="contact" />
        </div>
    )
}