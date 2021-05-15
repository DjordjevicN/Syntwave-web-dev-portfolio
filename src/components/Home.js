import React from 'react';
import Header from './Header'
import Menu from './Menu'
import AboutMe from './AboutMe'
import Projects from './Projects'
function Home() {
    return (
        <div>
            <Header />
            <Menu />
            <AboutMe />
            <Projects />
        </div>
    );
}

export default Home;
