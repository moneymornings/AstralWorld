import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AstralWorld from './images/AstralWorldLogo.jpeg';
import Navbarcomp from './Child Components/Navbarcomp';
import Signs from './Child Components/Signs';
import Shop from "./Child Components/Shop";
import NoPage from "./NoPage";
import Home from './Child Components/Home';
import LearnYourSign from "./Child Components/LearnYourSign";
import { createContext } from "react";
import { useState, useEffect } from "react";

//creating context
export const TrackerContext = createContext();







function App() {

  //creating visitor tracker 
  const [counter, setCounter] = useState(0);

  useEffect(() => {
      const storedCount = localStorage.getItem("siteVisits");
      const startingCount = Number(storedCount) || 0;
      setCounter(startingCount + 1);


  }, []);







 



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

    
 <TrackerContext.Provider value={ counter}>
      <Home/>
      {/* <Shop/> */}
      </TrackerContext.Provider>
  
      
     


  
    
    
    </>


);
}
export default App;


