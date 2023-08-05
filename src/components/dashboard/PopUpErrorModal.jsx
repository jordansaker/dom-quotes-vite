import React from 'react'

const PopUpErrorModal = ({showErrorModal, setShowErrorModal, errMsg}) => {
  const changeModalClass = showErrorModal ? "error-content display-block" : "error-content display-none"

  return (
    <div className={changeModalClass}>
        <span className='fa fa-times' onClick={() => setShowErrorModal(false)}></span>
        <p>{errMsg}</p>
    </div>
  )
}

export default PopUpErrorModal