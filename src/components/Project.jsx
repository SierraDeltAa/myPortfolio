import React from "react"
import github from "url:../assets/img/github.svg"
import Zoom from "react-reveal/Zoom"


export default function Project(props){
    return(
        <Zoom>
            <div className=" rounded-md w-48 md:w-72 flex-column text-gray-200 custom-shadow my-12 lg:my-4 p-4">
                <div className="flex flex-row justify-between w-10/12 mx-auto my-4">
                    <div className="font-bold text-base lg:text-lg">
                        <p>{props.title} </p>
                    </div>
                    <div className="font-thin text-xs lg:text-sm">
                        <p>{props.date} </p>
                    </div>
                </div>
                <hr className="border-gray-400 w-40 xl:w-60 mx-auto"/>
                <div className="my-6 mx-auto w-10/12 text-xs lg:text-sm ">
                    <p>
                        {props.text}
                    </p>
                </div>
                <div className="w-10/12 mx-auto my-6 flex flex-row flex-wrap">
                    {props.children}
                </div>
                <hr className="border-gray-400 w-40 xl:w-60 mx-auto"/>
                {props.finished === true ? <div className="w-10/12 mx-auto my-4 flex flex-row justify-between">
                    <div className="font-semibold transition duration-300 text-gray-500 hover:text-gray-200 mt-1 text-sm">
                        <a href={props.link} target="_blank" >Link</a>
                    </div>
                    <div>
                        <a href={props.repo} target="_blank" className="flex flex-row text-sm"><img src={github} width="30px"/></a>
                    </div>
                </div> : <div className="font-semibold text-gray-200 text-center">
                        <h2 className="mt-4 text-sm">Prochainement ... </h2>
                    </div>}
            </div>
        </Zoom>
    )
}