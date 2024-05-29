import React from 'react'
import { useEffect } from 'react'
import TestCard from '../Grandchild Components/TestCard';
import TestCard2 from './TestCard2';
import TaurusCard from '../TaurusCard';
import GeminiCard from './GeminiCard';
import CancerCard from '../Grandchild Components/CancerCard';
import LeoCard from '../Grandchild Components/LeoCard';
import VirgoCard from './VirgoCard';
import LibraCard from './LibraCard';
import ScorpioCard from './ScorpioCard';
import SagittariusCard from './SagittariusCard';
import CapricornCard from './CapricornCard';
import AquariusCard from './AquariusCard';
import PiscesCard from './PiscesCard';

function LearnYourSign() {


//Using UseEffect to Fetch my detailed horoscope data for each sign  from my API 
  useEffect(()=> {

  const myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Key", "4833fa5f73mshf20639fcc428dc0p19bf44jsn63635ad62d44");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://horoscope-astrology.p.rapidapi.com/sign?s=libra", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));




}, [])


  return (
    <div className='LYS'>

    <h3>Learn More About Your Sign</h3>
    <hr></hr>
    <h2> Learn about astrology, compatibility,career, health, and the overall nature of your sign </h2>
    <hr></hr>
    <h2> Click on a sign to learn more!</h2>
    

     <div className='grid2'>
    
    <TestCard/>
    {/* <TestCard2/> */}
    <TaurusCard/>
    <GeminiCard/>
    <CancerCard/>
    <LeoCard/>
    <VirgoCard/>
    <LibraCard/>
    <ScorpioCard/>
    <SagittariusCard/>
    <CapricornCard/>
    <AquariusCard/>
    <PiscesCard/>
    </div>
    </div>

  
  )
}

export default LearnYourSign