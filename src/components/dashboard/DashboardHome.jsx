import React from 'react'
import ShowQuote from '../ShowQuote'

const DashboardHome = ({ searchResults, displaySearchResults }) => {
  return (
    <div className="content">
      {!displaySearchResults ? (
        <>
          <header>
            <h6>Welcome Home, Family!</h6>
          </header>
          <div className="banner">
            <img
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F07%2Ffast-furious-6-bbq.jpg&q=60"
              alt="family BBQ"
            />
          </div>
          <ShowQuote />
        </>
      ) : (
        searchResults
      )}
    </div>
  )
}

export default DashboardHome