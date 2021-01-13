import React from "react";
import '../index.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import ImagePopup from '../components/ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({link: "", name: "", isOpen: false});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

    function handleCardClick(card) {
        setSelectedCard({link: card.link, name: card.name, isOpen: true});
    }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({link: "", name: "", isOpen: false});
  }

  return (
      <div className="root">
          <Header/>
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}/>/>
          <Footer/>
          <PopupWithForm
              name="edit"
              title="Редактировать профиль"
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}>
            <form className="popup__form popup__form_edit" name="edit-form" noValidate>
             <input className="popup__input popup__input_name" placeholder="Имя" type="text" name="name"
                       id="name-field"
                       minLength="2" maxLength="40" required/>
                       <span className="popup__error_visible" id="name-field-error"/>
             <input className="popup__input popup__input_description" placeholder="Род занятий" type="text"
                         name="description/"
                         id="description-field" minLength="2" maxLength="200" required/>
                         <span className="popup__error_visible" id="description-field-error"/>
           </form>
          </PopupWithForm>
          <PopupWithForm
              name="add"
              title="Новое место"
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}>
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
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
          <PopupWithForm name="delete-photo" title="Вы уверены?"/>
          <PopupWithForm
            name="new-avatar"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}>
                  <form className="popup__form popup__form_avatar">
                      <input className="popup__input popup__input_avatar" placeholder="Ссылка на картинку"
                                 type="url" name="avatar"
                                 id="link-of-image" required/>
                          <span className="popup__error" id="link-of-image-error"/>
                  </form>
          </PopupWithForm>
      </div>
);
}
export default App;
