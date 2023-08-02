import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NewQuote from './NewQuote'
import Nav from './Nav'

const Dashboard = ({content}) => {
  return (
    <>
      <div className="dashboardContent">
      <h4>Dashboard</h4>
        <Nav />
        {content}
      </div>
    </>
  )
}

export default Dashboard