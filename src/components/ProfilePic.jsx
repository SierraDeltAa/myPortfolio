import React from "react";
import leftImg from "url:../assets/img/leftPic.png"
import rightImg from "url:../assets/img/rightPic.png"
import Slide from 'react-reveal/Slide';


export default function ProfilePic(){
    return(
        <div className="flex flex-row justify-center">
            <Slide left>
                <div>
                    <img className="mx-auto" id="home" src={leftImg} />
                </div>
            </Slide>
            <Slide right>
                <div className="mr-0.5">
                    <img className="mx-auto " id="home" src={rightImg} />
                </div>
            </Slide>

        </div>
    )
}