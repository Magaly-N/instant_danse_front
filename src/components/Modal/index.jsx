import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = ({ isShowing, hide }) => {
    return isShowing
        ? ReactDOM.createPortal(
            <React.StrictMode>
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="modale">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="modal-close-button"
                                    onClick={hide}
                                >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h4>Inscription validée</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </React.StrictMode>,
            document.body
        )
        : null;
};

export default Modal;