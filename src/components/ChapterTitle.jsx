import React from "react"

export default function ChapterTitle(props){
    return(
        <div className=" flex md:flex-row w-8/12 mx-auto my-12 justify-center">
            <div className="mr-2">
                <img src={props.img} />
            </div>
            <div className="text-yellow-400 mr-4 underline-custom text-xl font-light">
                {props.children}
            </div>
            
        </div>
    )
}