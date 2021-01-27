import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = React.useRef();

    function handleChangeAvatar(e) {
        avatarRef.current.value = e.target.value;
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarRef.current.value);
    }

    return (
        <PopupWithForm
            name="new-avatar"
            title="Обновить аватар"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <form className="popup__form popup__form_avatar">
                <input
                    className="popup__input popup__input_avatar"
                    placeholder="Ссылка на картинку"
                    type="url"
                    name="avatar"
                    ref={avatarRef}
                    onChange={handleChangeAvatar}
                    id="link-of-image" required
                />
                <span className="popup__error" id="link-of-image-error"/>
            </form>
        </PopupWithForm>
    )
}

export default EditAvatarPopup