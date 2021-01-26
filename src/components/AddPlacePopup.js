import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {

    return (
        <PopupWithForm
            name="add"
            title="Новое место"
            isOpen={isOpen}
            onClose={onClose}>
            <form className="popup__form popup__form_add" name="add-form" noValidate>
                <input className="popup__input popup__input_image-title" placeholder="Название" type="text" name="name"
                       id="image-title" minLength="2" maxLength="30" required/>
                <span className="popup__error" id="image-title-error"/>
                <input className="popup__input popup__input_link-of-image" placeholder="Ссылка на картинку" type="url"
                       name="link"
                       id="link-of-image" required/>
                <span className="popup__error" id="link-of-image-error"/>
            </form>
        </PopupWithForm>
    )
}
export default AddPlacePopup