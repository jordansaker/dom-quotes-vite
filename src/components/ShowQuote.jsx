import React, { useEffect, useState } from 'react'

const ShowQuote = () => {
  const [quoteObject, setQuote] = useState('')

  function fetchQuote () {
    fetch('https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/')
        .then(response => response.json())
        .then(data => {
        setQuote(data)
        })
}

  useEffect(() => {
    fetch('https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/')
        .then(response => response.json())
        .then(data => {
          setQuote(data)
        })
    }, [])

  return (
    quoteObject && (
      <div className='randomQuote'>
        <button onClick={fetchQuote}>Random Quote</button>
        {quoteObject && <blockquote>"{quoteObject.quote}"</blockquote>}
        {quoteObject && <p>{quoteObject.movie_title}</p>}
      </div>
    )
  )
}

export default ShowQuote