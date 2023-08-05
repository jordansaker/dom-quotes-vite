import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NewQuote from './NewQuote'
import Nav from './NavDash'

const Dashboard = ({content, nav, search}) => {
  return (
    <>
      <div className="dashboardContent">
        <div>
          <h4>Dashboard</h4>
          {search}
        </div>
        {nav}
        {content}
      </div>
    </>
  )
}

export default Dashboard