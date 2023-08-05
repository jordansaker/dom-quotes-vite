import React, { useState } from 'react'

const NewQuote = ({ form, errorModal, showErrorModal }) => {

  return (
    <div className='content'>
      <h6>Add New Quote</h6>
      {form}
      {showErrorModal && errorModal}
    </div>
  )
}

export default NewQuote