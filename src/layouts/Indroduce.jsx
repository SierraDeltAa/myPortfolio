import React from "react";
import ProfilePic from "../components/ProfilePic"
import IntroduceText from "../components/IntroduceText"
import Separation from "../components/Separation"

export default function Introduce(){
    return(
        <div className="flex flex-col w-10/12 mx-auto my-28">
            <ProfilePic />
            <IntroduceText />
            <Separation link="aboutMe"/>
        </div>
    )
}