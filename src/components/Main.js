import React from "react";
import myApi from "../utils/api";

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    React.useEffect(() => {
        myApi.getStartData()
            .then(([{name, about, avatar}]) => {
                setUserName(name);
                setUserDescription(about);
                setUserAvatar(avatar);
            })
            .catch((err) => console.log(`Упс!: ${err}`))
    }, []);



    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
                    <button className="profile__avatar-button" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__text">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" aria-label="Edit" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="cards">
                </ul>
            </section>
        </main>
    );
}

export default Main;