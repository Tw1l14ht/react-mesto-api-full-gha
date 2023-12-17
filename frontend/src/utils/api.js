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
      const token = localStorage.getItem("jwt");
      return fetch(`${this._url}/cards`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then((res) => this._checkError(res));
    }

    addNewCard(data) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._url}/cards`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }).then((res) => this._checkError(res));
    }

    removeCard(cardId) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._url}/cards/${cardId}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then((res) => this._checkError(res));
    }
 
    removeLike(cardId) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then((res) => this._checkError(res));
    }
    getLike(cardId) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then((res) => this._checkError(res));
    }

    getInfo() {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._url}/users/me`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then((res) => this._checkError(res));
    }
  
    patchUser(data) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }).then((res) => this._checkError(res));
    }
  
    patchAvatar(data) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }).then((res) => this._checkError(res));
    }
  }

export const api = new Api({
  url: "https://api.twilight1.nomoredomainsmonster.ru",
  headers: {
      "content-type": "application/json",
  }
});