import React from "react"

const SkillCard = (props) => {
    let skill = props.skill
    return (
        <div key={skill.id} className="overflow-hidden border md:w-15">
            <div className="p-1 h-10 bg-grey-lighter border-b-2 border-grey">
            <img src={skill.image} className="h-full"/>
            </div>
            <div className="px-3 py-3 border-t border-grey-light" style={{ minHeight: '120px' }}>
                <div className="card-headline">{skill.name}</div>
                <p className="card-text">
                    {skill.description}
                </p>
            </div>

            <div className="flex items-center justify-between leading-none md:p-2 pt-1">
                <a href={skill.link} target="_blank"><button className="card-button hover">Link</button></a>
            </div>
        
        </div>
    )
}

export default SkillCard