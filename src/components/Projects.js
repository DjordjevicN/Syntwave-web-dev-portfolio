import React from 'react';
import { Link } from 'react-router-dom'
import { projectData } from '../ProjectsData'

function Projects() {
    console.log(projectData);
    return (
        <div className="projects__wrapper">
            <div className="projects__content">
                <h1 className="section--title">
                    PROJECTS
                </h1>

                {projectData.map(item => (
                    <div className="projectBox" key={item.id}>
                        <img className='projectImage' src={item.image} alt="" />
                        <div className="projectText">
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                            <Link to={item.url}>
                                <div className="arrowRight"  >
                                    <img className='headerArrow--img' src="/images/Synthwave-arrow.png" alt="" />
                                    <img className='headerArrow--img' src="/images/Synthwave-arrow.png" alt="" />
                                    <img className='headerArrow--img' src="/images/Synthwave-arrow.png" alt="" />
                                </div>
                            </Link>
                        </div>

                    </div>)
                )}



            </div>
        </div>
    );
}

export default Projects;
