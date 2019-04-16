import React from "react"
import { UndrawMomentToRemember } from "react-undraw-illustrations";

const Hello= () => {
    return (
            <div className="flex flex-wrap">
                <div className="w-1/4 pr-5">
                <UndrawMomentToRemember primaryColor='#20504f' skinColor="#fbccbf" hairColor="#b29a5e" height='300px'/>
                </div>
            
                <div className="w-3/4 pl-5 border-l grey-light">
                <h1 className="content-h2">Hello World!</h1>
                <p className="content-text">
                My name is Felix and I am currently pursuing the Craft Academy Bootcamp - to improve my programming skillz! 
                This is where I display my programming projects, and soon also other curricular activities.</p>
                <p className="content-text pt-10">
                For checkin out my previous projects, please click on the "My Projects" link in the header!</p>
                </div>
            </div>
    )
}

export default Hello