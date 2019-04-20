import React, { Component } from "react"
import axios from "axios"
import EduCard from "./EduCard"
import WorkCard from "./WorkCard"
import { UndrawDesigner } from "react-undraw-illustrations";

class About extends Component {
    constructor() {
        super();
        this.state = {
           education: [],
            works: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/education.json')
        .then(response => {this.setState({education: response.data})})
        .then(
            axios.get('./src/data/work.json')
            .then(response => {this.setState({works: response.data})})
        )
    }

    render() {
        const education = this.state.education
        const works = this.state.works
        let eduList
        let worksList

        if (works.length >0){
            eduList = education.map(edu => {
                return (
                    <div key={edu.id} className="min-h-900 my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/6">
                    <EduCard edu={edu} />
                    </div>
                )
            })
            worksList = works.map(work => {
                return (
                    <div key={work.id} className="min-h-900 my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/6">
                    <WorkCard work={work} />
                    </div>
                )
            })
        }

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="image-header-wrapper" >
                <UndrawDesigner primaryColor='#20504f' skinColor="#f3d3cd" hairColor="#b29a5e" height='100px'/>
                </div>
            
                <div className="header-wrapper">
                <h1 className="content-h1">About Me</h1>
                <p className="content-text">Soon I will add more information about me here - such as my past education -and work experience.</p>
                <p className="content-text">Stay tuned!</p></div>
            </div>
       
            <div className="card-wrapper">
                <div className="flex flex-wrap -mx-1 lg:mx-4">
                    {eduList}
                </div>
            </div>
            
            <div className="card-wrapper">
                <div className="flex flex-wrap -mx-1 lg:mx-4">
                    {worksList}
                </div>
            </div>

        </div>
    )
}
}

export default About