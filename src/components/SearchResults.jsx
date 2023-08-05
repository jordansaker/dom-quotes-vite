import React from 'react'
import { Navigate } from 'react-router-dom';

const SearchResults = ({searchResults, handleSearchClose, previousURL, dashboard}) => {
  return (
    <>
      {previousURL ? (
        <div className="content">
          <div className="resultsDisplay">
            <span className="fa fa-times" onClick={handleSearchClose}></span>
            <h5>Search Results:</h5>
            {searchResults.length > 0 ? (
              searchResults.map((quote) => (
                <div className="randomQuote" key={quote.id}>
                  <p>{quote["movie_title"]}</p>
                  <blockquote>{quote.quote}</blockquote>
                </div>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </div>
      ) : ( dashboard ? <Navigate to={"/dashboard"} replace /> : <Navigate to={"/"} replace />
      )}
    </>
  );
}

export default SearchResults