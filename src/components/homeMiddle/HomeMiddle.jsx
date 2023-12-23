import React, { useState } from "react";
import "./homeMiddle.css";
import { useNavigate } from "react-router-dom";
const HomeMiddle = () => {
const navigate=useNavigate()
const [refun,setrefund]=useState(false)
const [pay,setpay]=useState(true)

console.log("pay",pay)
console.log("refun",refun)
  const hanldeRefund=()=>{
    navigate("/refund")
    setrefund(true)
    setpay(false)
  }

  const hanldePayout=()=>{
    navigate("/")
    setpay(true)

  }
  return (
    <div className="frame-parent7">
      <div className="transactions-this-month-parent">
        <div className="dashboard">Transactions | This Month</div>
        <div className="pills-parent">
          <div className={pay===true?"pills":"pills1"}>
            <button className={pay===true?"payouts-btn":"refund-btn"} onClick={hanldePayout}>Payouts (22)</button>
          </div>
          <div className={refun===true?"pills":"pills1"}>
            <button className={refun===true?"payouts-btn":"refund-btn"} onClick={hanldeRefund}>Refunds (2)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
