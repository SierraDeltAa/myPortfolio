import React from "react";
import imgUrl from "../assets/img/ProfilPic.png"

export default function ProfilePic(){
    return(
        <div>
            <img className="mx-auto w-8/12 md:w-4/12 xl:w-3/12 rounded" id="home" src={imgUrl} />
        </div>
    )
}