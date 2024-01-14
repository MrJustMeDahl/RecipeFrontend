import React,{useRef, useEffect} from "react";
import  ReactDOM  from "react-dom";
import "../styling/Modal.css";

export default function Modal({open, children, onClose}){
    const modalRef = useRef();

    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          onClose();
        }
      };
  
      if (open) {
        document.addEventListener("mousedown", handleOutsideClick);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [open, onClose]);
    if (!open) return null

    return ReactDOM.createPortal(
        <>
        <div className="OVERLAY_STYLES">
        <div ref={modalRef} className="MODAL_STYLES">
            <div>
            <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>X</button>
            {children}
            </div>
        </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}

