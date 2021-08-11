import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import '../theme.css';

export const Header = () => {
    return (
        <nav className="nav">
            <div className="left">
                <h1>Widgets</h1>
            </div>
            <div className="right">
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/clock">Clock</Link></li>
                    {/* <li><Link to="/alarm">Alarm</Link></li> */}
                    <li><Link to="/bmi">BMI Calculator</Link></li>
                    <li><Link to="/colorChanger">Color Changer</Link></li>
                </ul>
            </div>
        </nav>
    );
}
