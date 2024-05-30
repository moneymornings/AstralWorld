import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useContext } from 'react';
// import { TrackerContext } from '../App';


function Shop() {

  // const vTrack = useContext(TrackerContext);



    const handleType = (count: number) => {
      // access word count number
      console.log(count)}
    
  
    const handleDone = () => {
      console.log(`Done after 5 loops!`)
    }




  return (
    <>



    <div>
        <div className='Shop'>
      <h1 style={{  color: 'white', paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal', textAlign: 'center' }}>
       Shop {' '}
        <span style={{ color: 'yellow', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['With Us',]}
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

    </div>

    <hr></hr>
    <hr></hr>

    <div>
    <div className='ShopCards'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=" https://images.unsplash.com/photo-1511405889574-b01de1da5441?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGxvdmVyc3xlbnwwfHwwfHx8MA%3D%3D"/>
      <Card.Body>
        <Card.Title>Compatibility Reading</Card.Title>
        <Card.Text>
        Learn more about your zodiac sign and who you're most compatible with in the love department!
        </Card.Text>
        <Button variant="warning" href="https://buy.stripe.com/test_5kA7uIcrSalOamA7ss" ></Button>
      </Card.Body>
    </Card>

    

    

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=" https://plus.unsplash.com/premium_photo-1700081739364-e05c32449dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFzdHJvbG9naWNhbCUyMHJlYWRpbmZ8ZW58MHx8MHx8fDA%3D"/>
      <Card.Body>
        <Card.Title>Natal Chart Reading</Card.Title>
        <Card.Text>
        Learn more about your zodiac sign and how the planets connect to your birth chart.
        </Card.Text>
        <Button variant="warning" href="https://buy.stripe.com/test_3cs4iweA0fG8fGUfYZ" ></Button>
      </Card.Body>
    </Card>

    


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=" https://images.unsplash.com/photo-1600429991827-5224817554f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFyb3R8ZW58MHx8MHx8fDA%3D"/>
      <Card.Body>
        <Card.Title>Tarot Card Reading</Card.Title>
        <Card.Text>
        Get clarity on the future with a detailed 3 Card Tarot Card Reading
        </Card.Text>
        <Button variant="warning" href="https://buy.stripe.com/test_7sI4iw3Vmdy0dyMaEG" ></Button>
      </Card.Body>
    </Card>

    </div>
    </div>
    {/* <div> <h3> We've had {vTrack} Visitors!</h3></div> */}


    </>
  )
}

export default Shop





