import React, { useState, useEffect } from "react";
// import { postData } from "./posts";
import { CardsList } from "./components/CardList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BreadComponent } from "./components/Breadcrumbs";
import api from "./utils/Api";
import { Main } from './components/MainText/index';
import Spinner from "./Spinner";

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
// function handlePostDelete({_id}) {
//   api.deletePost(_id)
//  .then((delPost) => {
//        const newPostListAfterDelete = items.map(p => {
//               return p._id === delPost._id ? delPost : p
//        })
//        setItems(newPostListAfterDelete);
//  })
// }
  return (
    <>
      <Header/>
      <BreadComponent/>
      <Main author={currentAuthor}/>
      {/* <Spinner/> */}
      <CardsList list={items} onPostLike={handlePostLike} currentAuthor={currentAuthor} /*onPostDelete={handlePostDelete}*//>
      <Footer />
    </>
  );
};
