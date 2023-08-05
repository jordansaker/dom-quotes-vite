import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ dashboard, setDashboard, searchDash }) => {
  const [searchExp, setSearchExp] = useState('')

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const data = {
      search: searchExp
    }
    searchDash(data, false)
    setSearchExp('')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Dom Quotes API
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {!dashboard && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
              {dashboard && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={() => setDashboard(false)}>
                    Logout
                  </Link>
                </li>
              )}
            </ul>
            {!dashboard && (
              <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Quote"
                  aria-label="Search"
                  value={searchExp}
                  onChange={(event) => setSearchExp(event.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  <span className="fa fa-search"></span>
                </button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav