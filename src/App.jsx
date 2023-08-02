import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/auth/Login'
import './App.css'
import Nav from './components/Nav'
import AllQuotesDisplay from './components/AllQuotesDisplay'
import NewQuote from './components/dashboard/NewQuote'
import DashboardHome from './components/dashboard/DashboardHome'
import EditContent from './components/dashboard/EditContent'
import NotificationCreated from './components/dashboard/NotificationCreated'
import EditQuote from './components/dashboard/EditQuote'

const App = () => {
  const [quotesArray, setQuotesArray] = useState([])
  const [quoteObject, setQuoteObject] = useState({})
  const [quoteURL, setQuoteURL] = useState(0)
  const navigate = useNavigate()

  function addQuote (quote, movieTitle) {
    const newQuote = {
      quote,
      movie_title: movieTitle,
    }
    setQuoteObject(newQuote)
    // post quote
    navigate('/dashboard/new/')
  }

  const handleEditClick = (event) => {
    setQuoteURL('https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all/' + event.target.attributes.value.value + '/')
    // retrieve quote and set in form
    navigate(`/dashboard/edit/${event.target.attributes.value.value}/`)
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="all/quotes" element={<AllQuotesDisplay />} />
        </Route>
        <Route path="/dashboard">
          <Route
            path="/dashboard/"
            element={<Dashboard content={<DashboardHome />} />}
          />
          <Route
            path="new/quote"
            element={<Dashboard content={<NewQuote addQuote={addQuote} />} />}
          />
          <Route
            path="new/"
            element={
              <Dashboard
                content={<NotificationCreated quoteObject={quoteObject} />}
              />
            }
          />
          <Route
            path="edit/"
            element={
              <Dashboard
                content={
                  <EditContent
                    displayQuotes={
                      <AllQuotesDisplay
                        quotesArray={quotesArray}
                        setQuotesArray={setQuotesArray}
                        handleEditClick={handleEditClick}
                      />
                    }
                  />
                }
              />
            }
          />
        <Route path='edit/:id/' element={<Dashboard content={<EditQuote addQuote={addQuote} />} />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App