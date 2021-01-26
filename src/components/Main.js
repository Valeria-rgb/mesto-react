import React from "react";
import Card from "./Card";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import myApi from "../utils/api";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        myApi.getCards()
            .then((cards) => {
                setCards(cards);
            })
            .catch((err) => console.log(`Упс!: ${err}`))
    }, []);

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

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={currentUser.avatar} alt="Аватар"/>
                    <button className="profile__avatar-button" onClick={onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <div className="profile__text">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__edit-button" type="button" aria-label="Edit" onClick={onEditProfile}/>
                    </div>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}/>
            </section>
            <section className="elements">
                <ul className="cards">
                    {cards.map((card) => (
                        <Card
                            card={card}
                            onCardClick={onCardClick}
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete}
                            key={card._id}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;