import React from 'react'
import sun from "./Sun.svg"
import moon from "./Moon.svg"
import "./DarkMode.css";

export default function Darkmode() {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label For='darkmode-toggle' className='dark_mode_label' >
                <img src={sun} alt=""  className='game'/>
                <img src={moon} alt="" className='game'/>
            </label>
        </div>
    );
};

