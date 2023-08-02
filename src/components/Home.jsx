import React from 'react'
import ShowQuote from './ShowQuote'
import { Link } from 'react-router-dom'

const Home = ({ showQuote}) => {
  return (
    showQuote && (
      <>
        <h1>Home</h1>
        <div className="container">{showQuote}</div>
        <section className="container api">
          <h4>API</h4>
          <ul>
            <li>
              <Link to={"/api/docs/"}>Docs</Link>
            </li>
            <li>
              <Link to={'https://github.com/jordansaker/dom-quotes-api'}>GitHub</Link>
            </li>
          </ul>
        </section>
      </>
    )
  )
}

export default Home