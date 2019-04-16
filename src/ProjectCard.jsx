import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (
        <div key={project.id} className="overflow-hidden border">
            <img src={project.image} className="block h-auto w-full" style={{ height: '150px', objectFit: 'cover' }} />

            <div className="px-6 py-4" style={{ minHeight: '150px' }}>
                <div className="card-headline">{project.name}</div>
                <p className="card-text">
                    {project.description}
                </p>
            </div>

            <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <button className="card-button hover">
                    Details
                </button>
            </div>
        
        </div>
    )
}

export default ProjectCard