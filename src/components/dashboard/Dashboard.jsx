import React from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../auth/AuthModule'

const Dashboard = ({content, nav, search}) => {
  return (
    <>
      {auth.admin === 'Admin access' ? 
      <div className="dashboardContent">
        <div>
          <h4>Dashboard</h4>
          {search}
        </div>
        {nav}
        {content}
      </div>
      : <Navigate to={'/login'} replace /> }
    </>
  )
}

export default Dashboard