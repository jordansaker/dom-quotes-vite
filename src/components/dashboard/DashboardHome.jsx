import React from 'react'
import ShowQuote from '../ShowQuote'

const DashboardHome = () => {
  return (
    <div className="content">
      <header>
        <h6>Welcome Home, Family!</h6>
        <form className="d-flex search" role="search">
          <input
            className="form-control me-2 input"
            type="search"
            placeholder="Search Quote"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" >
            <span className='fa fa-search'></span>
          </button>
        </form>
      </header>
      <div className='banner'>
        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F07%2Ffast-furious-6-bbq.jpg&q=60" alt="family BBQ" />
      </div>
      <ShowQuote />
    </div>
  )
}

export default DashboardHome