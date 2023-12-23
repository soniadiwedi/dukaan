import React from 'react'

import "./payout.css"
import Navbar from '../../components/Navbar'
import SideNavbar from '../../components/sideBar/SideNavbar'
import Home from '../../components/Home'
const Payout = () => {
  return (
    <div className='main-container'>
        <Navbar/>
        <Home/>
        <SideNavbar/>
    </div>
  )
}

export default Payout