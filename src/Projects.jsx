import React, {Component} from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { UndrawDesigner } from "react-undraw-illustrations";
import { UndrawCreate } from "react-undraw-illustrations";

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/projects.json')
        .then(response => {
            this.setState({
                projects: response.data
            })
        })
    }

    render() {
        const projects = this.state.projects
        let projectsList

        if (projects.length >0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <ProjectCard project={project} />
                    </div>
                )
            })
        }
        return (
            <div id="main-content" className="content-wrapper">
                <div className="flex mb-10 border-b border-grey-light">
                    <div className="w-1/6 -mr-2 p-3" >
                        <UndrawCreate primaryColor='#20504f' height='70px'/>
                    </div>
                    <div className="w-5/6 p-3">
                        <h1 className="content-h1">My Projects</h1>
                        <p>This is a selection of the projects I have been working on. For more information, please click on the GitHub link in each card.</p>
                        <p>And if you want to see the final UI result - click on the link to the deployed site!</p>
                    </div>    
                </div>

                <div className="flex flex-wrap -mx-1 lg:mx-4">
                    {projectsList}
                </div>
            </div>
        )
    }
};

export default Projects