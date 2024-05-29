import React, {useState, useEffect} from 'react';
import ReactCardFlip from "react-card-flip";
import background from '../Scorpio.png';

function ScorpioCard() {
    const [flip, setFlip] = useState(false);
    const [scorpio, setScorpio] = useState("");


    useEffect(() =>{

        const myHeaders = new Headers();
        myHeaders.append("X-RapidAPI-Key", "4833fa5f73mshf20639fcc428dc0p19bf44jsn63635ad62d44");
        
        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };
        fetch("https://horoscope-astrology.p.rapidapi.com/sign?s=scorpio", requestOptions)
        .then((response)=> response.json())
        .then((result) => {
          setScorpio(result.about); //fetches horoscope data for sign and updates the state to that horoscope.
                                      //result is the object and horoscope is the property we are pulling.
          
          console.log(result);})
       
       
      },[])
    









  return (
    <>
    <div></div>
     <ReactCardFlip isFlipped={flip}
            flipDirection="vertical">
            <div onClick={() => setFlip(!flip)} style={{
                width: '470px',
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
                {/* <button style={{
                    alignContent: 'center',
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#EC297B',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => setFlip(!flip)}>
                    Learn</button> */}
            </div>
            <div style={{
                width: '700px',
                height: '700px',
                background: '#fbd7f8',
                fontSize: '20px',
                color: 'blue',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                
                <p className="ScorpioFlip">{scorpio}</p>
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


export default ScorpioCard