import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    let deploy = project.deployed

    if (deploy == "") {
        return (
            <div key={project.id} className="overflow-hidden border bg-white">
            <img src={project.image} className="block h-auto w-full" style={{ height: '150px', objectFit: 'cover' }} />

            <div className="px-6 py-4" style={{ minHeight: '150px' }}>
                <div className="project-card-headline">{project.name}</div>
                <p className="card-text">
                    {project.description}
                </p>
            </div>

            <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <a href={project.GitHub} target="_blank"><button className="card-button hover">GitHub</button></a>
                <a href={project.deployed} target="_blank" hidden ><button className="card-button hover">Deployed site</button></a>
            </div>
            <div className="block h-auto w-full p-1 bg-grey-lighter justify-center">
               <a href="https://www.craftacademy.se/"><img src={project.tag} height="40%" width="40%"/></a>
            </div>
        
        </div>
        )
    }
    else {
    return (
        <div key={project.id} className="overflow-hidden border bg-white">
            <img src={project.image} className="block h-auto w-full" style={{ height: '150px', objectFit: 'cover' }} />

            <div className="px-6 py-4" style={{ minHeight: '150px' }}>
                <div className="project-card-headline">{project.name}</div>
                <p className="card-text">
                    {project.description}
                </p>
            </div>

            <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <a href={project.GitHub} target="_blank"><button className="card-button hover">GitHub</button></a>
                <a href={project.deployed} target="_blank"><button className="card-button hover">Deployed site</button></a>
            </div>
            <div className="block h-auto w-full p-1 bg-grey-lighter justify-center">
               <a href="https://www.craftacademy.se/"><img src={project.tag} height="40%" width="40%"/></a>
            </div>
        
        </div>
        )
    }
}

export default ProjectCard