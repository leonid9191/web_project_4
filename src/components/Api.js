export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  /**
   * get info about user from server
   * @returns Object
   */
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
      .catch((err) => {
        console.log(err);
      });
  }
  editUserInfo(newUserInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(newUserInfo),
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
      .catch((err) => {
        console.log(err);
      });
  }


}
