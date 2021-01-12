class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _sendData(path, headers) {
        return fetch(`${this._url}${path}`, headers)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Произошла ошибка: ${res.status}`);
            })
    }

    getUserInfo() {
        return this._sendData("users/me", {
            method: "GET",
            headers: this._headers
        })
    }

    getCards() {
        return this._sendData("cards", {
            method: "GET",
            headers: this._headers
        })
    }

    getStartData() {
        return Promise.all([
            this.getUserInfo(),
            this.getCards()
        ]);
    }

    changeUserInfo(name, description) {
        return this._sendData("users/me", {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: description
            })
        })
    }

    addCard(card) {
        return this._sendData("cards", {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: card.name,
                link: card.link
            })
        })
    }

    addLike(cardId) {
        return this._sendData(`cards/likes/${cardId}`, {
            method: "PUT",
            headers: this._headers
        })

    }

    deleteCard(card) {
        return this._sendData(`cards/${card}`, {
            method: "DELETE",
            headers: this._headers
        })
    }

    deleteLike(cardId) {
        return this._sendData(`cards/likes/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        })
    }

    changeAvatar(avatar) {
        return this._sendData('users/me/avatar', {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
            })
        })
    }

}

const myApi = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-18/",
    headers: {
        authorization: '4ce0d8a0-2bf1-4ede-8511-f9af6b75d79f',
        'Content-Type': 'application/json'
    }
});

export default myApi;


