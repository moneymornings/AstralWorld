import React from 'react'
import { useState,useEffect } from 'react';

function Virgo() {

  //Establishing State
const [virgo, setVirgo] = useState("");

//Using UseEffect to Fetch my daily horoscope data from my API 

useEffect(() =>{

  const myHeaders = new Headers();
  myHeaders.append("X-RapidAPI-Key", "4833fa5f73mshf20639fcc428dc0p19bf44jsn63635ad62d44");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  fetch("https://horoscope-astrology.p.rapidapi.com/horoscope?day=today&sunsign=virgo", requestOptions)
  .then((response)=> response.json())
  .then((result) => {
    setVirgo(result.horoscope); //fetches horoscope data for sign and updates the state to that horoscope.
                                //result is the object and horoscope is the property we are pulling.
    
    console.log(result);})
 


},[])

function handleClickVirgo(){ // this function triggers the pop-up that reveals the daily horoscope when    this  sign is chosen //
  
    alert(virgo)
  };






  return (
    <>

<div>
   {/* this is the clickable image for this sign: i added onclick and passed the handleClick function so when you click it you get */}

<img className='virgoImg' src=" https://plus.unsplash.com/premium_photo-1678308063641-6b6097ad1966?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHx6b2RpYWMlMjBzaWdufGVufDB8fDB8fHww" alt="HTML5 Icon" onClick={handleClickVirgo} ></img>
</div>


</>

  )
  
}

export default Virgo