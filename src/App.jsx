import React, { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
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
import DeleteModal from './components/dashboard/DeleteModal'
import PopUpErrorModal from './components/dashboard/PopUpErrorModal'
import Search from './components/Search'
import SearchResults from './components/SearchResults'

// API functions

const objKeyErrors = ['integrity_error', 'not_found', 'invalid_auth', 'validation_error', 'bad_request', 'msg', '']

async function fetchMod (data, URL, method, search) {
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
      if (Object.keys(returnedData).includes(key) && returnedData[key] !== 'Quote added to dom_quotes table' && returnedData[key] !== 'Quote deleted') {
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
  const [isActiveThree, setActiveThree] = useState(false)
  const [quoteID, setQuoteID] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errMsg, setErrMsg] = useState('POST')
  const [searchResults, setSearchResults] = useState([])
  const [dashboard, setDashboard] = useState(false)
  const [previousURL, setPreviousURL] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  function addUpdateQuote (quote, movieTitle, method) {
    const newQuote = {
      quote,
      movie_title: movieTitle,
    }
    const url =
      method === "POST"
        ? "https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/new/"
        : "https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all/" + quoteID + "/"
    fetchMod(newQuote, url, method)
      .then((res) => {
        const resObj = {
          id: res.quote.id,
          quote: res.quote.quote,
          movie_title: res.quote["movie_title"],
        }
        setQuote('')
        setMovieTitle('')
         // Page change
         setIsloading(true)
         setTimeout(() => {
           setIsloading(false)
         }, 2000)

        if (method === 'POST') {
          setQuoteObject(resObj)
          navigate("/dashboard/new/")
        }
        else {
          setQuoteObject(res)
          navigate("/dashboard/update/")
        }
      })
      .catch((err) => {
        const errObj = JSON.parse(err.message)
        Object.keys(errObj).map((key) => {
          if (objKeyErrors.includes(key) && key === "integrity_error") {
            setErrMsg("Quote already exists in collection, fam.")
          } else if (objKeyErrors.includes(key) && key === "validation_error") {
            setErrMsg("Woah, fam. No man left behind")
          } else if (objKeyErrors.includes(key) && key === "Token has expired") {
            navigate('/login')
            setDashboard(false)
          }
          setShowErrorModal(true)
          setTimeout(() => {
            setShowErrorModal(false)
          }, 20000)
        })
        console.log(JSON.parse(err.message))
      })
  }

  const handleEditClick = (event) => {
    event.preventDefault()
    setIsloading(true)
    setQuoteID(event.target.attributes.value.value)
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

  const handleDeleteClick = (event) => {
    event.preventDefault()
    setQuoteID(event.target.attributes.value.value)
    setShowModal(true)
  }

  const modalHandleClick = (event) => {
    event.preventDefault()
    const quoteURL = 'https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all/' + event.target.value + '/'
    fetchMod("", quoteURL, 'DELETE')
      .then(res => console.log(res))
      .catch((err) => {
        if (objKeyErrors.includes(key) && key === "Token has expired") {
          navigate('/login')
          setDashboard(false)
        }
      })
  }

  const searchDash = (data, dashboard) => {
    const url = 'https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all/search/'
    fetchMod(data, url, 'POST')
      .then(res => {
        setSearchResults(res)
        setPreviousURL(location.pathname)
        dashboard ? navigate('/dashboard/search/results') : navigate('/quotes/search/results')
      })
  }

  const handleSearchClose = () => {
    navigate(previousURL)
  }

  return (
    <>
      <Nav
        dashboard={dashboard}
        setDashboard={setDashboard}
        searchDash={searchDash}
      />
      <Routes>
        <Route path="/" element={<Home showQuote={<ShowQuote />} />}>
          <Route path="all/quotes" element={<AllQuotesDisplay />} />
        </Route>
        <Route path="/dashboard">
            {previousURL ? (
              <Route
                path="search/results"
                element={
                  <Dashboard
                    content={
                      <SearchResults
                        searchResults={searchResults}
                        handleSearchClose={handleSearchClose}
                        previousURL={previousURL}
                        dashboard={dashboard}
                      />
                    }
                    nav={
                      <NavDash
                        isActiveTwo={isActiveTwo}
                        setActiveTwo={setActiveTwo}
                        isActiveThree={isActiveThree}
                        setActiveThree={setActiveThree}
                      />
                    }
                    search={<Search searchDash={searchDash} />}
                  />
                }
              />
            ) : null}
            <Route
              path=""
              element={
                <Dashboard
                  content={<DashboardHome />}
                  nav={
                    <NavDash
                      isActiveTwo={isActiveTwo}
                      setActiveTwo={setActiveTwo}
                      isActiveThree={isActiveThree}
                      setActiveThree={setActiveThree}
                    />
                  }
                  search={<Search searchDash={searchDash} />}
                />
              }
            />
            <Route
              path="new/quote"
              element={
                <Dashboard
                  content={
                    <NewQuote
                      form={
                        <QuoteForm
                          addUpdateQuote={addUpdateQuote}
                          quote={quote}
                          setQuote={setQuote}
                          movieTitle={movieTitle}
                          setMovieTitle={setMovieTitle}
                          setActiveTwo={setActiveTwo}
                          isActiveTwo={isActiveTwo}
                        />
                      }
                      errorModal={
                        <PopUpErrorModal
                          showErrorModal={showErrorModal}
                          setShowErrorModal={setShowErrorModal}
                          errMsg={errMsg}
                        />
                      }
                      showErrorModal={showErrorModal}
                    />
                  }
                  nav={
                    <NavDash
                      isActiveTwo={isActiveTwo}
                      setActiveTwo={setActiveTwo}
                      isActiveThree={isActiveThree}
                      setActiveThree={setActiveThree}
                    />
                  }
                  search={<Search searchDash={searchDash} />}
                />
              }
            />
            <Route
              path="new/"
              element={
                <Dashboard
                  content={
                    <NotificationCreated
                      quoteObject={quoteObject}
                      isLoading={isLoading}
                      loading={<Loading />}
                      setActiveTwo={setActiveTwo}
                      setActiveThree={setActiveThree}
                    />
                  }
                  nav={
                    <NavDash
                      isActiveTwo={isActiveTwo}
                      setActiveTwo={setActiveTwo}
                      isActiveThree={isActiveThree}
                      setActiveThree={setActiveThree}
                    />
                  }
                  search={<Search searchDash={searchDash} />}
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
                          handleDeleteClick={handleDeleteClick}
                          modalHandleClick={modalHandleClick}
                        />
                      }
                      modal={
                        <DeleteModal
                          modalHandleClick={modalHandleClick}
                          quoteID={quoteID}
                          showModal={showModal}
                          setShowModal={setShowModal}
                        />
                      }
                      errorModal={
                        <PopUpErrorModal
                          showErrorModal={showErrorModal}
                          setShowErrorModal={setShowErrorModal}
                          errMsg={errMsg}
                        />
                      }
                      showErrorModal={showErrorModal}
                    />
                  }
                  nav={
                    <NavDash
                      isActiveTwo={isActiveTwo}
                      setActiveTwo={setActiveTwo}
                      isActiveThree={isActiveThree}
                      setActiveThree={setActiveThree}
                    />
                  }
                  search={<Search searchDash={searchDash} />}
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
                          addUpdateQuote={addUpdateQuote}
                          quote={quote}
                          setQuote={setQuote}
                          movieTitle={movieTitle}
                          setMovieTitle={setMovieTitle}
                        />
                      }
                      isloading={isLoading}
                      loading={<Loading />}
                      errorModal={
                        <PopUpErrorModal
                          showErrorModal={showErrorModal}
                          setShowErrorModal={setShowErrorModal}
                          errMsg={errMsg}
                        />
                      }
                      showErrorModal={showErrorModal}
                    />
                  }
                  nav={
                    <NavDash
                      isActiveTwo={isActiveTwo}
                      setActiveTwo={setActiveTwo}
                      isActiveThree={isActiveThree}
                      setActiveThree={setActiveThree}
                    />
                  }
                  search={<Search searchDash={searchDash} />}
                />
              }
            />
            <Route
              path="update/"
              element={
                <Dashboard
                  content={
                    <NotificationCreated
                      quoteObject={quoteObject}
                      isLoading={isLoading}
                      loading={<Loading />}
                      setActiveTwo={setActiveTwo}
                      setActiveThree={setActiveThree}
                    />
                  }
                  nav={
                    <NavDash
                      isActiveTwo={isActiveTwo}
                      setActiveTwo={setActiveTwo}
                      isActiveThree={isActiveThree}
                      setActiveThree={setActiveThree}
                    />
                  }
                  search={<Search searchDash={searchDash} />}
                />
              }
            />
        </Route>
        <Route path="/login" element={<Login setDashboard={setDashboard} />} />
        <Route path="/api/docs/" element={<APIInfo />} />
          <Route
            path="/quotes/search/results"
            element={
              <SearchResults
                searchResults={searchResults}
                handleSearchClose={handleSearchClose}
                previousURL={previousURL}
                dashboard={dashboard}
              />
            }
          />
      </Routes>
    </>
  )
}

export default App