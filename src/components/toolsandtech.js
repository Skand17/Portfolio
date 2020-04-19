import React from 'react'
import { projects} from "../mockdata/mock"

function Projects() {
    return (
        <React.Fragment>
            <section className="commom-section ">
                <div className="container">
                    <div className="heading-section toolandtech">
                        <h2>What I've built sop far</h2>
                    </div>
                        <div className="projectslist">
                            {
                                projects.map( (item) => {
                                    return       <a href={item.url} target="_blank" className="flex-wrapper">
                                                    <div className={`project-image commom-css ${item.class}`}>
                                                    </div>
                                                    <div className="project-desc">
                                                        <h2>{item.title}</h2>
                                                        <p>{item.desc}</p>
                                                        <span>{item.techstack}</span>
                                                    </div>
                                                </a>
                                })
                            }
                        </div>
                    </div>
            </section>   
        </React.Fragment>
    )
}

export default Projects
