import React from 'react';
import { Link } from 'react-router-dom'
import { GoLinkExternal } from "react-icons/go";

function Maia() {
    return (
        <div className="maiaProject">
            <div className='project__wrapper'>
                <div className="project__content">
                    <Link className="goBack" to='/'>
                        <img className='goBackImg' src="/images/synthWave-arrow.png" alt="" />
                        <p>Go back</p>
                    </Link>

                    <div className="section">
                        <div className="project--image__wrapper">
                            <img className="project--image" src="/images/maia.jpg" alt="" />
                        </div>
                        <div className="project__texts">
                            <div className="projectLinkedTitle">
                                <a href="https://maia.rs/" target="_blank" rel="noreferrer"><h1 className='projectFrontend--text--title'>Maia.rs</h1></a>
                                <a href="https://maia.rs/" target="_blank" rel="noreferrer"> <GoLinkExternal /></a>
                            </div>
                            <p>The client needed eCommerce website to be designed and developed with instagram images to be displayed in website and to be multilingual.</p>
                            <p className="projectIntroduction--text--space">
                                For page builder I used Elementor
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maia;
