import React, { useEffect } from 'react';
import '../theme.css';
import './css/Clock.css';

export const Clock = () => {

    document.title = "Clock | Projects";

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            let h = hours % 12;
            h = h > 12 ? h - 12 : h < 10 ? '0' + hours : hours;
            const m = minutes < 10 ? '0' + minutes : minutes;
            const s = seconds < 10 ? '0' + seconds : seconds;
            const time = `${h} : ${m} : ${s} ${ampm}`;
            document.getElementById('clock').innerHTML = time;
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (  
        <section className="clck">
            <div id="clock"></div>
        </section>
    )
}
