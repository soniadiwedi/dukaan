import React from 'react'
import "./homeTable.css" 
import download from "../../image/download.png"
import sort from "../../image/sort.png"
import search from "../../image/search.png"
import triangleIcon from "../../image/triangleIcon.png"


const HomeTable = () => {
  const tableStyle = {
    width: '1152px',
    height: '794px',
    position: 'absolute',
    top: '410px',
    left: '3px',
    gap: '32px',
    borderCollapse: 'collapse', // Ensures borders are collapsed
  };

  const thStyle = {
    backgroundColor: '#F2F2F2',
    height:"40px",
    padding:"10px 12px 10px 12px"
  };
  return (
    <div className="template-3">
        <div className='frame-parent8'>
        <div className="input-search-box-parent">
                <div className="input-search-box">
                  <div class="input-search-field-default">
                    <img class="outlined-help" alt="" src={search}/>
                    <div class="order-id-phone">Order ID or transaction ID</div></div>
                </div>
                <div className="filters-parent">               
                  <div className="filters-parent">
                    <div className="frame-parent9">
                      <div className="filters-parent">
                        <div className="button-sort">
                          <div className="next-payout">Sort</div>
                          <img
                            className="outlined-sort"
                            alt=""
                            src={sort}
                          />
                        </div>
                      </div>
                      <div className="rectangle-group">
                        <div className="group-item" />
                        <img
                          className="iconsdownload"
                          alt=""
                          src={download}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
            <table style={tableStyle} >
              <thead >
              <tr style={thStyle} >
                    <th>
                      <img src={triangleIcon}  />
                    </th>
                    <th>Status</th>
                    <th>Transaction ID</th>
                    <th>Transaction Fees</th>
                    <th>Total</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td style={{ color: "blue" }}>#281209</td>
                    <td>⚪Pending</td>
                    <td>123456789</td>
                    <td>Today, 08:45 PM</td>
                    <td>$1,125.00</td>
                </tr>
                <tr>
                    <td style={{ color: "blue" }}>#282209</td>
                    <td>🟢Successful</td>
                    <td>123556789</td>
                    <td>Today, 08:45 PM</td>
                    <td>$1,125.00</td>
                </tr>
                <tr>
                    <td style={{ color: "blue" }}>#281509</td>
                    <td>🟢Successful</td>
                    <td>123459789</td>
                    <td>Today, 08:45 PM</td>
                    <td>$1,125.00</td>
                </tr>
                
                <tr>
                    <td style={{ color: "blue" }}>#281109</td>
                    <td>🟢Successful</td>
                    <td>123452789</td>
                    <td>Today, 08:45 PM</td>
                    <td>$1,125.00</td>
                </tr>
                <tr>
                    <td style={{ color: "blue" }}>#281909</td>
                    <td>🟢Successful</td>
                    <td>123451789</td>
                    <td>Today, 08:45 PM</td>
                    <td>$1,125.00</td>
                </tr>
                
                {/* <tr>
                    <td> </td>
                    <td>Successful</td>
                    <td>123456789</td>
                    <td>Today, 08:45 PM</td>
                    <td>$1,125.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Successful</td>
                    <td>123456789</td>
                    <td>Today, 08:45 PM</td>
                    <td>$1,125.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Successful</td>
                    <td>123456789</td>
                    <td>Today, 08:45 PM</td>
                    <td>$1,125.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Successful</td>
                    <td>123456789</td>
                    <td>Today, 08:45 PM</td>
                    <td>$1,125.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Successful</td>
                    <td>123456789</td>
                    <td>Today, 08:45 PM</td>
                    <td>$1,125.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Successful</td>
                    <td>123456789</td>
                    <td>Today, 08:45 PM</td>
                    <td>$1,125.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Successful</td>
                    <td>123456789</td>
                    <td>Today, 08:45 PM</td>
                    <td>$1,125.00</td>
                </tr>   */}
                </tbody>  
            </table>

        </div>
                 
        </div>
    </div>
  )
}

export default HomeTable