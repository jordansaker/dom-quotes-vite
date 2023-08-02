import React, { useEffect } from 'react'

const AllQuotesDisplay = () => {

  useEffect(() => {
    auth.fetch('https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all')
        .then(response => response.json())
        .then(data => {
          setQuotesArray(data)
        })
        .catch(err => console.log(err))
}, [])

  return (
    <div>AllQuotesDisplay</div>
  )
}

export default AllQuotesDisplay