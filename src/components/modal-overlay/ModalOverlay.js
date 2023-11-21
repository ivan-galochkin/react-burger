import modalOverlayStyle from "./modal-overlay.module.css"
export function ModalOverlay({closePopup, children}) {
    function closePopupOverlay(evt) {
        if (evt.target === evt.currentTarget) {
            closePopup();
        }
    }
    return(
        <section className={modalOverlayStyle.container} onClick={closePopupOverlay}>
            {children}
        </section>
    )
}