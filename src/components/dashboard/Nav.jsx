import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="nav flex-column dashNav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={"/dashboard"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/dashboard/new/quote"}>
          New Quote
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/dashboard/edit'>
          Edit
        </Link>
      </li>
    </ul>
  );
}

export default Nav