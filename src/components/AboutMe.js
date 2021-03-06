import React from 'react';


function AboutMe() {
    return (
        <>
            <div className="aboutMe__wrapper" >
                <div className="aboutMe__content">
                    <div className="abutMe__image">
                        <img src="/images/profile.jpg" alt="" />
                    </div>
                    <div className="aboutMe__text">
                        <h1>ABOUT ME</h1>
                        <p>My name is <span>Nikola Djordjevic</span></p>
                        <p>I am a Front-end web developer i use  <span>React</span> as a main lybrary and <span>Redux</span> for state management.</p>
                        <p>I also use</p>
                        <p><span>Figma: </span>for making mockups and prototyping</p>
                        <p><span>SASS: </span>for styling</p>
                        <p><span>GSAP: </span>for animations</p>
                        <p><span>NextJS: </span>if i need ssr app</p>
                        <p><span>React_support: </span>axios, react-router, formik, yup, redux-thunk</p>
                        {/* <h4 className='commented'></h4> */}
                        <p><span>Express: </span>nodeJS framework</p>
                        <p><span>MySql: </span>database</p>
                    </div>
                </div>
            </div >
        </>
    );
}

export default AboutMe;
