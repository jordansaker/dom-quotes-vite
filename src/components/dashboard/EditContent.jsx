import React from 'react'
import AllQuotesDisplay from '../AllQuotesDisplay'

const EditContent = ({ displayQuotes, modal }) => {
  return (
    <div className="content">
      <h6>Edit Quotes</h6>
      <div className="editDisplay">{displayQuotes}</div>
      {modal}
    </div>
  )
}

export default EditContent