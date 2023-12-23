import React from 'react'
import group from "../image/group.png"
import menu from "../image/menu.png"
import search from "../image/search.png"
import help from "../image/help.png"
const Navbar = () => {
  return (
    <div className="dashboard-header">
    <div className="frame-parent">
      <div className="dashboard-wrapper">
        <div className="dashboard">Payouts</div>
      </div>
      <div className="how-to-use">
        <img
          alt=""
          src={help}
        />
        <div className="how-to-use1">How it works</div>
      </div>
    </div>
    <div className="search-parent">
      <img className="icon-search" alt="" src={search} />
      <div className="tutorials">
        Search features, tutorials, etc.
      </div>
    </div>
    <div className="component-2-wrapper">
      <div className="component-2">
        <img className="icons-menu" alt="" src={group} />
        <img className="icons-menu" alt="" src={menu} />
      </div>
    </div>
  </div>
  )
}

export default Navbar