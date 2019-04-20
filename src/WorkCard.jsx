import React from "react"

const WorkCard = (props) => {
    let work = props.work
    return (
        <div key={work.id} className="overflow-hidden border md:w-20 bg-white">
                <div className="flex p-1 h-10 bg-grey-lighter border-b-2 border-grey">
                    <img src={work.image} className="h-full lg:h-6 self-center"/>
                    <div className="edu-card-time">{work.time}</div>
                </div>
            <div className="edu-card-content" style={{ minHeight: '120px' }}>
                <div className="edu-card-headline">{work.name}</div>
                <p className="card-text">
                    {work.description}
                </p>
            </div>

            <div className="flex items-center justify-between leading-none md:p-2 pt-1">
                <a href={work.link} target="_blank"><button className="card-button hover">Link</button></a>
            </div>
        
        </div>
    )
}

export default WorkCard