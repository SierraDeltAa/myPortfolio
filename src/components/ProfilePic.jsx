import React from "react";
import imgUrl from "url:../assets/img/ProfilPic.png"

export default function ProfilePic(){
    return(
        <div className="">
                <img className="mx-auto w-60 rounded-full " id="home" src={imgUrl} />
        </div>
    )
}