import React from 'react'
import QuoteForm from './QuoteForm'

const EditQuote = ({ addQuote }) => {
  return (
    <div className='content'>
      <h6>Edit Quote</h6>
      <QuoteForm addQuote={addQuote} />
    </div>
  )
}

export default EditQuote