import React from 'react'

const DeleteModal = ({ modalHandleClick, quoteID, showModal, setShowModal }) => {
  const changeModalClass = showModal ? "modal display-block" : "modal display-none"

  return (
    <div className={changeModalClass} onClick={() => setShowModal(false)}>
      <div className="modal-content">
        <p>Are you sure you want to delete quote?</p>
        <div>
          <button value={quoteID} onClick={modalHandleClick}>
            Yes
          </button>
          <button onClick={() => setShowModal(false)}>No</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal