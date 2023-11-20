import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyle from "./modal.module.css"
import {useEffect} from "react";
import {ModalOverlay} from "../modal-overlay/ModalOverlay";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'


const modalRoot = document.getElementById("react-popup");

export default function Modal({closePopup, children}) {
    console.log(closePopup)
    useEffect(() => {
        function closePopupByEsc(evt) {
            if (evt.key === "Escape") {
                closePopup();
            }
        }
        window.addEventListener("keydown", closePopupByEsc);
        return () => {
            window.removeEventListener("keydown", closePopupByEsc);
        };
    });
    return ReactDOM.createPortal(
        (
            <ModalOverlay closePopup={closePopup}>
                <section className={modalStyle.popup}>
                    <div className={modalStyle.popup__button}>
                        <CloseIcon type={"primary"} onClick={() => {
                            closePopup();
                        }}/>
                    </div>
                    {children}
                </section>
            </ModalOverlay>
        ),
        modalRoot
    );
}

Modal.propTypes = {
    children: PropTypes.element,
    closePopup: PropTypes.func
}
