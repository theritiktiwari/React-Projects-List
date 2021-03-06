import React from 'react';
import { Link } from 'react-router-dom';
import './css/Landing.css';

export const Landing = () => {
    return (
        <div className="content">
            <div className="boxes">

                <Link to="/clock">
                    <div className="box">
                        <img src="https://i.ibb.co/NW4mrD1/Clock.png" alt="Clock" />
                        <h3>Clock</h3>
                        <p>This is a digital clock show the time, date and day, made with HTML, CSS and JavaScript. You can add this in your project.</p>
                    </div>
                </Link>

                <Link to="/bmi">
                    <div className="box">
                        <img src="https://i.ibb.co/HFqJ22w/BMI.png" alt="BMI Calculator" />
                        <h3>BMI Calculator</h3>
                        <p>This is a BMI Calculator which take height and weight as input and provide you BMI, made with HTML, CSS and JavaScript.</p>
                    </div>
                </Link>

                <Link to="/colorChanger">
                    <div className="box">
                        <img src="https://i.ibb.co/FhzF6Nd/Color-Changer.png" alt="Color Changer" />
                        <h3>Color Changer</h3>
                        <p>This is a HEX code color changer which takes hex code as input and change the background color, made with HTML, CSS and JavaScript.</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}
