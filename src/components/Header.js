import React, { useEffect, useState } from 'react';
import music from './bgMusic.mp3'

const audio = new Audio(music);

function Header() {
    const [sunPosition, setSunPosition] = useState(0);
    const [starsPosition, setStarsPosition] = useState(0);
    const [starsPositionLeft, setSunPositionLeft] = useState(0);
    const [mountainsBackPosition, setMountainsBackPosition] = useState(0);
    const [gridPosition, setGridPosition] = useState(0);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let value = window.scrollY;
            setStarsPosition(value * 0.9)
            setSunPosition(value * 0.9)
            setSunPositionLeft(value * -0.2)
            setMountainsBackPosition(value * 0.6)
            setGridPosition(value * 0.5)
        })
    }, []);

    const handlePlayer = () => {
        if (playing) {
            audio.pause();
            setPlaying(false)
        } else {
            audio.play();
            audio.volume = 0.5;
            setPlaying(true)
        }
    }

    return (
        <div className='header__wrapper'>

            <div className="musicPlayer__wrapper">
                <img className="musicPlayer__image" src="/images/tape.png" alt="music" onClick={handlePlayer} />
            </div>

            <div className="header__parallax">
                <img className="header__parallax--img stars " src="/images/stars.png" alt="stars" style={{ top: starsPosition }} />
                <img className="header__parallax--img sun" src="/images/sun.png" alt="sun" style={{ top: sunPosition, left: starsPositionLeft }} />
                <div className='header--title'  >
                    <div>
                        <h1 className="header__parallax--title">FRONT END</h1>
                        <h1 className="header__parallax--title">DEVELOPER</h1>
                    </div>
                </div>
                <img className="header__parallax--img backMountains" src="/images/mountain-back.png" alt="sun" style={{ top: mountainsBackPosition }} />
                <img className="header__parallax--img grid" src="/images/grid.png" alt="grid" style={{
                    top: gridPosition
                }} />
                <img className="header__parallax--img mountains" src="/images/mountains.png" alt="sun" />
            </div>



        </div>
    );
}

export default Header;
