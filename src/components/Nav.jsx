import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ dashboard, setDashboard }) => {
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
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Quote"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
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