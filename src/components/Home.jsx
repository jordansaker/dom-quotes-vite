import React from 'react'
import ShowQuote from './ShowQuote'
import { Link } from 'react-router-dom'

const Home = ({ showQuote}) => {
  return (
    showQuote && (
      <>
        <h1>Home</h1>
          <section className="hero">
            <p>
              When learning about DOM Elements and how to manipulate them
              reminds you of family.
            </p>
            <img
              className="container"
              src="https://images.pling.com/img/00/00/62/80/83/1589921/a4ba72250479192f69456e48f51cc1db0bd188a47418fcf4ad82b0e4aca4ad2f9a4f.jpg"
              alt="torretto-family"
            />
          </section>
          <div className='back'>
          <div className="container">{showQuote}</div>
          <section className="container d-flex api">
            <div className="container">
              <h4>API</h4>
              <ul>
                <li>
                  <Link to={"/api/docs/"}>Docs</Link>
                </li>
                <li>
                  <Link to={"https://github.com/jordansaker/dom-quotes-api"}>
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
            <div className="container">
              <h4>Disclaimer</h4>
              <p>
                Dom Quotes API is only intended for educational purposes on APIs
                and client-side development. All quotable content are not owned
                by the developer.
              </p>
            </div>
          </section>
        </div>
      </>
    )
  )
}

export default Home