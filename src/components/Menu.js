import React from 'react';

function Menu() {

    return (
        <div className='menu__wrapper'>
            <div className="menu__content">
                <h2 className='menu--title'>Nikola</h2>
                <div className="navigation">
                    <p className='link' onClick={() => {
                        window.scrollTo(0, 1200);
                    }}>About me</p>
                    <p className='link' onClick={() => {
                        window.scrollTo(0, 2400);
                    }}>Projects</p>
                    {/* <p className='link' onClick={() => {
                        window.scrollTo(0, 3800);
                    }}>Contact</p> */}
                    <p className='link' ><a href="mailto:nikola.dj.87@gmail.com" rel="noreferrer">Email</a></p>
                    <p className='link'><a href="https://www.linkedin.com/in/nikola-djordjevic-503066193/" target="_blank" rel="noreferrer" >LinkedIn</a></p>
                </div>
            </div>
        </div>
    );
}

export default Menu;
