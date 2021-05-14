import React, { useEffect } from 'react';
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'



function Plates() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='project__wrapper'>
            <div className="project__content">

                <Link className="goBack" to='/'>
                    <img className='goBackImg' src="/images/synthWave-arrow.png" alt="" />
                    <p>Go back</p>
                </Link>

                <div className="section">
                    <div className="project--image__wrapper">
                        <img className="project--image" src="/images/izgubljeneTablice.jpg" alt="" />
                    </div>
                    <div className="project__texts">
                        <div className="projectLinkedTitle">
                            <a href="http://izgubljene-tablice.com/" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Izgubljene-tablice.com</h1></a>
                            <a href="http://izgubljene-tablice.com/" target="_blank" rel="noreferrer"> <GoLinkExternal /></a>
                        </div>
                        <p>The idea for this project was to make a service where you can report lost or found numberplates. When someone finds your numberplate, you get an e-mail notification and a GPS pin of the location.</p>
                        <p className="projectIntroduction--text--space">The design here needed to be very light, with no animations, because when you are looking for something you lost, you are in panic mode, and animations can be annoying in that situation.</p>
                        <p className="projectIntroduction--text--space">The idea here is to figure out how to work with Maps, automated email sending, handling images.</p>
                    </div>
                </div>

                <div className="section">
                    <div className="project--image__wrapper">
                        <img className="project--image" src="/images/plateFront.jpg" alt="" />
                    </div>
                    <div className="project__texts">
                        <div className="projectLinkedTitle">
                            <a href="https://github.com/DjordjevicN/numberplate-tracker/tree/frontend" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Frontend</h1></a>
                            <a href="https://github.com/DjordjevicN/numberplate-tracker/tree/frontend" target="_blank" rel="noreferrer"> <FaGithub /></a>
                        </div>
                        <p>For this project i have used <span>React </span> for user interface,</p>
                        <p><span> Redux</span> (thunk) for state management,</p>
                        <p><span>Axios </span> to make HTTP requests,</p>
                        <p><span>Leaflet </span> to display map and pins.</p>

                    </div>
                </div>

                <div className="section">
                    <div className="project--image__wrapper">
                        <img className="project--image" src="/images/plateBackend.jpg" alt="" />
                    </div>
                    <div className="project__texts">
                        <div className="projectLinkedTitle">
                            <a href="https://github.com/DjordjevicN/numberplate-tracker/tree/backend_new" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Backend</h1></a>
                            <a href="https://github.com/DjordjevicN/numberplate-tracker/tree/backend_new" target="_blank" rel="noreferrer"> <FaGithub /></a>
                        </div>
                        <p>For this project I have used <span>ExpressJS</span>,</p>
                        <p><span>Bcrypt</span> to hash users password,</p>
                        <p><span>JsonWebToken</span>  to track logged in users and their permissions.</p>
                        <p><span>Express file uploader</span>  to handle image upload,</p>
                        <p><span>NodeMailer</span>  to handle emails</p>
                        <p>For database i used <span>MySQL</span></p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Plates;
