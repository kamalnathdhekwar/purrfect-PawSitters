import React from 'react'
import { Link } from 'react-router-dom';
import homeImg from '../../assets/mainPage.svg'
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
        <div style={{ backgroundImage: `url(${homeImg})` }}>
          <img src={homeImg} alt="" className="" />
        </div>
        </div>
    );
}