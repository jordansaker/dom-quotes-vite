import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NewQuote from './NewQuote'
import Nav from './NavDash'

const Dashboard = ({content, nav}) => {
  return (
    <>
      <div className="dashboardContent">
      <h4>Dashboard</h4>
        {nav}
        {content}
      </div>
    </>
  )
}

export default Dashboard