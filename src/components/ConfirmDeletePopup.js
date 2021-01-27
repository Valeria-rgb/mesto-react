import PopupWithForm from "./PopupWithForm";
import React from "react";

function ConfirmDeletePopup({ isOpen, onClose, onDeleteCard }) {

    function handleSubmit(e) {
        e.preventDefault();
        onDeleteCard();
    }

    return (
        <PopupWithForm
            name="delete-photo"
            title="Вы уверены?"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        />
    )
}
export default ConfirmDeletePopup