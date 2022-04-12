import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BreadComponent } from "./components/Breadcrumbs";
import api from "./utils/Api";
import { Main } from './components/MainText/index';
import Spinner from "./Spinner";
import { message } from "antd";
import { Post } from "./components/Post/post";

const ID_POST ="622bd9e806c7d323b8ae4615";

export const PagePost = () => {
  const [post, setPost] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState({});
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

   useEffect(() => {
    // api.getPostList()
    // .then(data => console.log(data))
    // .catch(error => console.log(error))

    // api.getPostUser()
    // .then(data => console.log(data))
    // .catch(error => console.log(error))

    Promise.all([api.getPostById(ID_POST), api.getPostUser()])
    .then(([postsData, authorData]) => {
        setPost(postsData);
      setCurrentAuthor(authorData)
    })
  }, [])
function handlePostLike({_id, likes}) {
   const liked = likes.some(id => id === currentAuthor._id)
  api.changeLikePost(_id, liked)
  .then((newPost) => {
        // const newPostList = items.map(p => {
        //        return p._id === newPost._id ? newPost : p
        // })
        setPost(newPost);
  })
}
// function handlePostDelete(_id) {
//   console.log(_id);
//   let confirmDelete = confirm("Удалить пост?");
//   if (confirmDelete) {
//     api.deletePost(_id).then(() => {
//       api.getPostList().then((newPostListAfterDelete) => {
//         setItems(newPostListAfterDelete);
//       });
//     });
//   }
// }

  return (
    <>
      <Header/>
      {/* <BreadComponent/> */}
      {/* <Main author={currentAuthor} currentAuthor={currentAuthor} onPostLike={handlePostLike}/> */}
      {/* <Spinner/> */}
      <Post {...post} currentAuthor={currentAuthor} onPostLike={handlePostLike}/>
      <Footer />
    </>
  );
};
