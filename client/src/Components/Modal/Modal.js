import React from 'react'
import { useState } from 'react'
import "./Modal.scss"


function Modal({showModal,setShowModal}) {
  return (
    <div className="modalPoster">
 {showModal? <div className="modalPoster__content"> Special Thanks TO Jim Benett Anvit Srivastav Atom & Betty</div>:null}
    </div>
  )
}

export default Modal
