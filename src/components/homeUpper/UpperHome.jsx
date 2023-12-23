import React from 'react'
import "./upperHome.css"
import homeHelp from "../../image/homeHelp.png"
import help from "../../image/help.png"
import chevronRight from "../../image/chevronRight.png"
import ChevronRightBlue from "../../image/ChevronRightBlue.png"
const UpperHome = () => {
  return (
    <div className='frame-div'>
          <div className="frame-parent1">
              <div className="frame-wrapper">
                <div className="frame-parent2">
                  <div className="overview-parent">
                    <div className="next-payout-parent">
                      <div className="next-payout">Next Payout</div>
                      <img
                        className="icon-search"
                        alt=""
                        src={homeHelp}
                      />
                    </div>
                    <div className="by-today"> by Today, 04:00 PM</div>
                  </div>
                  <div className="parent">
                    <div className="div">₹2,312.23</div>
                    <div className="link-parent">
                      <div className="link">
                        <div className="link1">23 orders</div>
                      </div>
                      <img
                        className="outlined-right"
                        alt=""
                        src={chevronRight}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="next-payout-date-parent">
                <div className="next-payout-date">Next payout date:</div>
                <div className="today-0400pm">Today, 04:00PM</div>
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="frame-wrapper2">
                <div className="frame-parent2">
                  <div className="amount-pending-parent">
                    <div className="next-payout">Amount Pending</div>
                    <img
                      className="icon-search"
                      alt=""
                      src={help}
                    />
                  </div>
                  <div className="group">
                    <div className="div">₹92,312.20</div>
                    <div className="link-group">
                      <div className="link">
                        <div className="link1">13 orders</div>
                      </div>
                      <img
                        className="outlined-chevron-right"
                        alt=""
                        src={ChevronRightBlue}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="frame-wrapper2">
                <div className="frame-parent2">
                  <div className="amount-pending-parent">
                    <div className="next-payout">Amount Processed</div>
                    <img
                      className="iconssearch"
                      alt=""
                      src={help}
                    />
                  </div>
                  <div className="group">
                    <div className="container">
                      <div className="div">₹23,92,312.19</div>
        
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default UpperHome