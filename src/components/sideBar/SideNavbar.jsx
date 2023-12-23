import React from 'react'

import logo from "../../image/logo.png"
import orders from "../../image/orders.png"
import down from "../../image/down.png"
import home from "../../image/home.png"
import products from "../../image/products.png"
import delivery from "../../image/delivery.png"
import marketing from "../../image/marketing.png"
import analytics from "../../image/analytics.png"
import payout from "../../image/payout.png"
import discount from "../../image/discount.png"
import audience from "../../image/audience.png"
import appearance from "../../image/appearance.png"
import plugins from "../../image/plugins.png"
import wallet from "../../image/wallet.png"
import Item from '../item/Item'

const SideNavbar = () => {
    const iconArr=[
        {icon:home,name:"Home"},
        {icon:orders,name:"Orders"},
        {icon:products,name:"Products"},
        {icon:delivery,name:"Delivery"},
        {icon:marketing,name:"Marketing"},
        {icon:analytics,name:"Analytics"},
        {icon:payout,name:"Payouts"},
        {icon:discount,name:"Discount"},
        {icon:audience,name:"Audience"},
        {icon:appearance,name:"Appearance"},
        {icon:plugins,name:"Plugins"},
    
    ]
  return (
    <div className='navbar'>
        <div className='navbar-account'>
        <div className="nav-top">
            <div className="company-icon-image">
              <div className="company-icon-image-child" />
              <div className="nishyan-parent">
                <div className="nishyan">Nishyan</div>
                <div className="visit-store">Visit store</div>
              </div>
              <img className="logo" alt="" src={logo} />
              <img
                className="down"
                alt=""
                src={down}
              />
            </div>
            {
                iconArr.map((el)=>{
                    return <Item icon={el.icon} name={el.name}/>
                })
            }
           
          </div>
          <div className="basenav-bottom">
            <div className="frame">
              <div className="outline-wallet-wrapper">
                <img
                  className="wallet"
                  alt=""
                  src={wallet}
                />
              </div>
              <div className="available-credits-parent">
                <div className="available-credits">Available credits</div>
                <div className="div3">222.10</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SideNavbar