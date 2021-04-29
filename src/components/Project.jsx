import React from "react"
import github from "../assets/img/github.svg"


export default function Project(props){
    return(
        <div className=" rounded-md w-11/12 lg:w-5/12 flex-column text-gray-200 custom-shadow my-12 lg:my-4 p-4">
            <div className="flex flex-row justify-between w-10/12 mx-auto my-6">
                <div className="font-bold text-base lg:text-lg">
                    <p>{props.title} </p>
                </div>
                <div className="font-thin text-xs lg:text-sm">
                    <p>{props.date} </p>
                </div>
            </div>
            <div className="my-6 mx-auto w-10/12 text-xs lg:text-sm ">
                <p>
                    {props.children}
                </p>
            </div>
            <div className="w-10/12 mx-auto my-6 flex-row">
                {props.languages}
            </div>
            <div className="w-10/12 mx-auto my-4 flex flex-row justify-between">
                <div className="text-yellow-400 font-semibold">
                    <a href={props.link} >Website</a>
                </div>
                <div>
                    <a href={props.repo} ><img src={github} width="30px"/></a>
                </div>
            </div>
        </div>
    )
}