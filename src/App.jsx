import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BreadComponent } from "./components/Breadcrumbs";
import api from "./utils/Api";
import Spinner from "./Spinner";
import { message } from "antd";
import { PageCatalog } from "./pages/CatalogPage/CatalogPage";
import { PagePost } from "./pages/PostPage/PostPage";
import { Route, Routes } from "react-router-dom";
import { CurrentAuthorContext } from './Context/currentAuthorContext';

export const App = () => {
  const [items, setItems] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState({});
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
   useEffect(() => {
    // api.getPostList()
    // .then(data => console.log(data))
    // .catch(error => console.log(error))

    // api.getPostUser()
    // .then(data => console.log(data))
    // .catch(error => console.log(error))

    Promise.all([api.getPostList(), api.getPostUser()])
    .then(([postsData, authorData]) => {
      setItems(postsData);
      setCurrentAuthor(authorData)
    })
  }, [])
function handlePostLike({_id, likes}) {
   const liked = likes.some(id => id === currentAuthor._id)
  api.changeLikePost(_id, liked)
  .then((newPost) => {
        const newPostList = items.map(p => {
               return p._id === newPost._id ? newPost : p
        })
        setItems(newPostList);
  })
}
function handlePostDelete(_id) {
  // console.log(currentAuthor);
  let confirmDelete = confirm("Удалить пост?");
  if (confirmDelete) {
    api.deletePost(_id).then(() => {
      api.getPostList().then((newPostListAfterDelete) => {
        setItems(newPostListAfterDelete);
      });
    });
  }
  if (status === "403") {
    alert("Запрещено удалять чужой пост")
  }
}
  return (
    <CurrentAuthorContext.Provider value={currentAuthor}>
      <Header/>
      <BreadComponent/>
      <Routes>
        <Route path="/" element={
          <PageCatalog
          currentAuthor={currentAuthor}
          items={items}
          handlePostLike={handlePostLike}
          />
        }/>
      <Route path="/post/:postID" 
      element= {
        <PagePost 
        currentAuthor={currentAuthor}
        handlePostLike={handlePostLike}
        />
      }
      />
      <Route path="*" element={<h1>Ошибка 404: страница не найдена</h1>}/>
        </Routes>
      
      <Footer />
    </CurrentAuthorContext.Provider>
  );
};
