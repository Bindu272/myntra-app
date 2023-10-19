import React, { useState } from 'react'
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import './ProfileIcon.scss'
const Profileicon = () => {
    const [isHovered, setIsHovered]=useState(false)
    const handleMouseEnter=()=>{
        setIsHovered(true);
    }
    const handleMouseLeave=()=>{
        setIsHovered(false)
    }
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='profileIcon'>  
    <i className="fa-solid fa-user nav_icon"></i>
    <li className="nav_li ">Profile</li>
    { (<ProfileDropdown/>)}
    </div>
  )
}

export default Profileicon