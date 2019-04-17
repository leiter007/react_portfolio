import React, { Component } from "react"
import axios from "axios"
import SkillCard from "./SkillCard"
import { UndrawMomentToRemember } from "react-undraw-illustrations";

class Skills extends Component {
    constructor() {
        super();
        this.state = {
            skills: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/skills.json')
        .then(response => {
            this.setState({
                skills: response.data
            })
        })
    }

    render() {
        const skills = this.state.skills
        let skillsList

        if (skills.length >0) {
            skillsList = skills.map(skill => {
                return (
                    <div key={skill.id} className="min-h-900 my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/6">
                    <SkillCard skill={skill} />
                    </div>
                )
            })
        }
        return (
            <div className="landingpage-wrapper">
                <div className="landingpage-header">
                    <div className="w-1/4 m-3 p-2 bg-grey-lightest border border-grey-light">
                        <UndrawMomentToRemember primaryColor='#20504f' skinColor="#fbccbf" hairColor="#b29a5e"/>
                    </div>
                    <div className="w-3/4 p-4 pt-0 pb-0 border-l border-grey-light">
                        <h1 className="content-h2">Hello World!</h1>
                        <p className="content-text">
                        My name is Felix and I am currently pursuing the Craft Academy Bootcamp - to improve my programming skillz! 
                        This is where I display my programming projects, and soon also other curricular activities.</p>
                        <p className="content-text pt-4">
                        For checkin out my previous projects, please click on the "My Projects" link in the header!</p>
                    </div>
                </div>

                <div className="card-wrapper">
                <div className="flex flex-wrap -mx-1 lg:mx-4">
                        {skillsList}
                </div>
                </div>
            </div>
            
        )
    }
};

export default Skills