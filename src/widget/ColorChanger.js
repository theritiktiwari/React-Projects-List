import React, { useState } from 'react';
import "./css/ColorChanger.css";

export const ColorChanger = () => {

    document.title = "Color Changer | Projects";

    const [title, setTitle] = useState('');

    let handleColor = (event) => {
        setTitle(event.target.value);
    }
        
    let Change = () => {
        document.getElementById('container').style.background = title;
    }
    
    let Capital = (event) => {
        event.target.value = ("" + event.target.value).toUpperCase();
    }

    return (
        <section>
            <div id="container">
                <input type="text" onChange={handleColor} onInput={Capital} placeholder="#FFFFFF"/>
                <button className="button" onClick={Change}>Change Color</button>
            </div>
        </section>
    )
}