import React from "react"

const EduCard = (props) => {
    let edu = props.edu
    return (
        <div key={edu.id} className="overflow-hidden border md:w-20 bg-white">
                <div className="flex p-1 h-10 bg-grey-lighter border-b-2 border-grey">
                    <img src={edu.image} className="h-full lg:h-6 self-center"/>
                    <div className="edu-card-time">{edu.time}</div>
                </div>
            <div className="edu-card-content" style={{ minHeight: '120px' }}>
                <div className="edu-card-headline">{edu.name}</div>
                <p className="card-text">
                    {edu.description}
                </p>
            </div>

            <div className="flex items-center justify-between leading-none md:p-2 pt-1">
                <a href={edu.link} target="_blank"><button className="card-button hover">Link</button></a>
            </div>
        
        </div>
    )
}

export default EduCard