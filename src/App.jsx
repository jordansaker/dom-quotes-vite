import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/auth/Login'
import './App.css'
import Nav from './components/Nav'
import NavDash from './components/dashboard/NavDash'
import AllQuotesDisplay from './components/AllQuotesDisplay'
import NewQuote from './components/dashboard/NewQuote'
import DashboardHome from './components/dashboard/DashboardHome'
import EditContent from './components/dashboard/EditContent'
import NotificationCreated from './components/dashboard/NotificationCreated'
import EditQuote from './components/dashboard/EditQuote'
import APIInfo from './components/APIInfo'
import ShowQuote from './components/ShowQuote'
import { auth } from './components/auth/AuthModule'
import QuoteForm from './components/dashboard/QuoteForm'
import Loading from './components/Loading'

// API functions

const objKeyErrors = ['integrity_error', 'not_found', 'invalid_auth', 'validation_error', 'bad_request', 'msg', '']

async function fetchMod (data, URL, method) {
  try {
    const config = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
    const res = data
      ? await auth.fetch(URL, config)
      : await auth.fetch(URL, {method: method})
    const returnedData = await res.json()
    console.log('Sucess')
    objKeyErrors.map(key => {
      if (Object.keys(returnedData).includes(key) && returnedData[key] !== 'Quote added to dom_quotes table') {
        throw Error(JSON.stringify(returnedData))
      }
    })
    return returnedData
  } catch (err) {
    console.error(err)
    throw err
  }
}

// APP

const App = () => {
  const [quotesArray, setQuotesArray] = useState([])
  const [quoteObject, setQuoteObject] = useState({})
  const [quote, setQuote] = useState('')
  const [movieTitle, setMovieTitle] = useState('')
  const [isLoading, setIsloading] = useState(true)
  const [isActiveTwo, setActiveTwo] = useState(false)

  const navigate = useNavigate()

  function addQuote (quote, movieTitle) {
    const newQuote = {
      quote,
      movie_title: movieTitle,
    }
    const url = 'https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/new/'
    fetchMod(newQuote, url, "POST")
      .then((res) => {
        const resObj = {
          id: res.quote.id,
          quote: res.quote.quote,
          movie_title: res.quote["movie_title"],
        }
        setQuote('')
        setMovieTitle('')
        setQuoteObject(resObj)
      })
      .catch((err) => {
        const errObj = JSON.parse(err.message)
        let errMsg;
        Object.keys(errObj).map((key) => {
          if (objKeyErrors.includes(key) && key === "integrity_error") {
            errMsg = "Quote already exists in collection, fam.";
          } else if (objKeyErrors.includes(key) && key === "validation_error") {
            errMsg = "Woah, fam. No man left behind";
          }
          setError(errMsg)
          setTimeout(() => {
            setError("")
          }, 5000)
        })
        console.log(JSON.parse(err.message));
      })
    navigate('/dashboard/new/')
  }

  const handleEditClick = (event) => {
    setIsloading(true)
    const quoteURL = 'https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all/' + event.target.attributes.value.value + '/'
    fetchMod("", quoteURL, 'GET')
      .then(res => {
        setQuote(res.quote)
        setMovieTitle(res['movie_title'])
      })
    setTimeout(() => {
      setIsloading(false)
    }, 2000)
    navigate(`/dashboard/edit/${event.target.attributes.value.value}/`)
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home showQuote={<ShowQuote />} />}>
          <Route path="all/quotes" element={<AllQuotesDisplay />} />
        </Route>
        <Route path="/dashboard">
          <Route
            path="/dashboard/"
            element={<Dashboard content={<DashboardHome />} nav={<NavDash isActiveTwo={isActiveTwo} setActiveTwo={setActiveTwo} />} />}
          />
          <Route
            path="new/quote"
            element={
              <Dashboard
                content={
                  <NewQuote
                    form={
                      <QuoteForm
                        addQuote={addQuote}
                        quote={quote}
                        setQuote={setQuote}
                        movieTitle={movieTitle}
                        setMovieTitle={setMovieTitle}
                        setActiveTwo={setActiveTwo}
                        isActiveTwo={isActiveTwo}
                      />
                    }
                  />
                }
                nav={<NavDash isActiveTwo={isActiveTwo} setActiveTwo={setActiveTwo} />}
              />
            }
          />
          <Route
            path="new/"
            element={
              <Dashboard
                content={<NotificationCreated quoteObject={quoteObject} />}
                nav={<NavDash isActiveTwo={isActiveTwo} setActiveTwo={setActiveTwo} />}
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
                nav={<NavDash isActiveTwo={isActiveTwo} setActiveTwo={setActiveTwo} />}
              />
            }
          />
          <Route
            path="edit/:id/"
            element={
              <Dashboard
                content={
                  <EditQuote
                    form={
                      <QuoteForm
                        addQuote={addQuote}
                        quote={quote}
                        setQuote={setQuote}
                        movieTitle={movieTitle}
                        setMovieTitle={setMovieTitle}
                      />
                    }
                    isloading={isLoading}
                    loading={<Loading />}
                  />
                }
                nav={<NavDash isActiveTwo={isActiveTwo} setActiveTwo={setActiveTwo} />}
              />
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/api/docs/" element={<APIInfo />} />
      </Routes>
    </>
  );
}

export default App