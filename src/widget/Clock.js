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
        
        let currentTimeStr = `${currentHours} : ${currentMinutes} : ${currentSeconds} ${timeOfDay}`;
        document.getElementById('clock').innerHTML = currentTimeStr;
    }

    const date = () => {
    
        let d = new Date();
        
        let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 'Saturday'];
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        let n = weekday[d.getDay()] + "\n" + month[d.getMonth()] + " " + ((d.getDate() < 10) ? ('0' + d.getDate()) : d.getDate()) + ", " + d.getFullYear();
        document.getElementById('date').innerHTML = n;
        console.log(n);
    }

    window.addEventListener("load", clock);
    return (  
        <>
            <section className="clck" onLoad={clock, setInterval(clock, 1000)}>
                {/* <div id="clock"></div> */}
            </section>
            <section onLoad={date} className="date">
                <div id="date"></div>
            </section>
        </>
    )

    
}
