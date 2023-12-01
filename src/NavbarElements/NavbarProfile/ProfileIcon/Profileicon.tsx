// In ProfileIcon.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import './ProfileIcon.scss';

const Profileicon = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleToggleDropdown = () => {
    setIsDropdownVisible((prevIsDropdownVisible) => !prevIsDropdownVisible);
  };

  const handleClickOutside = (event:any) => {
    // Check if the clicked element is not part of the dropdown or profile icon
    if (
      isDropdownVisible &&
      event.target.closest('.profileIcon') === null &&
      event.target.closest('.profileDropdown') === null
    ) {
      setIsDropdownVisible(false);
    }
  };

  const handleLinkClick = (route:any) => {
    setIsDropdownVisible(false);
    navigate(route);
  };

  useEffect(() => {
    // Add click event listener to the window when the component mounts
    window.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownVisible]);

  return (
    <div className='profileIcon'>
      <i className="fa-solid fa-user nav_icon"></i>
      <div className="nav_item" onClick={handleToggleDropdown} role="button">
        Profile
      </div>
      {isDropdownVisible && (
        <ProfileDropdown handleLinkClick={handleLinkClick} />
      )}
    </div>
  );
};

export default Profileicon;
