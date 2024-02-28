import { useState } from 'react';
import 'react-responsive-modal/styles.css';

const Modal_register = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <div>
            <button
                className="btn-modal"
                onClick={toggleModal}>Open
            </button>

            {modal && <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <p>Votre inscription est validée.</p>
                    <button className="close-modal"
                        onClick={toggleModal}>Fermer</button>
                </div>
            </div>}
        </div>
    );
};

export default Modal_register;


/*const Modal_register = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <button onClick={onOpenModal}>Open modal</button>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Simple centered modal</h2>
            </Modal>
        </div>
    );
};

export default Modal_register;*/
