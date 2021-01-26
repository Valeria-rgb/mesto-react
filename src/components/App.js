import React from "react";
import '../index.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import ImagePopup from '../components/ImagePopup';
import EditProfilePopup from '../components/EditProfilePopup';
import EditAvatarPopup from '../components/EditAvatarPopup';
import AddPlacePopup from '../components/AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import myApi from "../utils/api";


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({link: "", name: "", isOpen: false});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
        myApi.getCards()
            .then((cards) => {
                setCards(cards);
            })
            .catch((err) => console.log(`Упс!: ${err}`))
    }, []);

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

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        myApi.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                setCards(newCards);
            })
            .catch((err) => console.log(`Упс!: ${err}`));
    }

    function handleCardDelete(card) {
        myApi.deleteCard(card._id)
            .then(() => {
                const newCards = cards.filter((c) => c._id !== card._id);
                setCards(newCards);
            })
            .catch((err) => console.log(`Упс!: ${err}`));
    }

    function handleUpdateUser(data) {
        myApi.changeUserInfo(data)
            .then(() => {
                setCurrentUser({...currentUser, ...data});
                closeAllPopups();
            })
            .catch((err) => console.log(`Упс!: ${err}`));
    }

    function handleUpdateAvatar(avatar) {
      myApi.changeAvatar(avatar)
          .then(() => {
              setCurrentUser({...currentUser, avatar: avatar});
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
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer/>
          <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
          <PopupWithForm name="delete-photo" title="Вы уверены?"/>
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
      </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
