import React from 'react'
import AllQuotesDisplay from '../AllQuotesDisplay'

const EditContent = ({ displayQuotes, modal, errorModal, showErrorModal }) => {
  return (
    <div className="content">
      <h6>Edit Quotes</h6>
      <div className="editDisplay">{displayQuotes}</div>
      {modal}
      {showErrorModal && errorModal}
    </div>
  )
}

export default EditContent