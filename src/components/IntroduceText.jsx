import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import TypeText from 'react-typing-text'
import Typewriter from 'typewriter-effect';

export default function IntroduceText(){


    return(
        <div className="mx-auto my-16 w-10/12">
            <div className="text-gray-200 font-bold text-center text-lg lg:text-2xl">
                <ReactTypingEffect typingDelay="500" eraseDelay="1000" eraseSpeed="80" speed="60" text={["Bonjour à tous","Je suis Denil Merad","Bienvenue dans mon portfolio","Hello everyone","I am Denil Merad", "Welcome to my portfolio"]} />
            </div>
        </div>
    )
}