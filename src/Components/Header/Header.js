import React from 'react';
import logo from '../../logo.png'
import Wave from 'react-wavify';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo}alt="" />
            <h1>The Concert for Bankok</h1>
            <p> A concert is a live music performance in front of an audience.[1] The performance may be by a single musician, sometimes then called a recital, or by a musical ensemble, such as an orchestra, choir, or band.</p>
            <h1>Total Budget: $ 100 Billion </h1>
            <Wave fill='white'
                paused={false}
                options={{
                height: 60,
                amplitude:90,
                speed: 0.2,
                points: 400
                }}
            />
        </div>
    );
};

export default Header;