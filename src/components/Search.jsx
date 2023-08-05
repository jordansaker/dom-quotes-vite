import React, { useState } from 'react'

const Search = ({search}) => {
  const [searchExp, setSearchExp] = useState('')

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const data = {
      search: searchExp
    }
    search(data)
  }

  return (
    <form className="d-flex search" role="search" onSubmit={handleSearchSubmit}>
      <input
        className="form-control me-2 input"
        type="search"
        placeholder="Search Quote"
        aria-label="Search"
        value={searchExp}
        onChange={(event) => setSearchExp(event.target.value)}
      />
      <button className="btn btn-outline-success">
        <span className="fa fa-search"></span>
      </button>
    </form>
  )
}

export default Search