import React from 'react'
import ReactDOMS from 'react-dom'

import './modal.scss'

const portalRoot = document.getElementById('portal-root')

const Modal = ({ children, isOpen, onClose }) => {

    if(!isOpen) {
        return null
    }

    return ReactDOMS.createPortal(
        <div className="modal-background" >
            <div className="modal" >
                <button type="button" onClick={onClose} >x</button>
                {children}
            </div>
        </div>,
        portalRoot,
    )

}

export default Modal