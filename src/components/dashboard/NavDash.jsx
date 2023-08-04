import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavDash = ({isActiveTwo, setActiveTwo}) => {
  const [isActive, setActive] = useState(false)
  const [isActiveThree, setActiveThree] = useState(false)
  
  return (
    <ul className="nav flex-column dashNav">
      <li className="nav-item">
        <Link className={isActive ? "nav-link currentpage" : "nav-link"} to={"/dashboard"} onClick={() => {
          setActive(true)
          setActiveTwo(false)
          setActiveThree(false)
        }}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className={isActiveTwo ? "nav-link currentpage" : "nav-link"} to={"/dashboard/new/quote"} onClick={() => {
          setActive(false)
          setActiveTwo(true)
          setActiveThree(false)
        }}>
          New Quote
        </Link>
      </li>
      <li className="nav-item">
        <Link className={isActiveThree ? "nav-link currentpage" : "nav-link"} to='/dashboard/edit' onClick={() => {
          setActive(false)
          setActiveTwo(false)
          setActiveThree(true)
        }}>
          Edit
        </Link>
      </li>
    </ul>
  )
}

export default NavDash