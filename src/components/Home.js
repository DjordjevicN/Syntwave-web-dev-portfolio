import React from 'react';
import Header from './Header'
import Menu from './Menu'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
function Home() {
    return (
        <div>
            <Header />
            <Menu />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    );
}

export default Home;
