// import React,{ useContext} from 'react';
// import { TrackerContext } from '../App';
import {Typewriter} from 'react-simple-typewriter';





export default function Home() {
  // const vTrack = useContext(TrackerContext);


  //Typewriter function 
  const handleType = (count:number) => {
    // access word count number
    console.log(count)}
  

  const handleDone = () => {
    console.log(`Done after 10 loops!`)
  }



  return (
    <>
        <div className='Home'>
      <h1 style={{  color: 'white', paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal', textAlign: 'center' }}>
       Welcome to {' '}
        <span style={{ color: 'yellow', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Astral World']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>

    {/* <div> <h3> We've had {vTrack} Visitors!</h3></div> */}
    </>
  )
  
}

