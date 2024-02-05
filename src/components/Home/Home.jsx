import React from 'react'
import { Link } from 'react-router-dom';
import homeImg from '../../assets/mainPage.svg'
import HomeCard from '../Cards/HomeCard';
import LeftImg from '../Cards/LeftImg';
import RightImg from '../Cards/RightImg';
import dayCare2 from '../../assets/dayCare2.svg'
import grooming2 from '../../assets/grooming2.svg'

export default function Home() {
    return (
        <div className="mx-auto w-full ">

        
        <div className="  ">
        <img src={homeImg} alt="" className=" w-screen " />
        <HomeCard/>
        <div className="flex space-y-24 flex-col">
        <LeftImg img={dayCare2} title="Day Care" content="Where furry friends feel at home: Find your perfect pet caretaker today!"/>
        <RightImg img={grooming2} title="Grooming" content=" Let us handle it all for you, so you can focus on the more important things in life."/>
        </div>
        </div>
    
       
        </div>
    );
}