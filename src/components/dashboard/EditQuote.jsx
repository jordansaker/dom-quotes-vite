import React from 'react'

const EditQuote = ({ form, isloading, loading, showErrorModal, errorModal }) => {
  return (
    <div className='content'>
      <h6>Edit Quote</h6>
      { !isloading ? form : loading }
      {showErrorModal && errorModal}
    </div>
  )
}

export default EditQuote