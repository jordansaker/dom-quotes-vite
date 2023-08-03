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
    <table>
      {quotesArray.length > 0 ? (
        quotesArray.map((quote, index) => (
          <tr value={quote.id} key={quote.id} onClick={handleEditClick}>
            <td><span className='fa fa-trash-alt'></span></td>
            <td value={quote.id} key={quote.id} onClick={handleEditClick}>
              <table value={quote.id} key={quote.id}>
                <tr value={quote.id} key={quote.id}>
                  <td><p value={quote.id}>{index + 1}</p></td>
                  <td><p value={quote.id}>{quote.quote}</p></td>
                  <td><p value={quote.id}>{quote["movie_title"]}</p></td>
                </tr>
              </table>
            </td>
          </tr>
        ))
      ) : (
        <p>No quotes</p>
      )}
    </table>
  )
}

export default AllQuotesDisplay