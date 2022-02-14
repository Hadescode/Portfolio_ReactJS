import "./intro.scss";
import { init } from 'ityped';
import { useEffect } from "react";
import { useRef } from "react"

export default function Intro() {

    const textRef = useRef ();
    //su dung useEffect, useRef đê DOM function 
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed:60,
            strings: ['Fresher Front-End Developer', 'Assistant Coach Swim' ] 
        })
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/avarta.png" alt="avatar" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Pham Duy Nhan <span>(Hachiko)</span></h1>
                    <h3> <span ref={textRef}></span></h3>
                </div>    
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>           
        </div>
    )
}
