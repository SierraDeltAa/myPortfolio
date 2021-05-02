import React, {useState} from "react"

export default function Image(props){

    return(
        <div>
            <img src={props.link} className="m-2" width="30px" alt=""/>
        </div>
    )
    
}