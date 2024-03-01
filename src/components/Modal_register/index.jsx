import { useState } from 'react';
import PropTypes from "prop-types";
//import 'react-responsive-modal/styles.css'; // à utiliser avec le code en commentaire

const Modal_register = ({ showModal }) => {
    const [modal, setModal] = useState(showModal);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (

        <div className={`modal${modal ? "active-modal" : ""}`}>
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

/*Modal_register.propTypes = {
                showModal: PropTypes.boolean,
};*/
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
