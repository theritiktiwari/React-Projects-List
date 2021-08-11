import React from 'react';
import './css/Content.css';

export const Content = () => {
    return (
        <div className="content">
            <h1>Project List</h1>
            <div className="boxes">

                <a href="/clock">
                    <div className="box">
                        <img src="https://source.unsplash.com/160x90/?nature,water" alt="Image" />
                        <h3>Clock</h3>
                        <p>This is a digital clock show the time, date and day, made with HTML, CSS and JavaScript. You can add this in your project.</p>
                    </div>
                </a>
                
                {/* <a href="/alarm">
                    <div className="box">
                        <img src="https://source.unsplash.com/160x90/?nature,water" alt="Alarm" id="alarm"/>
                        <h3>Alarm</h3>
                        <p>This is a digital alarm clock which take hour, minute and seconds (only within a day) as input and set alarm, made with HTML, CSS and JavaScript.</p>
                    </div>
                </a> */}

                <a href="/bmi">
                    <div className="box">
                    <img src="https://source.unsplash.com/160x90/?nature,water" alt="BMI" id="BMI"/>
                        <h3>BMI Calculator</h3>
                        <p>This is a BMI Calculator which take height and weight as input and provide you BMI, made with HTML, CSS and JavaScript.</p>
                    </div>
                </a>

                <a href="/colorChanger">
                    <div className="box">
                        <img src="https://source.unsplash.com/160x90/?nature,water" alt="Image" />
                        <h3>Color Changer</h3>
                        <p>This is a HEX code color changer which takes hex code as input and change the background color, made with HTML, CSS and JavaScript.</p>
                    </div>
                </a>

            </div>
        </div>
    )
}
