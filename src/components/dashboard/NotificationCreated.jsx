import React from 'react'

const NotificationCreated = ({quoteObject}) => {
  return (
    <div className='content'>
      <p>Quote added:</p>
      <p>Quote: {quoteObject.quote}</p>
      <p>Movie Title: {quoteObject['movie_title']}</p>
    </div>
  )
}

export default NotificationCreated