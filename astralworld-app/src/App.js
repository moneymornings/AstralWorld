import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AstralWorld from './images/AstralWorldLogo.jpeg';
import Navbarcomp from './Child Components/Navbarcomp';
import Signs from './Child Components/Signs';
import Shop from "./Child Components/Shop";
import NoPage from "./NoPage";
import Home from './Child Components/Home';
import LearnYourSign from "./Child Components/LearnYourSign";
import Button from 'react-bootstrap/Button';






function App() {

  const [date, setDate] = useState('');

useEffect(() =>{

 
  fetch('https://timeapi.io/api/Time/current/zone?timeZone=America/New_York')
  .then((response)=> response.json())
  .then((data) => {
    setDate(data.date); //fetches time and date data 
                                //result is the object and horoscope is the property we are pulling.
    
    console.log(data.date);})


 

  



},[])

function handleClickDate(){ // this function triggers the pop-up that reveals the daily horoscope when this  sign is chosen //
  
  alert(date)
}









    return (
      <>

      {/* Router */}
        <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbarcomp />}>
            <Route index element={<Home />} />
            <Route path="dailyhoroscope" element={<Signs />} /> 
            <Route path="learnyoursign" element={<LearnYourSign />} />
            <Route path="shop" element={<Shop />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>

      {/* Logo */}
    <div className="App">
     <img src={AstralWorld} /> 
    </div>

      <div className="datebtn">
    <Button onClick={handleClickDate} variant="outline-light">Today's Date</Button>{' '}
    </div>
      {/* <TestCard/> */}
  

    
    
    </>


);
}
export default App;


