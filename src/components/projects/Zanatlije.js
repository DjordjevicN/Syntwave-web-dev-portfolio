import React, { useEffect } from 'react';
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Zanatlije() {
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
                        <img className="project--image" src="/images/zanatlijeLanding.jpg" alt="" />
                    </div>
                    <div className="project__texts">
                        <div className="projectLinkedTitle">
                            <a href="http://zanatlije.rs/" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Zanatlije.rs</h1></a>
                            <a href="http://zanatlije.rs/" target="_blank" rel="noreferrer"> <GoLinkExternal /></a>
                        </div>
                        <p>The idea was to make a marketplace that matches freelancers with local demand, allowing consumers to find immediate help with every day tasks.</p>
                        <p className="project__texts--space">This project was a major learning experience where i have stepped into problems with database structure, deploying full stack project, cPannel and dealing with backend connections. But also opend my eye to new posibitities.</p>
                    </div>
                </div>

                <div className="section">
                    <div className="project--image__wrapper">
                        <img className="project--image" src="/images/zanatlijeFrontend.jpg" alt="" />
                    </div>
                    <div className="project__texts">
                        <div className="projectLinkedTitle">
                            <a href="https://github.com/DjordjevicN/Zanatlije-frontend" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Frontend</h1></a>
                            <a href="https://github.com/DjordjevicN/Zanatlije-frontend" target="_blank" rel="noreferrer"> <FaGithub /></a>
                        </div>
                        <p>For this project i have used
                             <span> React</span> for user interface,</p>
                        <p><span> Redux</span> (thunk) for state management,</p>
                        <p><span> Formik</span> and <span> Yup</span> for form validation,</p>
                        <p><span> Axios</span> to make HTTP requests,</p>
                        <p><span> GSAP</span> for animations.</p>
                        <p>Currently I am implementing <span> CKEditor</span> so when user type their project description the text can be formatted,
                            and <span>Gravatar</span> so that users profile picture can be pulled from thair email profile.</p>

                    </div>
                </div>

                <div className="section">
                    <div className="project--image__wrapper">
                        <img className="project--image" src="/images/zanatlijeBackend.jpg" alt="" />
                    </div>
                    <div className="project__texts">
                        <div className="projectLinkedTitle">
                            <a href="https://github.com/DjordjevicN/Zanatlije-Backend" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Backend</h1></a>
                            <a href="https://github.com/DjordjevicN/Zanatlije-Backend" target="_blank" rel="noreferrer"> <FaGithub /></a>
                        </div>

                        <p>For this project I have used <span>ExpressJS</span>,</p>
                        <p><span>Bcrypt</span> to hash users password,</p>
                        <p><span>JsonWebToken</span>  to track logged in users and their permissions.</p>
                        <p>For database i used <span>MySQL</span></p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Zanatlije;
