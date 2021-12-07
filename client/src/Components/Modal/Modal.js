import React from "react";
import { useRef, useEfffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import "./Modal.scss";
import { MdClose } from "react-icons/md";
import useSound from 'use-sound';
import jingleBell from '../../assets/music/jingleBell.mp3';

function Modal({ showModal, setShowModal }) {
  const [play, { stop }] = useSound(jingleBell)
  return (
    <div>
      {showModal ? (
        <div className="modalPoster">
          <div className="modalPoster__content">
            <div className="modalPoster__content--text">
           <p className="modalPoster__content--text1"> "Special Thanks Jim Bennett,</p>
           <p className="modalPoster__content--text1"> Anvit Srivastav, Atom van der Merwe &  Betty Kassa"</p>

            <p> Happy New Year And Merry Christmas to Everyone</p>
            <p> 🙌</p>
            </div>
          </div>
          <button
            className="modalPoster__close"
            onClick={() => setShowModal((prev) => !prev) }
          >
            x
          </button>
          <button   className="modalPoster__music" onClick={() => play()}> Play Me 🎵</button>
          <button   className="modalPoster__pause" onClick={() => stop()}> Stop Me ✋ </button>
          {/* <Music /> */}
        </div>
      ) : null}
    </div>
  );
}

export default Modal;

//Reference Link
//https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs;
//https://github.com/joshwcomeau/use-sound
//https://www.codegrepper.com/code-examples/javascript/modal+play+audio+react{/* <button className="modal__Button" onClick={()=>{openModal();play()}} >Click Me!</button> */}