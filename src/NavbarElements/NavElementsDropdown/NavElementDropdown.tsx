import React, { ReactNode } from 'react'
import './NavElementsDropdown.scss'
interface NavElementDropdownProps {
    children: ReactNode;
  }
  
  const NavElementDropdown: React.FC<NavElementDropdownProps> = ({ children }) => {
    return (
      <>
      <div className="backdrop"></div>
      <div className="nav-dropdown">
        {children}
      </div>
      </>
    );
  };

export default NavElementDropdown