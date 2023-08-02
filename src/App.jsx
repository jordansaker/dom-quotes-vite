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

const App = () => {
  const [quotesArray, setQuotesArray] = useState([])
  const [quoteObject, setQuoteObject] = useState({})
  const navigate = useNavigate()

  function addQuote(quote, movieTitle) {
    const newQuote = {
      quote,
      movie_title: movieTitle
    }
    setQuoteObject(newQuote)
    navigate('/dashboard/new/')
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="all/quotes" element={<AllQuotesDisplay />} />
        </Route>
        <Route path="/dashboard">
          <Route path='/dashboard/' element={<Dashboard content={<DashboardHome />} />} />
          <Route path="new/quote" element={<Dashboard content={<NewQuote addQuote={addQuote} />} />} />
          <Route path="new/" element={<Dashboard content={<NotificationCreated quoteObject={quoteObject} />} />} />
          <Route path="edit/" element={<Dashboard content={<EditContent />} />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App