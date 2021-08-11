import React from 'react';
import './css/Alarm.css';
import $ from 'jquery';

export const Alarm = () => {

    // function to show the clock
    let timeOfDay = '';
    function clock(){
        // Get the Hour, Minute and Seconds
        let currentTime = new Date();
        let currentHours = currentTime.getHours();
        let currentMinutes = currentTime.getMinutes();
        let currentSeconds = currentTime.getSeconds();
        
        // Get AM and PM
        timeOfDay = (currentHours < 12) ? 'AM' : 'PM';
        
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

    // Adding 0 and contraints to 24 hours
    let reg = /^0[0-9]$/;

    function validH(){
        this.value = (this.value > 12) ? (this.value - 12) : ((parseInt(this.value) === 0) ? 12 : this.value);
        // this.value = ((parseInt(this.value) < 10) ? '0' : '') + this.value;
        this.value = ((parseInt(this.value) < 10) ? (reg.test(this.value)) ? '' : '0' : '') + this.value;
        if(this.value > 24 || this.value === NaN){
            this.value = '';
        }
    }

    // Adding 0 and contraints to 59 minutes / seconds
    function valid(){
        this.value = ((parseInt(this.value) < 10) ? (reg.test(this.value)) ? '' : '0' : '') + this.value;

        if(this.value > 59 || this.value === NaN){
            this.value = '';
        }
    }

    // Hide the alerts
    $('#success').hide();
    $('#failure').hide();

    let audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

    let alarmSet = (e) => {
        e.preventDefault();
            
        const hour = document.getElementById('hour');
        const minute = document.getElementById('minute');
        const second = document.getElementById('second');
        hour.addEventListener('blur', validH);
        minute.addEventListener('blur', valid);
        second.addEventListener('blur', valid);
        
        let alarmTime = new Date().setHours(hour.value, minute.value, second.value);

        let now = new Date();

        let h = now.getHours();
        h = parseInt((h > 12) ? (h - 12) : ((h === 0) ? 12 : h));
        h = parseInt(((h < 10) ? '0' : '') + h);

        let time = new Date().setHours(h, now.getMinutes(), now.getSeconds());
        
        let timeToAlarm = alarmTime - time;
        console.log(timeToAlarm);
        
        if (timeToAlarm >= 0) {
            let success = document.getElementById('success').classList.add('show');
            $('#failure').hide();
            $('#success').show();

            // Display on the page
            const showAlarm = document.getElementById('showAlarm');
            
            let set = `${hour.value} : ${minute.value} : ${second.value} ${timeOfDay}`;
            showAlarm.innerHTML = set;

            document.getElementById('alarmHead').style.display = 'block';

            // Alarm Ring
            setTimeout(() => {
                audio.play();
            }, timeToAlarm);
        } else {
            let failure = document.getElementById('failure').classList.add('show');
            $('#success').hide();
            $('#failure').show();
        }

        // Rest the form value
        hour.value = '';
        minute.value = '';
        second.value = '';
    }


    return (
        <>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
            </head>
            <body onLoad={clock, setInterval(clock, 1000)} className="body">
                <div className="alert alert-success alert-dismissible fade" role="alert" id="success">
                    <strong>SUCCESS!</strong> Your alarm is set.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="alert alert-danger alert-dismissible fade" role="alert" id="failure">
                    <strong>ERROR!</strong> Your alarm can't be set.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <h1 className="my-5 text-center">Alarm Clock</h1>
                <div className="container my-4">
                    <form onSubmit={alarmSet}>
                        <label htmlFor="alarm">Set Time</label>
                        <div className="row">
                        <div className="col">
                            <input type="number" id="hour" className="form-control" name="hour" placeholder="Enter the Hours..."/>
                        </div>
                        <div className="col">
                            <input type="number" id="minute" className="form-control" name="minute" placeholder="Enter the Minutes..."/>
                        </div>
                        <div className="col">
                            <input type="number" id="second" className="form-control" name="second" placeholder="Enter the Seconds..."/>
                        </div>
                        </div>
                        <button type="submit" id="btn" className="btn btn-block btn-primary my-3">Set Alarm</button>
                    </form>
                </div>

                <div className="container my-5 text-center">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center">
                            <h2>Clock</h2>
                            <div id="clock"></div>
                        </div>
                        <div className="col-md-6 mx-auto">
                            <h2 id="alarmHead" styleName="display: none;">Alarm set at</h2>
                            <div id="showAlarm"></div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}
