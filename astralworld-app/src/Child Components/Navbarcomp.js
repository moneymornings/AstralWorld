import React from 'react'
import { Outlet, Link } from "react-router-dom";


const Navbarcomp = () => {
  return (
    <>
      <ul >
         <li><a><Link to="/">Home</Link></a></li> 
         <li><a><Link to="/dailyhoroscope">Daily Horoscope</Link></a></li> 
         <li><a><Link to="/learnyoursign">Learn Your Sign</Link></a></li> 
         <li><a><Link to="/shop">Shop</Link></a></li> 
      </ul>
      <Outlet />
    </>
  )
};

export default Navbarcomp;