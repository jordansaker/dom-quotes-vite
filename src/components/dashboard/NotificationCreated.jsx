import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotificationCreated = ({quoteObject, loading, isLoading, setActiveTwo, setActiveThree}) => {
  const navigate = useNavigate()
  return (
    <div className="content">
      {!isLoading ? (
        <>
          <div className="notification">
            <p>Quote added</p>
            <hr />
            <p>
              <span>ID:</span> <span>{quoteObject.id}</span>
            </p>
            <p>
              <span>Quote:</span> <span>"{quoteObject.quote}"</span>
            </p>
            <p>
              <span>Movie Title:</span>{" "}
              <span>{quoteObject["movie_title"]}</span>
            </p>
          </div>
          <div className='notification-button'>
            <button onClick={() => {
              setActiveTwo(true)
              setActiveThree(false)
              navigate('/dashboard/new/quote')
            }}>New Quote</button>
            <button onClick={() => {
              setActiveTwo(false)
              setActiveThree(true)
              navigate('/dashboard/edit/')
            }}>Update Quote</button>
          </div>
        </>
      ) : (
        loading
      )}
    </div>
  );
}

export default NotificationCreated