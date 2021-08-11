import React from 'react';
import './css/Footer.css';
import '../theme.css';

export const Footer = () => {
    return (
        <footer>
            <div className="outContainer">
                <div className="insideContainer">
                    <h2>Social Links</h2>
                    <ul className="links">
                        <li><a href="https://instagram.com/codingwalls" target="_blank" rel="noreferrer">Tech Instagram Handle</a></li>
                        <li><a href="https://facebook.com/theritiktiwari" target="_blank" rel="noreferrer">Facebook Page</a></li>
                        <li><a href="https://linkedin.com/in/theritiktiwari" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://theritiktiwari.blogspot.com" target="_blank" rel="noreferrer">Blog</a></li>
                        <li><a href="https://github.com/theritiktiwari" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li><a href="https://telegram.me/theritiktiwari" target="_blank" rel="noreferrer">Telegram</a></li>
                        <li><a href="https://telegram.me/theritiktiwari_bot" target="_blank" rel="noreferrer">Free Content</a></li>
                        <li><a href="https://instagram.com/theritiktiwari" target="_blank" rel="noreferrer">Instagram Handle</a></li>
                    </ul>
                </div>

                <div className="insideContainer">
                    <h2>Contact Us</h2>
                    <ul className="links">
                        <li><a href="mailto:theritiktiwari@gmail.com">theritiktiwari@gmail.com</a></li>
                    </ul>
                </div>
                
                <div className="insideContainer">
                    <h2>About</h2>
                    <p>This is a React Website to showcase some projects. Hope you'll like this. Till then Keep Supporting, Learning and Loving.</p>
                </div>
            </div>
                
            <div className="copyright">
                <hr/>
                <p>Copyright &copy; {new Date().getFullYear()} <a href="/">Projects</a>. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
