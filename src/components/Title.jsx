import React from "react";

export default function Title(props){
    return(
        <div>
            {props.download ? <div className="mt-9 ml-4 lg:text-yellow-400 lg:mx-4 md:text-center">
            <a className="text-2xl md:text-3xl lg:text-2xl underline-custom blue-to-red font-semibold" download={props.download} href={props.link}>
                {props.children}
            </a>
        </div> : <div className="mt-9 ml-4 lg:text-yellow-400 lg:mx-4 md:text-center">
                <a className="text-2xl md:text-3xl lg:text-2xl underline-custom blue-to-red font-semibold" href={props.link}>
                    {props.children}
                </a>
            </div>}
        </div>
        
    )
}