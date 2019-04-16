import React from "react"
import { UndrawDesignerLife } from "react-undraw-illustrations";

const About = () => {
    return (
        <div className="content-wrapper">
            <div className="flex flex-wrap mb-4">
                <div className="w-full lg:w-1/4 md:w-1/2">
                <UndrawDesignerLife primaryColor='#12283a' height='200px'/>
                </div>
            
                <div className="w-full lg:w-3/4 md:w-1/2">
                <h1 className="content-h1">About Me</h1>
                <p className="content-text">Ipsum dolerum whatever</p>
                </div>
            </div>
        </div>
    )
}

export default About