function PopupWithForm({title, name, children, isOpen, onClose, onSubmit}) {
    return (
        <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className={`popup__container popup__container_${name}`}>
                <button className={`popup__close-button popup__close-button_${name}`} type="button" onClick={onClose}/>
                <form className={`popup__form popup__form_${name}`} onSubmit={onSubmit}>
                    <h3 className={`popup__title popup__title_${name}`}>{title}</h3>
                    {children}
                    <button className="popup__submit" type="submit">{name === 'delete-photo' ? 'Да' : 'Сохранить'}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm


