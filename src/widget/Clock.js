import React from 'react';
import '../theme.css';
import './css/Clock.css';

export const Clock = () => {
    
    const clock = () => {
        // Get the Hour, Minute and Seconds
        let currentTime = new Date();
        let currentHours = currentTime.getHours();
        let currentMinutes = currentTime.getMinutes();
        let currentSeconds = currentTime.getSeconds();

        // Get AM and PM
        let timeOfDay = (currentHours < 12) ? 'AM' : 'PM';

        // Make 12-hour Format
        currentHours = (currentHours > 12) ? (currentHours - 12) :  currentHours;
        currentHours = (currentHours === 0) ? 12 :  currentHours;

        // Add 0 to (0-9) to make it double digit
        currentHours = ((currentHours < 10) ? '0' : '') + currentHours;
        currentMinutes = ((currentMinutes < 10) ? '0' : '') + currentMinutes;
        currentSeconds = ((currentSeconds < 10) ? '0' : '') + currentSeconds;

        // String to make time correct time format
        
        let currentTimeStr = "";
        currentTimeStr += currentHours + " : " + currentMinutes + " : " + currentSeconds + " : " + timeOfDay;
        let ret = document.getElementById('clock').innerHTML = currentTimeStr;
    }

    return (  
        <section className="clck" onLoad={clock, setInterval(clock, 1000)}>
            <div id="clock"></div>
        </section>
    )
}
