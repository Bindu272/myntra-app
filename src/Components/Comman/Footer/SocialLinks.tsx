import React from 'react'
import { Link } from 'react-router-dom'

const SocialLinks = () => {
  return (
    <div className='d-flex justify-content-around ' >
        <Link to={'https://instagram.com/_i_bindupatil_?igshid=NGVhN2U2NjQ0Yg=='} target="_blank"><i className="fa-brands fa-instagram text-dark fa-2xl"></i></Link>
        <Link to={'https://www.linkedin.com/in/bindu-rvikumar-patil-1782601a7/'} target="_blank"><i className="fa-brands fa-linkedin text-dark fa-2xl"></i></Link>
        <Link to={'https://github.com/Bindu272'} target="_blank"><i className="fa-brands fa-github text-dark fa-2xl"></i></Link>
        <Link to={`mailto:bindu272@gmail.com`} target="_blank">  <i className="fa-solid fa-envelope text-dark fa-2xl"></i></Link>
      
        </div>
       
  )
}

export default SocialLinks