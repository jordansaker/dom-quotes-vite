import React, { useEffect } from 'react'
import { auth } from './auth/AuthModule'

const AllQuotesDisplay = ({ quotesArray, setQuotesArray, handleEditClick, handleDeleteClick }) => {

  useEffect(() => {
    auth.fetch('https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all')
        .then(response => response.json())
        .then(data => {
          setQuotesArray(data)
        })
        .catch(err => console.log(err))
}, [])

  return ( 
    <>
    <table>
    <tbody>
      {quotesArray.length > 0 ? (
        quotesArray.map((quote, index) => (
          <tr value={quote.id} key={quote.id} onClick={handleEditClick}>
            <td value={quote.id} onClick={handleDeleteClick} className='fa fa-trash-alt'></td>
            <td value={quote.id} key={quote.id} onClick={handleEditClick}>
              <table value={quote.id} key={quote.id}>
                <tbody>
                <tr value={quote.id} key={quote.id}>
                  <td><p value={quote.id}>{index + 1}</p></td>
                  <td><p value={quote.id}>{quote.quote}</p></td>
                  <td><p value={quote.id}>{quote["movie_title"]}</p></td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
        ))
      ) : (
        <tr><td><p>No quotes</p></td></tr>
      )}
      </tbody>
        </table>
      </>
  )
}

export default AllQuotesDisplay