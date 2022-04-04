import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BreadComponent } from "./components/Breadcrumbs";
import api from "./utils/Api";
import './index.css';
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
console.log(currentAuthor);
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
  let confirmDelete = confirm("Удалить пост?");
  if (confirmDelete) {
    setIsLoadingPosts(true);
    api.deletePost(_id).then(() => {
      api.getPostList()
      .then((newPostListAfterDelete) => {
        return setItems(newPostListAfterDelete)
      })
    })
    .catch(err => console.log(err))
        .finally( () => {
          setTimeout(() => setIsLoading(false), 200)
        })
  }
  if (!currentAuthor.id) {
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
          handlePostDelete={handlePostDelete}
          />
        }/>
      <Route path="/post/:postID" 
      element= {
        <PagePost 
        cards={items}
        currentAuthor={currentAuthor}
        handlePostLike={handlePostLike}
        handlePostDelete={handlePostDelete}
        />
      }
      />
      <Route path="*" className="errorMessage" element={<h1>Ошибка 404: страница не найдена</h1>}/>
        </Routes>
      {isLoadingPosts ? <Spinner/> : <></>}
      <Footer />
    </CurrentAuthorContext.Provider>
  );
};
