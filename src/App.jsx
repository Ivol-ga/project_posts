import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { BreadComponent } from "./components/Breadcrumbs";
import api from "./utils/Api";
import './index.css';
import Spinner from "./Spinner";
import { message } from "antd";
import { PageCatalog } from "./pages/CatalogPage/CatalogPage";
import { PagePost } from "./pages/PostPage/PostPage";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { CurrentAuthorContext } from './Context/currentAuthorContext';
import { PostCreate } from "./pages/PostCreate/postCreate";
import { Modal } from "./components/Modal/Modal";
import { EditPost } from './components/EditPost/EditPost';
import PaginationMUI from './components/Pagination/index';


export const App = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState({});
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [createPost, setCreatePost] = useState([]);
  const [activePost, setActivePost] = useState(false);

  const [page, setPage] = useState(parseInt(location.search?.split("=")[1]) || 1);
	const [pageLimit, setPageLimit] = useState(8);
	const [pageQty, setPageQty] = useState(0);
  const state = location.state;

   useEffect(() => {
    // api.getPostList()
    // .then(data => console.log(data))
    // .catch(error => console.log(error))

    // api.getPostUser()
    // .then(data => console.log(data))
    // .catch(error => console.log(error))
// const token = localStorage.getItem('jwt')
// if(loggedIn)
    Promise.all([api.getPostList(page, pageLimit), api.getPostUser()])
      .then(([postsData, authorData]) => {
      setItems(postsData.posts);
      setPageQty(postsData.total);
      setCurrentAuthor(authorData)
       })
  }, [page, pageLimit])
 
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
function getIdPostForForm (_id) {
  let id = _id
  }
// const handleBtnCreate = () => {
//   <Link to={`/post`} className="create__post">
//   </Link>
// }
  // api.setPostCreate()
  // .then(() => {
  //   api.getPostList()
  //   .then((newPostListAfterCreate) => {
  //      setItems(newPostListAfterCreate)
  //   })
  // })

function handlePostDelete(_id) {
  let confirmDelete = confirm("Удалить пост?");
  if (confirmDelete) {
    setIsLoadingPosts(true);
    api.deletePost(_id).then(() => {
      api.getPostList()
      .then((newPostListAfterDelete) => {
        setPage()
        setPageLimit(8)
         setItems(newPostListAfterDelete.posts)
        
      })
    })
    .catch(err => console.log(err))
        .finally( () => {
           setIsLoadingPosts(false)
        })
  }
 }
function handleAuthorUpdate (authorUpdate) {
     api.setUserChange(authorUpdate)
     .then((newAuthorData) => {setCurrentAuthor(newAuthorData)
     })
}
function handlePostEditModal({setActive}) {
  setActivePost(true);    
  }
 
  return (
    <CurrentAuthorContext.Provider value={currentAuthor}>
      <Header/>
      <BreadComponent/>
      <Modal active={activePost} setActive={setActivePost} getIdPostForForm={getIdPostForForm}>
        <EditPost/>
      </Modal>
      <Routes>
        <Route path="/" 
        element={isLoadingPosts ? <Spinner/> : <PageCatalog
          currentAuthor={currentAuthor}
          items={items}
          handlePostLike={handlePostLike}
          handlePostDelete={handlePostDelete}
          onUpdateAuthor={handleAuthorUpdate}
          handlePostEditModal={handlePostEditModal}
          active={activePost} setActive={setActivePost} 
          // handleBtnCreate={handleBtnCreate}
          />
        }/>
      <Route path="/post/:postID" 
      element= {
        <PagePost 
        cards={items}
        currentAuthor={currentAuthor}
        handlePostLike={handlePostLike}
        handlePostDelete={handlePostDelete}
        handlePostEditModal={handlePostEditModal}
        // getIdPostForm={getIdPostForm}
        />
      } />
      <Route path="/post" element={<PostCreate /*addPost={addPost}*//>}/>
      <Route path="*" className="errorMessage" element={<h1>Ошибка 404: страница не найдена</h1>}/>
        </Routes>
         <PaginationMUI page={page} pageQty={pageQty} pageLimit={pageLimit} setPage={setPage}/> 
        <Footer />
    </CurrentAuthorContext.Provider>
  );
};
