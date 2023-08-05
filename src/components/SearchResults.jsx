import React from 'react'

const SearchResults = ({searchResults}) => {
  return (
    <div className="content">
      <div className='resultsDisplay'>
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
  )
}

export default SearchResults