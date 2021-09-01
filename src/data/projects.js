import React from "react"
import Project from "./classes/Project"
import Image from "../components/Image"

import html from "url:../assets/img/languages/html.svg"
import css from "url:../assets/img/languages/css.svg"
import javascript from "url:../assets/img/languages/javascript.svg"
import php from "url:../assets/img/languages/php.svg"
import reactjs from "url:../assets/img/languages/react.svg"
import mongodb from "url:../assets/img/languages/mongodb.svg"
import nodejs from "url:../assets/img/languages/nodejs.svg"
import mysql from "url:../assets/img/languages/mysql.svg"
import gdscript from "url:../assets/img/languages/gdscript.svg"
import wordpress from "url:../assets/img/languages/wordpress.svg"




const calculatorPictures = [<Image link={html}/>, <Image link={css}/>, <Image link={reactjs}/>]
const calculatorPicture = calculatorPictures.map((picture)=>{
    return(picture)})

const calculatorProject = new Project(0, "Calculator", "Une calculatrice réalisée avec ReactJs", "https://sierradeltaa.github.io/calculator/", "https://github.com/SierraDeltAa/calculator", true, calculatorPicture)

const todoListPictures = [<Image link={html}/>, <Image link={css}/>, <Image link={reactjs}/>]
const todoListPicture = todoListPictures.map((picture)=>{
    return(picture)})

const todoListProject = new Project(1, "Todo list", "Une todolist réalisée avec ReactJs", "https://sierradeltaa.github.io/todoListReact/", "https://github.com/SierraDeltAa/todoListReact", true,todoListPicture)

const covidApiPictures = [<Image link={html}/>, <Image link={css}/>, <Image link={nodejs}/>]
const covidApiPicture = covidApiPictures.map((picture)=>{
    return(picture)})

const covidProject = new Project(2, "Covid stats", "Une interface recensant les stats de la COVID-19", "https://covid-stats-france.herokuapp.com/", "https://github.com/SierraDeltAa/CovidInfos", true,covidApiPicture)

const skmsGameContestPictures = [<Image link={html}/>, <Image link={css}/>, <Image link={reactjs}/>, <Image link={javascript}/>]
const skmsGameContestPicture = skmsGameContestPictures.map((picture)=>{
    return(picture)})

const skmsGameContestProject = new Project(3, "S.K.M.S Game App", "Jeu-concours du dojo SKMS Academy", "https://sierradeltaa.github.io/skmsGameApp/", "https://github.com/SierraDeltAa/skmsGameApp", true, skmsGameContestPicture)

const butcherManagerPictures = [<Image link={html}/>, <Image link={css}/>, <Image link={php}/>, <Image link={javascript}/>, <Image link={mysql}/>]
const butcherManagerPicture = butcherManagerPictures.map((picture)=>{
    return(picture)})

const butcherManagerProject = new Project(4, "Butcher Manager", "Une application de gestion de stocks et produits d'une boucherie/traiteur","","",false, butcherManagerPicture)

const secretCloudPictures = [<Image link={html}/>, <Image link={css}/>, <Image link={mongodb}/>, <Image link={javascript}/>, <Image link={nodejs}/>]
const secretCloudPicture = secretCloudPictures.map((picture)=>{
    return(picture)})

const secretCloudProject = new Project(5, "Secret Cloud", "Une application d'upload et download de fichiers","","",false, secretCloudPicture)

const MnggalPictures = [<Image link={gdscript}/>]
const MnggalPicture = MnggalPictures.map((picture)=>{
    return(picture)})

const MnggalProject = new Project(6, "Mnggal Game", "Un platformer game réalisé avec GdScript (issu du moteur de jeu Godot)","","",false, MnggalPicture)





export const projects = [calculatorProject, todoListProject, covidProject, skmsGameContestProject, butcherManagerProject, secretCloudProject, MnggalProject];
