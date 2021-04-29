import React from "react";

export default function Title(props){
    return(
        <div className="mt-9 ml-4 lg:text-yellow-400 lg:mx-4 md:text-center">
            <a className="text-2xl md:text-3xl lg:text-2xl underline-custom blue-to-red font-semibold" href={props.link}>
                {props.children}
            </a>
        </div>
    )
}