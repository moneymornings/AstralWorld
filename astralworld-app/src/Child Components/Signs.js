import React, {  useEffect, useState} from 'react'
import Cancer from '../Grandchild Components/Cancer';
import Aquarius from '../Grandchild Components/Aquarius';
import Virgo from '../Grandchild Components/Virgo';
import Taurus from '../Grandchild Components/Taurus';
import Scorpio from '../Grandchild Components/Scorpio';
import Sagittarius from '../Grandchild Components/Sagittarius';
import Pisces from '../Grandchild Components/Pisces';
import Libra from '../Grandchild Components/Libra';
import Leo from '../Grandchild Components/Leo';
import Gemini from '../Grandchild Components/Gemini';
import Capricorn from '../Grandchild Components/Capricorn';





function Signs() {
  
// Establishing State
  const [signs, setSigns] = useState("");

//Using UseEffect to Fetch (aries) daily horoscope data from my API 

useEffect(() =>{

  const myHeaders = new Headers();
  myHeaders.append("X-RapidAPI-Key", "4833fa5f73mshf20639fcc428dc0p19bf44jsn63635ad62d44");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  fetch("https://horoscope-astrology.p.rapidapi.com/horoscope?day=today&sunsign=aries", requestOptions)
  .then((response)=> response.json())
  .then((result) => {
    setSigns(result.horoscope); //fetches horoscope data for sign and updates the state to that horoscope.
                                //result is the object and horoscope is the property we are pulling.
    
    console.log(result);})
 

  



},[])


function handleClickAries(){ // this function triggers the pop-up that reveals the daily horoscope when this  sign is chosen //
  
  alert(signs)
}






  return (
    <>


     <div>
       <h1 className='h1header'> Choose Your Sign 
     </h1>
       <h1 className='h1header2'> for your Daily Horoscope</h1>
       <hr></hr>
      
       
    
      </div>

    <div className='grid'><div>


   {/* this is the clickable image for this sign: i added onclick and passed the handleClick function so when you click it you get */}
    
    <img className='ariesImg' src=" https://plus.unsplash.com/premium_photo-1678308064203-542947e9d3f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHx6b2RpYWMlMjBzaWdufGVufDB8fDB8fHww" alt="HTML5 Icon" onClick={handleClickAries} ></img>

    
    
     </div>
      {/* Pulling in the grandchildren components to render on the signs page */}
      <div>
      <Taurus/> 
       </div>

      <div>
      <Gemini/>
       </div>

       <div>
        <Cancer/>
         </div>

       <div>
         <Leo/>
          </div>

       <div>
        <Virgo/> 
           </div>

        <div>
        <Libra/>
          </div>

        <div>
         <Scorpio/>
           </div>

         <div>
        <Sagittarius/> 
           </div>

        <div>
        <Capricorn/>
          </div>

         <div>
         <Aquarius/>
          </div>

      <div>
       <Pisces/>
         </div>

       </div>
   
    </>
    










  )
}

export default Signs

