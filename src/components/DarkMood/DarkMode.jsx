import React from "react";
import "./DarkMode.css";
import { useState, useEffect } from "react";

export default function Darkmode() {

    const [theme, setTheme] = useState(null);

    useEffect(() => {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('light');
      }
      else {
        setTheme('dark');
      }
    }, [])
  
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };
  


    return (
        <div className='dark_mode  '>
            <input
                className='dark_mode_input  '
                type='checkbox'
                id='darkmode-toggle'
                onClick={handleThemeSwitch}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
    
            </label>
        </div>
    );
};