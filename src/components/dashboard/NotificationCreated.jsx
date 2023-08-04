import React from 'react'

const NotificationCreated = ({quoteObject}) => {
  return (
    <div className="content">
      <div className="notification">
        <p>Quote added</p>
        <hr />
        <p><span>ID:</span> <span>{quoteObject.id}</span></p>
        <p><span>Quote:</span> <span>"{quoteObject.quote}"</span></p>
        <p><span>Movie Title:</span> <span>{quoteObject["movie_title"]}</span></p>
      </div>
    </div>
  )
}

export default NotificationCreated