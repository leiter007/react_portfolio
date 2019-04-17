import React from "react"
import { UndrawDesigner } from "react-undraw-illustrations";

const About = () => {
    return (
        <div className="flex mb-10 border-b border-grey-light">
                <div className="w-1/6 -mr-2 p-3">
                <UndrawDesigner primaryColor='#20504f' skinColor="#f3d3cd" hairColor="#b29a5e" height='70px'/>
                </div>
            
                <div className="w-5/6 p-4">
                <h1 className="content-h1">About Me</h1>
                <p className="content-text">Soon I will add more information about me here - such as my past education -and work experience.</p>
                <p className="content-text">Stay tuned!</p></div>
            </div>
    )
}

export default About