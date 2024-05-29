import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import background from '../Aries.png';





function TestCard() {
    const [signs, setSigns] = useState("");
    const [flip, setFlip] = useState(false);
    const [libra, setLibra] = useState("");
//     Using UseEffect to Fetch my detailed horoscope data for each sign  from my API 
//  Establishing State

//  Using UseEffect to Fetch (aries) daily horoscope data from my API 
 
 useEffect(() =>{
 
   const myHeaders = new Headers();
   myHeaders.append("X-RapidAPI-Key", "4833fa5f73mshf20639fcc428dc0p19bf44jsn63635ad62d44");
   
   const requestOptions = {
     method: "GET",
     headers: myHeaders,
     redirect: "follow"
   };

  
   let zodiac = ['aries','taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagitarius', 'capricorn', 'aquarius', 'pisces' ]
   let baseUrl = "https://horoscope-astrology.p.rapidapi.com/sign?s="
   for(let i=0;i<zodiac.length; i++){
    
  fetch(baseUrl + zodiac[0], requestOptions)
  .then((response)=> response.json())
  .then((result) => {
  setSigns(result.about);
  setLibra(result.about)

  console.log(result.about);})
   }

//    let zodiac = [
//     "aries",
//     "taurus",
//     "gemini",
//       "cancer",
//       "leo",
//       "virgo",
//       "libra",
//       "scorpio",
//       "sagitarius",
//       "capricorn",
//       "aquarius",
//       "pisces",
//     ];
//   let baseUrl = `https://horoscope-astrology.p.rapidapi.com/sign?s=`;
//   zodiac.forEach(sign => {
//     fetch(baseUrl + sign, requestOptions)
//     .then(response => response.json())
//     .then(result => {
//    
//     });
//   });
//   }, []);

   


}, [])

  
 
   
 
 
 








  return (
    <>
    <div></div>
     <ReactCardFlip isFlipped={flip}
            flipDirection="vertical">
            <div style={{
                width: '400px',
                height: '400px',
                backgroundImage: `url(${background})` ,
                fontSize: '40px',
                color: 'green',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                
                <br />
                <br />
                <button style={{
                    alignContent: 'center',
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#FFF48B',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => setFlip(!flip)}>
                    Learn</button>
            </div>
            <div style={{
                width: '600px',
                height: '400px',
                background: '#fbd7f8',
                fontSize: '20px',
                color: 'blue',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                Aries Info from API.
                <p className="ariesFlip">Aries:{libra}</p>
                {/* <p className="ariesFlip">Aries:</p> */}
                <br />
                <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => setFlip(!flip)}>
                    Flip</button>
            </div>
        </ReactCardFlip>

</>
  )
}

export default TestCard