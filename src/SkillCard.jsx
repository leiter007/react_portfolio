import React from "react"

const SkillCard = (props) => {
    let skill = props.skill
    return (
        <div key={skill.id} className="overflow-hidden border">
            <img src={skill.image} className="block h-auto w-full" style={{ height: '150px', objectFit: 'cover' }} />

            <div className="px-6 py-4" style={{ minHeight: '150px' }}>
                <div className="card-headline">{skill.name}</div>
                <p className="card-text">
                    {skill.description}
                </p>
            </div>

            <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <a href={skill.link} target="_blank"><button className="card-button hover">Link</button></a>
            </div>
        
        </div>
    )
}

export default SkillCard