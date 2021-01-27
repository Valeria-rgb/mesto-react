import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setName('');
        setLink('');
    },[]);

    function handleAddCardName(e) {
        setName(e.target.value);
    }

    function handleAddCardLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        onAddPlace({
            name,
            link
        });
    }

    return (
        <PopupWithForm
            name="add"
            title="Новое место"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            button={isLoading ? "Сохранение..." : "Создать"}>
            <form className="popup__form popup__form_add" name="add-form" noValidate>
                <input className="popup__input popup__input_image-title" placeholder="Название" type="text"
                       name="name"
                       value={name}
                       onChange={handleAddCardName}
                       id="image-title" minLength="2" maxLength="30" required/>
                <span className="popup__error" id="image-title-error"/>
                <input className="popup__input popup__input_link-of-image" placeholder="Ссылка на картинку" type="url"
                       name="link"
                       value={link}
                       onChange={handleAddCardLink}
                       id="link-of-image" required/>
                <span className="popup__error" id="link-of-image-error"/>
            </form>
        </PopupWithForm>
    )
}
export default AddPlacePopup