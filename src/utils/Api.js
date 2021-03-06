
const onRespPosts = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
  constructor({ baseUrl, token }) {
    this._baseUrl = baseUrl;
    this._token = `Bearer ${token}`;
  }
  // getPostList() {
  //   return fetch(`${this._baseUrl}/posts`, {
  //     headers: {
  //       authorization: this._token,
  //     },
  //   }).then(onRespPosts)  
  // }
  getPostList(page = 1, limit = 100, query ="") {
    return fetch(`${this._baseUrl}/posts/paginate/?page=${page}&limit=${limit}&query=${query}`, {
      headers: {
        authorization: this._token,
      },
    }).then(onRespPosts)  
  }
  getPostUser() {
      return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then(onRespPosts)  
  }

  setUserChange(authorData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
    headers: {
      authorization: this._token,
      "Content-type": "application/json"
    },
    body: JSON.stringify(authorData)
  }).then(onRespPosts)  
}
setPostCreate(data) {
  return fetch(`${this._baseUrl}/posts`, {
    method: "POST",
  headers: {
    authorization: this._token,
    "Content-type": "application/json"
  },
  body: JSON.stringify(data)
}).then(onRespPosts)  
}
setPostEdit(_id, editPost) {
  console.log(_id);
  return fetch(`${this._baseUrl}/posts/${_id}`, {
    method: "PATCH",
  headers: {
    authorization: this._token,
    "Content-type": "application/json"
  },
  body: JSON.stringify(editPost)
}).then(onRespPosts)  
}

  changeLikePost(likeId, isLike) {
    return fetch(`${this._baseUrl}/posts/likes/${likeId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: {
        authorization: this._token,
      },
    }).then(onRespPosts)  
  }
  deletePost(_id) {
    console.log(_id);
    return fetch(`${this._baseUrl}/posts/${_id}`, {
      method:  "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(onRespPosts)  
  }
  getPostById(postId) {
    return fetch(`${this._baseUrl}/posts/${postId}`, {
      headers: {
        authorization: this._token,
      },
    }).then(onRespPosts)  
  }


}
 const userUrl = {
     baseUrl: "https://api.react-learning.ru",
     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYzUiLCJpYXQiOjE2NDcwMTM4ODcsImV4cCI6MTY3ODU0OTg4N30.oi5z8nPWjrWMSxFIMWbZmgtZsrPc7sSt3gapDy-54LU',
 }
const api = new Api(userUrl);

export default api;