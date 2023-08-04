import React from 'react'

const EditQuote = ({ form, isloading, loading }) => {
  return (
    <div className='content'>
      <h6>Edit Quote</h6>
      { !isloading ? form : loading }
    </div>
  )
}

export default EditQuote