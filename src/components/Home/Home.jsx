import React from 'react'
import { Link } from 'react-router-dom';
import homeImg from '../../assets/mainPage.svg'
import HomeCard from '../Cards/HomeCard';
import LeftImg from '../Cards/LeftImg';
export default function Home() {
    return (
        <div className="mx-auto w-full ">

        
        <div className="  ">
        <img src={homeImg} alt="" className=" w-screen " />
        <HomeCard/>
        <LeftImg/>
        </div>
    
       
        </div>
    );
}