import React from 'react'
import AllQuotesDisplay from '../AllQuotesDisplay'

const EditContent = ({ displayQuotes }) => {
  return (
    <div className="content">
      <h6>Edit Quotes</h6>
      <div className="editDisplay">{displayQuotes}</div>
    </div>
  )
}

export default EditContent