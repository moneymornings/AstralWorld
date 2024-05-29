import React from 'react'
import { useState,useEffect } from 'react'




function Capricorn() {
    //Establishing State

    const [capricorn, setCapricorn] = useState("");

//Using UseEffect to Fetch (Capricorn) daily horoscope data from my API 

useEffect(() =>{

  const myHeaders = new Headers();
  myHeaders.append("X-RapidAPI-Key", "4833fa5f73mshf20639fcc428dc0p19bf44jsn63635ad62d44");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  fetch("https://horoscope-astrology.p.rapidapi.com/horoscope?day=today&sunsign=capricorn", requestOptions)
  .then((response)=> response.json())
  .then((result) => {
    setCapricorn(result.horoscope); //fetches horoscope data for sign and updates the state to that horoscope. //result is the object and horoscope is the property we are pulling.
    
    console.log(result);})
 

  



},[])


function handleClickCap(){  // this function triggers the pop-up that reveals the daily horoscope when this  sign is chosen //
  
  alert(capricorn)
}






  return (
    <div>
    {/* this is the clickable image for this sign: i added onclick and passed the handleClick function so when you click it you get */}
    <img className='capImg' src=" https://plus.unsplash.com/premium_photo-1678308063563-5b523edf0bb3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHx6b2RpYWMlMjBzaWdufGVufDB8fDB8fHww" alt="HTML5 Icon" onClick={handleClickCap} ></img>
   
    
    
    </div>
  )
}

export default Capricorn