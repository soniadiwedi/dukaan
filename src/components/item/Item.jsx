import React from 'react'
import "./item.css"
const Item = ({icon,name}) => {
  return (
    <div className="pages">
              <div className="basenav-button">
                <img className="navbar-icon" alt="" src={icon} />
                <div className="home">{name}</div>
              </div>
             
            </div>
  )
}

export default Item