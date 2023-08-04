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
            When learning about DOM Elements and how to manipulate them reminds
            you of family.
          </p>
          <img
            className="container"
            src="https://images.pling.com/img/00/00/62/80/83/1589921/a4ba72250479192f69456e48f51cc1db0bd188a47418fcf4ad82b0e4aca4ad2f9a4f.jpg"
            alt="torretto-family"
          />
        </section>
        <div className="back">
          <div className="container">{showQuote}</div>
          <hr />
          <section className="container apiBreif">
            <div className="container">
              <h3>Quick API Lookup</h3>
              <p>
                Get a random Dom Torretto Quote through the following endpoint:
              </p>
              <p>
                GET{" "}
                <Link
                  to={
                    "https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/"
                  }
                  target="_blank"
                >
                  https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/
                </Link>
              </p>
            </div>
            <div className="container">
              <p>Authentication required</p>
              <p>Returns a JSON</p>
            </div>
            <div className="container">
              <p>No</p>
              <div className="json">
                <p>&#123;</p>
                <p> <span>"id"</span> : <span>2</span>,</p>
                <p><span>"quote"</span>  : "I don't have friends, I have a family.",</p>
                <p><span>"movie_title"</span>  : "Fast & Furious 7"</p>
                <p>&#125;</p>
              </div>
            </div>
            <div className="container">
              <h6>
                Other GET endpoints:
              </h6>
              <p>Get all Dom Torretto quotes:</p>
              <p>
                <Link
                  to={
                    "https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all"
                  }
                  target="_blank"
                >
                  https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all
                </Link>
              </p>
              <p>Get a single Dom Torretto quote:</p>
              <p>
                <Link
                  to={
                    "https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all/2/"
                  }
                  target="_blank"
                >
                  https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all/&#60;quote_id&#62;/
                </Link>
              </p>
            </div>
            <div className="container">
              <h6>
                POST endpoint:
              </h6>
              <p>Search for a Dom Torretto quote:</p>
              <p>
                <Link
                  to={
                    "https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all/search/"
                  }
                  target="_blank"
                >
                  https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/all/search/
                </Link>
              </p>
            </div>
            <div className="container">
              <div className="jsonPost">
                <p>&#123;</p>
                <p><span>"user"</span>  : "a placeholder field",</p>
                <p><span>"search"</span>  : "Family"</p>
                <p>&#125;</p>
              </div>
            </div>
          </section>
          <hr />
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
  );
}

export default Home