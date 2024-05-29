import React, {  useEffect, useState} from 'react'




function Cancer() {
  

  const [cancer, setCancer] = useState("");

//Using UseEffect to Fetch (Cancer) daily horoscope data from my API 

useEffect(() =>{

  const myHeaders = new Headers();
  myHeaders.append("X-RapidAPI-Key", "4833fa5f73mshf20639fcc428dc0p19bf44jsn63635ad62d44");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  fetch("https://horoscope-astrology.p.rapidapi.com/horoscope?day=today&sunsign=cancer", requestOptions)
  .then((response)=> response.json())
  .then((result) => {
    setCancer(result.horoscope); //fetches horoscope data for sign and updates the state to that horoscope.
                                //result is the object and horoscope is the property we are pulling.
    
    console.log(result);})
 

  



},[])


function handleClickCan(){ // this function triggers the pop-up that reveals the daily horoscope when this  sign is chosen //
    alert(cancer)
  };

  return (
    <>
    <div>
     {/* this is the clickable image for this sign: i added onclick and passed the handleClick function so when you click it you get */}
    <img className='cancerImg' src=" https://plus.unsplash.com/premium_photo-1678308064397-13a1b346603f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHx6b2RpYWMlMjBzaWdufGVufDB8fDB8fHww" alt="HTML5 Icon" onClick={handleClickCan} ></img> 
    
    </div>
    </>
  )

}



export default Cancer
