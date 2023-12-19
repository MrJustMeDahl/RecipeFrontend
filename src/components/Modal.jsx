import React from "react";
import  ReactDOM  from "react-dom";
import "../styling/Modal.css";

export default function Modal({open, children, onClose}){
    if (!open) return null

    return ReactDOM.createPortal(
        <>
        <div className="OVERLAY_STYLES">
        <div className="MODAL_STYLES">
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