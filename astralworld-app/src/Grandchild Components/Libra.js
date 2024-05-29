import React from 'react'
import { useState, useEffect } from 'react'




function Libra() {
    const [libra, setLibra] = useState("");

//Using UseEffect to Fetch (Libra) daily horoscope data from my API 

useEffect(() =>{

  const myHeaders = new Headers();
  myHeaders.append("X-RapidAPI-Key", "4833fa5f73mshf20639fcc428dc0p19bf44jsn63635ad62d44");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  fetch("https://horoscope-astrology.p.rapidapi.com/horoscope?day=today&sunsign=libra", requestOptions)
  .then((response)=> response.json())
  .then((result) => {
    setLibra(result.horoscope); //fetches horoscope data for sign and updates the state to that horoscope.
                                //result is the object and horoscope is the property we are pulling.
    
    console.log(result);})
 

  



},[])


function handleClickLibra(){ // this function triggers the pop-up that reveals the daily horoscope when    this  sign is chosen //
  
   alert(libra)
}






  return (


     <div>
    {/* this is the clickable image for this sign: i added onclick and passed the handleClick function so when you click it you get */}

    <img className='libraImg' src=" https://plus.unsplash.com/premium_photo-1678308063700-c9da918fbe4d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHx6b2RpYWMlMjBzaWdufGVufDB8fDB8fHww" alt="HTML5 Icon" onClick={handleClickLibra} ></img>
    
    </div>
  )
}

export default Libra