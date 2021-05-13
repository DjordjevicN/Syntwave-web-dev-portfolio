import React from 'react';


const handlePlayer = () => {
    console.log('music player click');
}

function Header() {
    return (
        <div className='header__wrapper'>

            <div className="musicPlayer__wrapper">
                <img className="musicPlayer__image" src="/images/tape.png" alt="music" onClick={handlePlayer} />
            </div>

            <div className="header__parallax">
                <img className="header__parallax--img stars " src="/images/stars.png" alt="stars" />
                <img className="header__parallax--img sun" src="/images/sun.png" alt="sun" />
                <div className='header--title'>
                    <div>
                        <h1 className="header__parallax--title">FRONT END</h1>
                        <h1 className="header__parallax--title">DEVELOPER</h1>
                    </div>
                </div>

                <img className="header__parallax--img backMountains" src="/images/mountain-back.png" alt="sun" />
                <img className="header__parallax--img grid" src="/images/grid.png" alt="sun" />
                <img className="header__parallax--img mountains" src="/images/mountains.png" alt="sun" />
            </div>

            <p>arrow</p>
        </div>
    );
}

export default Header;
