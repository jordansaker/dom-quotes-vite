import React, { useState } from 'react'

const NewQuote = ({ addQuote }) => {
  const [quote, setQuote] = useState('')
  const [movieTitle, setMovieTitle] = useState('')

  const formSumbit = (event) => {
    event.preventDefault()
    addQuote(quote, movieTitle)
  }

  return (
    <div className='content'>
      <h6>Add New Quote</h6>
      <form className="d-flex flex-column p-5" onSubmit={formSumbit}>
              <label className='mb-2'>Quote:</label>
              <textarea
                name="quote"
                id="newQuote"
                cols="30"
                rows="10"
                className='form-control mb-2'
                value={quote}
                onChange={e => setQuote(e.target.value)}
              ></textarea>
              <label className='mb-2'>Movie Title:</label>
              <input
                type="text"
                name="movieTitle"
                id="movieTitle"
                className='form-control'
                value={movieTitle}
                onChange={e => setMovieTitle(e.target.value)}
              />
              <button type="submit" value="Submit" className='form-control btn-green'>Submit</button>
            </form>
    </div>
  )
}

export default NewQuote