import React from "react"
import ChapterTitle from "../components/ChapterTitle"
import ReactContactForm from 'react-mail-form';
import icon from "url:../assets/img/contactIcon.svg"
import mail from "url:../assets/img/mail.svg"
import github from "url:../assets/img/github.svg"
import linkedin from "url:../assets/img/linkedin.svg"
import Fade from "react-reveal/Fade"

export default function Contact(){
    return(
            <div className="w-10/12 mx-auto my-28">
                <ChapterTitle img={icon}>Contact</ChapterTitle>
                <div className="w-10/12 flex flex-col mx-auto my-20">
                    <Fade>
                        <ReactContactForm className="flex flex-col w-60 mx-auto" titlePlaceholder={"Objet..."} contentsPlaceholder={'Message...'} titleMaxLength="100" contentsMaxLength="500" to="denil.merad@gmail.com" buttonText={<div className=" transition duration-300 hover:text-yellow-300 text-gray-500 py-3"><span className="flex flex-row justify-center mr-2 font-light"><img src={mail} className="mr-2"/>Envoyer un message</span></div>} />
                    </Fade>
                </div>
                <div className="flex flex-row mx-auto w-60 justify-between ">
                    <Fade bottom>
                        <a href="https://github.com/SierraDeltAa/" className="text-gray-500 flex flex-row p-2 transition duration-300 hover:text-gray-200" target="_blank"><img src={github} width="30px"/><p className="mt-1 ml-2 text-sm">Github</p> </a>
                        <a href="https://www.linkedin.com/in/denil-merad-180b5b1b6/" className="text-gray-500 flex flex-row p-2 transition duration-300 hover:text-gray-200" target="_blank"><img src={linkedin} width="30px"/><p className="mt-1 ml-2 text-sm">Linkedin</p></a>
                    </Fade>
                </div>
            </div>
    )
}