import React from "react";
import '../index.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import ImagePopup from '../components/ImagePopup';
import EditProfilePopup from '../components/EditProfilePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import myApi from "../utils/api";


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({link: "", name: "", isOpen: false});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
        myApi.getUserInfo()
            .then(data => {
                setCurrentUser(data)})
            .catch((err) => console.log(`Упс!: ${err}`))
    }, []);


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

    function handleUpdateUser(data) {
        myApi.changeUserInfo(data)
            .then(() => {
                setCurrentUser({...currentUser, ...data});
                closeAllPopups();
            })
            .catch((err) => console.log(`Упс!: ${err}`));
    }


    function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({link: "", name: "", isOpen: false});
  }

  return (
      <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
          <Header/>
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer/>
          <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
          />
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
      </CurrentUserContext.Provider>
  );
}

export default App;
