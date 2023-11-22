import React, { useState } from 'react'
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import './ProfileIcon.scss'
const Profileicon = () => {
    const [isHovered, setIsHovered]=useState(false)
    const handleMouseEnter=()=>{
        setIsHovered(!isHovered);
    }
  return (
    <div className='profileIcon'>  
    <i className="fa-solid fa-user nav_icon"></i>
    <li className="nav_li "  onClick={handleMouseEnter}>Profile</li>
    {isHovered && (<ProfileDropdown/>)}
    </div>
  )
}

export default Profileicon;