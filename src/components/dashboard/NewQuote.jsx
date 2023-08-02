import React, { useState } from 'react'
import QuoteForm from './QuoteForm'

const NewQuote = ({ addQuote }) => {

  return (
    <div className='content'>
      <h6>Add New Quote</h6>
      <QuoteForm addQuote={addQuote} />
    </div>
  )
}

export default NewQuote