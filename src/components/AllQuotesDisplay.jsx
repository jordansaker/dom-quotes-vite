import React, { useEffect } from 'react'
import { auth } from './auth/AuthModule'

const AllQuotesDisplay = ({ quotesArray, setQuotesArray, handleEditClick }) => {

  useEffect(() => {
    auth.fetch('https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all')
        .then(response => response.json())
        .then(data => {
          setQuotesArray(data)
        })
        .catch(err => console.log(err))
}, [])

  return (
    <ul>
      {quotesArray.length > 0 ? (
        quotesArray.map((quote, index) => (
          <li value={quote.id} key={quote.id} onClick={handleEditClick}>
            <p value={quote.id} >{index + 1}</p>
            <p value={quote.id} >{quote.quote}</p>
            <p value={quote.id} >{quote["movie_title"]}</p>
          </li>
        ))
      ) : (
        <p>No quotes</p>
      )}
    </ul>
  )
}

export default AllQuotesDisplay