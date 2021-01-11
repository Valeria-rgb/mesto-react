
import '../index.css';
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'


function App() {
  return (
      <>
      <div className="root">
        <Header/>
        <Main/>
        <Footer/>
        <section className="popups">
          <div className="popup popup_edit">
            <div className="popup__container">
              <button className="popup__close-button popup__close-button_edit-popup" type="button"></button>
              <form className="popup__form popup__form_edit" name="edit-form" noValidate>
                <h3 className="popup__title">Редактировать профиль</h3>
                <input className="popup__input popup__input_name" placeholder="Имя" type="text" name="name"
                       id="name-field"
                       minLength="2" maxLength="40" required/>
                  <span className="popup__error_visible" id="name-field-error"></span>
                  <input className="popup__input popup__input_description" placeholder="Род занятий" type="text"
                         name="description/"
                         id="description-field" minLength="2" maxLength="200" required/>
                    <span className="popup__error_visible" id="description-field-error"></span>
                    <button className="popup__submit" type="submit">Сохранить</button>
              </form>
            </div>
          </div>
          <div className="popup popup_add">
            <div className="popup__container popup__container_add">
              <button className="popup__close-button popup__close-button_add-popup" type="button"></button>
              <form className="popup__form popup__form_add" name="add-form" noValidate>
                <h3 className="popup__title popup__title_add">Новое место</h3>
                <input className="popup__input popup__input_image-title" placeholder="Название" type="text" name="name"
                       id="image-title" minLength="2" maxLength="30" required/>
                  <span className="popup__error" id="image-title-error"></span>
                  <input className="popup__input popup__input_link-of-image" placeholder="Ссылка на картинку" type="url"
                         name="link"
                         id="link-of-image" required/>
                    <span className="popup__error" id="link-of-image-error"></span>
                    <button className="popup__submit" type="submit">Создать</button>
              </form>
            </div>
          </div>
          <div className="popup popup_scale-photo">
            <div className="popup__photo-container">
              <button className="popup__close-button popup__close-button_photo"></button>
              <img className="popup__photo"/>
                <h2 className="popup__photo-title"></h2>
            </div>
          </div>
          <div className="popup popup_delete-photo">
            <div className="popup__container">
              <button className="popup__close-button" type="button"></button>
              <div className="popup__form">
                <h3 className="popup__title popup__title_delete">Вы уверены?</h3>
                <button className="popup__submit" type="submit">Да</button>
              </div>
            </div>
          </div>
          <div className="popup popup_new-avatar">
            <div className="popup__container">
              <button className="popup__close-button" type="button"></button>
              <form className="popup__form popup__form_avatar">
                <h3 className="popup__title">Обновить аватар</h3>
                <input className="popup__input popup__input_avatar" placeholder="Ссылка на картинку" type="url"
                       name="avatar"
                       id="link-of-image" required/>
                  <span className="popup__error" id="link-of-image-error"></span>
                  <button className="popup__submit" type="submit">Сохранить</button>
              </form>
            </div>
          </div>
        </section>
      </div>
        </>
  );
}

export default App;
