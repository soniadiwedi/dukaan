import React from 'react'
import arrow from "../image/arrow.png"
import UpperHome from './homeUpper/UpperHome'
import HomeMiddle from './homeMiddle/HomeMiddle'
import HomeTable from './homeTable/HomeTable'
const Home = () => {
  return (
    <div className='frame-group'>
        <div className="frame-container">
        <div className="overview-parent">
            <div className="dashboard">Overview</div>
            <div className="group-wrapper">
              <div className="rectangle-parent">
                <div className="group-child" />
                <div className="this-month">This Month</div>
                <img className="iconsarrow" alt="" src={arrow} />
              </div>
            </div>
          </div>
            <UpperHome/>
            <HomeMiddle/>
            <HomeTable/>
        </div>
    </div>
  )
}

export default Home