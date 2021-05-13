import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className='menu__wrapper'>
            <div className="menu__content">
                <h2 className='menu--title'>Nikola</h2>
                <div className="navigation">
                    <Link className='link' to='/'><p>About me</p></Link>
                    <Link className='link' to='/'><p>Projects</p></Link>
                    <Link className='link' to='/'><p>Contact</p></Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;
