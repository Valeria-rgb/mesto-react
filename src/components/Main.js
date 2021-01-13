import React from "react";
import myApi from "../utils/api";
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        myApi.getStartData()
            .then(([{name, about, avatar}, cards]) => {
                setUserName(name);
                setUserDescription(about);
                setUserAvatar(avatar);
                setCards(cards);
            })
            .catch((err) => console.log(`Упс!: ${err}`))
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
                    <button className="profile__avatar-button" onClick={onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <div className="profile__text">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" aria-label="Edit" onClick={onEditProfile}/>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}/>
            </section>
            <section className="elements">
                <ul className="cards">
                    {cards.map((card) => (
                        <Card card={card} onCardClick={onCardClick} key={card._id}/>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;