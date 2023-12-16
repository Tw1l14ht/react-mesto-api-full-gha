class Api {
    constructor(options) {
      this._url = options.url;
      this._headers = options.headers;
    }

    _checkError(response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    getInitialCards() {
      return fetch(`${this._url}/cards`, {
        method: "GET",
        headers: this._headers,
      }).then((res) => this._checkError(res));
    }

    addNewCard(data) {
      return fetch(`${this._url}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(data),
      }).then((res) => this._checkError(res));
    }

    removeCard(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      }).then((res) => this._checkError(res));
    }
 
    removeLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this._headers,
      }).then((res) => this._checkError(res));
    }
    getLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers,
      }).then((res) => this._checkError(res));
    }

    getInfo() {
      return fetch(`${this._url}/users/me`, {
        method: "GET",
        headers: this._headers,
      }).then((res) => this._checkError(res));
    }
  
    patchUser(data) {
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify(data),
      }).then((res) => this._checkError(res));
    }
  
    patchAvatar(data) {
      return fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify(data),
      }).then((res) => this._checkError(res));
    }
  }

export const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-74",
  headers: {
      "content-type": "application/json",
      authorization: 'aa78bdd8-1a6d-4453-b15d-280d5ef8f7b0'
  }
});