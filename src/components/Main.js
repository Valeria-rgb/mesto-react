function Main() {

    function handleEditAvatarClick() {
        const avatarPopup = document.querySelector('.popup_new-avatar');
        avatarPopup.classList.add('popup_opened')
    }

    function handleEditProfileClick() {
        const EditProfilePopup = document.querySelector('.popup_edit');
        EditProfilePopup.classList.add('popup_opened')
    }

    function handleAddPlaceClick() {
        const AddPlacePopup = document.querySelector('.popup_add');
        AddPlacePopup.classList.add('popup_opened')
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src="<%=require('./images/profile__avatar.png')%>" alt="Аватар"/>
                    <button onClick={handleEditAvatarClick} className="profile__avatar-button"></button>
                </div>
                <div className="profile__info">
                    <div className="profile__text">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button onClick={handleEditProfileClick} className="profile__edit-button" type="button" aria-label="Edit"></button>
                    </div>
                    <p className="profile__description">Исследователь океана</p>
                </div>
                <button onClick={handleAddPlaceClick} className="profile__add-button" type="button"></button>
            </section>
            <section className="elements">
                <ul className="cards">
                </ul>
            </section>
        </main>
    );
}

export default Main;