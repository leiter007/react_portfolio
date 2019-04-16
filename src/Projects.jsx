import React, {Component} from "react"

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    "id": 1,
                    "name": "My First Website"
                },
                {
                    "id": 2,
                    "name": "FizzBuzz"
                }
            ]
        };
    }
    render() {
        const projects = this.state.projects
        let projectsList

        if (projects.length >0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id}>
                        <h3 className="content-text">
                        {projects.name}
                        </h3>
                    </div>
                )
            })
        }
        return (
            <div>
                <h1 className="content-h1">My Projects</h1>
                {projectsList}
            </div>
        )
    }
};

export default Projects