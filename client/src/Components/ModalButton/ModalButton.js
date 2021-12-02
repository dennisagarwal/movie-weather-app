import React from 'react'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import "./ModalButton.scss"

function ModalButton() {
  const [showModal,setShowModal]=useState(false)

  const openModal=()=>{
    setShowModal(prev=>!prev)
  }
  return (
    <div className="modal">
      <button className="modal__Button" onClick={openModal}>Click Me!</button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default ModalButton
