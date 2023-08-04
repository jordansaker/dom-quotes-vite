import React, { useState } from 'react'

const NewQuote = ({ form }) => {

  return (
    <div className='content'>
      <h6>Add New Quote</h6>
      {form}
    </div>
  )
}

export default NewQuote