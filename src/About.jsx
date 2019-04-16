import React from "react"
import { UndrawDesigner } from "react-undraw-illustrations";

const About = () => {
    return (
        <div className="content-wrapper">
            <div className="flex flex-wrap mb-10 border-b border-grey-light">
                <div className="w-full lg:w-1/6 md:w-1/2 -mr-2 pb-3">
                <UndrawDesigner primaryColor='#20504f' skinColor="#f3d3cd" hairColor="#b29a5e" height='70px'/>
                </div>
            
                <div className="w-full lg:w-5/6 md:w-1/2">
                <h1 className="content-h1">About Me</h1>
                <p className="content-text">Ipsum dolerum whatever</p>
                </div>
            </div>
        </div>
    )
}

export default About